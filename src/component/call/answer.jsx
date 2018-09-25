import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import socketIO from "socket.io-client"
import apiUrl from '../../config';
import {connect} from "react-redux"
import $ from "jquery"
function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile.bioData,
        media: state.profile.media
    }
}


class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected:false
        }
        this.sendRemoteDesc = this.sendRemoteDesc.bind(this)
        this.success = this.success.bind(this)
        this.close = this.close.bind(this)
    }

    componentDidMount() {
        var socket = this.props.socket; console.log(this.props.auth.user.username)
        window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;

            navigator.mediaDevices.getUserMedia({audio:true,video:true}).then((stream)=>
            {
                this.localStream = stream;
                this.localVideo.src = URL.createObjectURL(stream);
                console.log("getUserMedia was successful");
            })
            
            // $('.remoteVideo').hide()
            
    }
  // select  *  from userTable where username in not NULL;
  // usertable
    remoteuser(remotedesc){
        var socket = this.props.socket
        console.log("remotedesc came in",remotedesc)
        var sturnserver = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]}
        this.pc = new RTCPeerConnection(sturnserver);
        this.pc.onicecandidate = (e)=>{
            console.log("remote pc is trying to reach me",e.candidate)
            // this.pc.addIceCandidate(
            //     new RTCIceCandidate({
            //         sdpMLineIndex: message.mlineindex,
            //         candidate: message.candidate
            //     })
            // );
            if(e.candidate) socket.emit(`addIceCandidate`,{username:this.props.match.params.caller,candidate:e.candidate})

        }
        this.pc.addStream(this.localStream);
        this.pc.setRemoteDescription(remotedesc).then((desc)=>console.log("remote description set"));

        this.pc.createAnswer().then((desc)=>{
            this.localDesc = desc;
            this.pc.setLocalDescription(desc).then((desc)=>console.log("local description set"));
            this.sendRemoteDesc(desc);
        })

        this.pc.onaddstream = (e)=>
        { console.log("remote pc has added stream",e.stream)
            this.success(e.stream)
        }
        socket.on(`addIceCandidate${this.props.auth.user.username}`,(data)=>{
            console.log("candidate came in", data)
            this.pc.addIceCandidate(new RTCIceCandidate(data))
            this.setState({connected:true})
        })
    }

    success(stream){
        // $('.remoteVideo').show()

        this.remoteStream = stream;
        this.remoteVideo.src = URL.createObjectURL(stream);
        console.log(this.localStream.getVideoTracks()[0],this.remoteStream.getVideoTracks()[0])

        console.log("remote stream was added successful")
    }

 
    sendRemoteDesc(desc){
        var socket = this.props.socket
        socket.emit("setCallerRemoteDesc",{username:this.props.match.params.caller,desc:desc})
    }
    addIceCandidate(candidate){
     console.log(candidate,"candidate came in. add now")
    }
    close(){
      if(this.pc)  this.pc.close();
         window.close()
     }
    render() {
        var socket = this.props.socket;
         socket.on(`setRemoteDesc${this.props.auth.user.username}`,(desc)=>this.remoteuser(desc))
         socket.on(`addIceCandidate${this.props.auth.user.username}`,(candidate)=>this.addIceCandidate(candidate))
       
        return (
            <div className="callee">
                    <video className="localVideo" ref={(ref)=>this.localVideo = ref} autoPlay muted></video>
                    <video className="remoteVideo"  ref={(ref)=>this.remoteVideo = ref}  autoPlay></video>
                    <div className="btn-div">
                    {this.state.connected?
                    <p><i className="fa fa-circle green-color"></i> <span className="white-text">Connected to {this.props.match.params.caller}</span></p>
                    
                    :
                    <p><i className="fa fa-spinner fa-spin white-text"></i> <span className="white-text">Waiting for connection</span></p>

                    }

                    <button type="button" className="btn btn-call btn-danger hangup"><i className="fa fa-phone"  onClick={this.close}></i></button>
                    <button type="button" className="btn btn-call"><i className="fa fa-microphone"></i></button>
                    <button type="button" className="btn btn-call"><i className="fa fa-video-camera"></i></button>
                    </div>
                    <style>{`
                        body{
                            background:#111;
                        }
                    `}</style>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Answer);
