import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import socketIO from "socket.io-client"
import classnames from "classnames"
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


class Callpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           connected:false
        }

        this.sendRemoteDesc = this.sendRemoteDesc.bind(this)
        this.success = this.success.bind(this)
    }

    componentDidMount() {
        var {socket} = this.props.socket;
        socket.on(`setCallerRemoteDesc${this.props.auth.user.username}`,(desc)=>this.setRemoteDesc(desc))
        window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
        var sturnserver = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]} // turns servers
        // check twilio webrtc turns server!
        this.pc = new RTCPeerConnection(this.sturnserver);
        this.pc.onicecandidate = (e)=>{
            console.log("pc is trying to reach remote user (pc2)",e.candidate)
            if(e.candidate) socket.emit(`addIceCandidate`,{username:this.props.match.params.remoteuser,candidate:e.candidate})
        }

        this.localuser();

        this.pc.onaddstream=(e)=>{
            console.log("peer has added a stream",e.stream)
            this.remoteStream = e.stream;
        this.remoteVideo.src = URL.createObjectURL(e.stream);
        this.setState({connected:true})
        }
    
    }
    localuser(){
        navigator.mediaDevices.getUserMedia({audio:true,video:true}).then((stream)=>
        this.success(stream)
     ).catch((err)=>console.log(err))
    }
   

    success(stream){
        this.localStream = stream;
        this.localVideo.src = URL.createObjectURL(stream);
        console.log("getUserMedia was successful",stream)
     
        this.pc.addStream(this.localStream);
        this.pc.createOffer({offerToReceiveAudio:true,offerToReceiveVideo:true}).then((desc)=>{
            this.localDesc = desc
            this.pc.setLocalDescription(this.localDesc).then((desc)=> console.log("local description set"));
            this.sendRemoteDesc(this.localDesc)            
        })

    }

    setRemoteDesc(desc){
        this.pc.setRemoteDescription(new RTCSessionDescription(desc)).then((desc)=>console.log("remote description set"));
    }
 
    sendRemoteDesc(desc){
        var {socket} = this.props.socket
        socket.emit("setRemoteDesc",{username:this.props.match.params.remoteuser,desc:desc})
    }

    render() {
      
        return (
            <div className="caller">
                    <video className="localVideo" ref={(ref)=>this.localVideo = ref} autoPlay muted></video>
                    <video className="remoteVideo" ref={(ref)=>this.remoteVideo = ref} autoPlay></video>
                    <div className="btn-div">
                    {this.state.connected?
                    <p><i className="fa fa-circle green-color"></i> <span className="white-text">Connected to {this.props.match.params.remoteuser}</span></p>
                    
                    :
                    <p><i className="fa fa-spinner fa-spin white-text"></i> <span className="white-text">Establishing connection to {this.props.match.params.remoteuser}</span></p>

                    }

                    <button type="button" className="btn btn-call btn-danger"><i className="fa fa-phone"></i></button>
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

export default connect(mapStateToProps)(Callpage);
