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


class Callpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pc1: "",
            pc2: "",
            sdp1: "",
            sdp2: ""
        }
        this.sendRemoteDesc = this.sendRemoteDesc.bind(this)
        this.success = this.success.bind(this)
    }

    componentDidMount() {
        var {socket} = this.props.socket;
        socket.on(`message`,(message)=>this.onmessage(message))
        socket.on(`setRemoteDesc${this.props.auth.user.username}`,(desc)=>this.props.match.params.caller?this.setRemoteDesc(desc):null)
        window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;

        var sturnserver = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]}
        this.pc = new RTCPeerConnection(this.sturnserver);
        this.pc.onicecandidate = (e)=>{
            console.log("pc is trying to reach remote user ")
        }


        this.localuser();
        this.pc.onaddstream = (stream)=>{
            this.remoteStream = stream;
            this.remoteVideo.src = URL.createObjectURL(stream);
        console.log("remote user stream added successful")

        }
        
    }
    localuser(){
        navigator.mediaDevices.getUserMedia({audio:true,video:true}).then((stream)=>
        {
            this.localStream = stream;
            this.localVideo.src = URL.createObjectURL(stream);
            console.log("getUserMedia was successful")
           
            if(this.props.match.params.remoteuser) this.success(stream)
        }
     ).catch((err)=>console.log(err))
    }
   
    onmessage(){
        
    }
    success(stream){
        this.pc.createOffer({offerToReceiveAudio:true,offerToReceiveVideo:true}).then((desc)=>{
            this.localDesc = desc
            this.pc.setLocalDescription(this.localDesc).then((desc)=> console.log("local description set"));
            this.sendRemoteDesc(this.localDesc) 
                    
        })
    }

    setRemoteDesc(desc){
        console.log("remote desc came in",desc)
        if(desc.type ==="offer")
        {
            this.pc.setRemoteDescription(desc).then((desc)=>console.log("remote description set"));
            this.pc.createAnswer().then((newdesc)=>{
                this.pc.setLocalDescription(newdesc).then((succ)=>console.log("local desc set"));
            })
        }
        else if (desc.type === "answer"){
            this.pc.setRemoteDescription(desc).then((succ)=>console.log("remote desc set"))
        }
    }
 
    sendRemoteDesc(desc){ 
        var {socket} = this.props.socket
        socket.emit("setRemoteDesc",{username:this.props.match.params.remoteuser,desc:desc})
    }


    // remoteuser(remotedesc){
    //     console.log("remotedesc came in",remotedesc)
    //     var sturnserver = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]}
    //     this.pc = new RTCPeerConnection(this.sturnserver);
    //     this.pc.onicecandidate = (e)=>{
    //         console.log("remote pc is trying to reach me")
    //     }
    //     this.pc.createAnswer().then((desc)=>{
    //         this.localDesc = desc;
    //         this.pc.setLocalDescription(desc).then((desc)=>console.log("local description set"));
    //         this.pc.setRemoteDescription(remotedesc).then((desc)=>console.log("remote description set"));
    //         this.sendRemoteDesc(desc);
    //     })
    // }

    render() {
       console.log(this.props)
        return (
            <div className="caller">
                    <video className="localVideo" ref={(ref)=>this.localVideo = ref} autoPlay></video>
                    <video id="remoteVideo" autoplay></video>
                    <div className="btn-div">
                    
                    <p><i className="fa fa-spinner fa-spin"></i> Dialling {this.props.match.params.remoteuser}</p>
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
