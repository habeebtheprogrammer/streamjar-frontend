import React, { Component } from 'react';
import Footer from "../footer/index"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Sidebar from "../navbar/sidebar"
// import Conversation from "../extras/conversation"
import classnames from "classnames"
import socketIOClient from "socket.io-client"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Navtab from "../navbar/tab"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

class Chatpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mesg: { messages: [] },
            user: {},
            text: "",
            online:false,
            empty: false,
            isLoading: true,
        }
        this.submit = this.submit.bind(this)
        this.typing = this.typing.bind(this)
    }
    componentWillMount() {
        var socket = this.props.socket;
        socket.on("onlineusers", (onlineusers) => {
            var exist = onlineusers.filter((user)=>user.username === this.props.match.params.id)
            this.setState({ online:exist.length?true:false })
        })

        var token = localStorage.getItem("jwToken")
        $.getJSON(`${apiUrl}/api/getuserbyid?id=${this.props.match.params.id}`, (res) => {
            if (res.user)
                this.setState({ user: res.user, isLoading: false }); else this.setState({ empty: true });
            if (moment(this.props.auth.user.regDate).isAfter(res.user.date)) {
                axios.post(`${apiUrl}/api/grabmessages`, { party: res.user._id + this.props.auth.user.id }).then((res2) => {
                    if (res2.data.success === true) this.setState({ mesg: res2.data.mesg }, ()=>this.scroll());
                })
            } else {
                axios.post(`${apiUrl}/api/grabmessages`, { party: this.props.auth.user.id + res.user._id }).then((res2) => {
                    if (res2.data.success === true) this.setState({ mesg: res2.data.mesg },()=>this.scroll);
                })
            }

        });

    }
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        var senderID = this.props.auth.user.id; var receiverID = this.state.user._id;
        var suname = this.props.auth.user.username; var runame = this.state.user.username;
        var date = new Date()
        e.preventDefault()
        var socket = this.props.socket;
        var party;
        if (moment(this.props.auth.user.regDate).isAfter(this.state.user.date)) {
            party = receiverID + senderID
        } else party =senderID + receiverID
        socket.emit("sendmesg", party, senderID,suname, receiverID, runame, this.state.text)
        var obj = { from: senderID, to: receiverID, text: this.state.text, date: date }
        var state = this.state.mesg
        state.messages.push(obj)
        this.setState({ mesg: state }, () => this.scroll())
        socket.emit("fetchconversation", this.props.auth.user.username)
    }
    scroll(){
        var box = $("#chatRow");
        var scrollHeight = box.prop("scrollHeight");
        var clientHeight = box.prop("clientHeight")
        var scrollTop = box.prop("scrollTop");
        var msgHeight = $("#msg").outerHeight()
        if(scrollHeight >clientHeight){
            box.scrollTop(scrollHeight-msgHeight)
        }
    }
    matchmesg() {
        return this.state.mesg.messages.map((mesg, key) =>
            (
                mesg.from === this.props.auth.user.id ?
                    <div className="col-sm-12 msg" id="msg">
                        <div className="row " style={{ marginBottom: "10px" }}>
                            {/* <div className="col-xs-1 dp pull-right">
                                <img src={this.props.auth.user.dp || "../../../../images/john.jpg"} width="140px" className="img-responsive img-rounded" alt="Image" />
                            </div> */}
                            <div className="col-xs-12 zero">
                                <div className="chat-box pull-right">
                                    {mesg.text}
                                    {/* <br />
                                    <small style={{ fontSize: "0.8em" }}>{moment(mesg.date).fromNow()}</small> */}
                                </div>
                                
                                <div className="clearfix">
                                
                                </div>
                                
                            {/* <div  className="pull-right grey-color"> 
                                <small style={{ fontSize: "0.8em" }}>{moment(mesg.date).format("lll")}</small> 
                                </div> */}

                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-sm-12 msg" id="msg">
                        <div className="row " style={{ marginBottom: "10px" }}>
                            {/* <div className="col-xs-1 dp">
                                <img src="../../../images/genu.jpg" width="140px" className="img-responsive img-rounded" alt="Image" />
                            </div> */}

                            <div className="col-xs-12 zero">
                                <div className="chat-box">
                                    {mesg.text}
                                </div>
                                <div className="clearfix">
                                
                                </div>
                                {/* <div  className="pull-left grey-color"> 
                                <small style={{ fontSize: "0.8em" }}>{moment(mesg.date).format("lll")}</small> 
                                </div> */}
                            </div>
                        </div>

                    </div>
            ))
     
    }
    render() {
        var socket = socketIOClient(apiUrl);
        var party;
        if (moment(this.props.auth.user.regDate).isAfter(this.state.user.date)) {
            party = this.state.user._id + this.props.auth.user.id
        } else party = this.props.auth.user.id + this.state.user._id
        socket.on(party, (mesg) => {
            // var allmsg = this.state.mesg.messages;

            this.setState({ mesg }, () => this.scroll())
        })
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        return (
            <div className="row cpage">
                 <Navtab auth={this.props.auth} socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"45px"}}>
                
            <Sidebar match={this.props.match}/>
            <div className="col-sm-9 x-right-grid">
           
                <div className="row  " >
                        <div className="col-sm-3 zero" >
                        {/* <img src="../../../images/genu.jpg" width="140px" className="img-responsive img-roundeda" alt="Image" /> */}

                        <div className=" left-grid" style={{background:"#fff"}}>
                                         <Conversation  socket={this.props.socket} auth={this.props.auth} />
                                        </div>
                                    </div>
                        <div className="col-sm-9  zero" style={{borderLeft:"1px solid #e8e8e8"}} >
                       
                        <div className="row">
                        <div style={{position:"fixed",width:"59%",zIndex:"1",height:"100%",background:"#fff"}}>
                        <div  className="row">
                            <div className="row white"style={{borderBottom:"1px solid #e8e8e8",padding:"10px 0px"}} >
                            <div className="col-xs-1">
                                    <img src="../../../images/genu.jpg" width="50px" className="img-responsive img-rounded" alt="Image" />
                                </div>
                            <div className="col-xs-8">
                            <span style={{fontSize:"1.2em",fontWeight:"bold",textTransform:"uppercase",fontFamily:"avenirBold"}}><Link to={`/profile/${this.state.user.username}`} >{this.props.match.params.id} </Link></span>
                            <div style={{fontSize:"0.9em"}}><span className={classnames(this.state.online?"online":"offline")}>
                            <i className="fa fa-circle"></i>
                            </span> <span style={{fontWeight:"bold",fontFamily:"avenirBold",color:"grey"}}> {this.state.user.status}</span>
                            </div>
                            
                            </div>
                            
                            <div className="col-xs-3">
                            <button type="button"className="btn btn-round pull-right" style={{fontSize:"1.1em",padding:"8px 12px"}}><i className="fa fa-user-plus"></i></button>
                            <button type="button" onClick={()=>window.location.assign(`/call/${this.state.user.username}`)} className="btn btn-round pull-right" style={{fontSize:"1.1em",padding:"8px 12px",margin:"0px 5px"}}><i className="fa fa-video-camera"></i></button>
                            </div>
                            
    
                            </div>
                        </div>
                        <div id="chatRow"  style={{position:"absolute",height:"74%",overflow:"auto",width:"-webkit-fill-available"}}>        
                            {this.matchmesg()}
                        </div>
                                            <div style={{position:"fixed",bottom:"0",width:"72%"}}>
                       {/* <input type="text" name="description" onChange={(e)=>this.typing} placeholder="say something..." className="form-control description" style={{borderRadius:"30px",marginLeft:"-15px"}} /> */}
                       <form onSubmit={this.submit} style={{position:"fixed",bottom:"10px",width:"59%"}}> 
                       <input type="text" className="search-field chat-input bggrey" onChange={this.typing} placeholder="Type your message" name="text" style={{marginLeft:"0px",height:"70px"}}  />
                       </form>
                                                    </div>
                                                        {/* <form onSubmit={this.submit} style={{position:"fixed",bottom:"10px",width:"inherit"}}>
                                                            <input type="text" className="search-field chat-input" onChange={this.typing} placeholder="Type your message" name="text" id="" style={{ width: "100%" }} />
                                                        </form> */}
                            </div>
                            
                            <div className="clearfix">
                            
                            </div>
                            
                            </div>
                            </div>
                        </div>
                    </div>

                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{borderLeft:"1px solid #e8e8e8"}}>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
                <style>{`
                body{
                    // background:#fff;
                }
                .chat-row{
                    padding:10px 0px 0px;height:350px;position:relative;overflow:auto
                }
                .chat-input{
                    border:0px;box-shadow:none; 
                    border-top:1px solid #eee;
                }

                `}
                </style>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Chatpage);