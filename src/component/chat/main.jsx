import React, { Component } from 'react';
import Navbar from "../navbar/tab"
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
import socketIOClient from "socket.io-client"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Bgchat from "../extras/bgchat"
function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile.bioData,
        media: state.profile.media
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
            empty: false,
            isLoading: true,

        }
        this.submit = this.submit.bind(this)
        this.typing = this.typing.bind(this)
    }
    componentWillMount() {
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
        var {socket} = this.props.socket;
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
                            <div className="col-xs-1 dp pull-right">
                                <img src={this.props.auth.user.dp || "../../../../images/avatar.jpg"} width="140px" className="img-responsive img-rounded" alt="Image" />
                            </div>
                            <div className="col-xs-11 zero">
                                <div className="chat-box pull-right">
                                    {mesg.text}<br />
                                    <small style={{ fontSize: "0.8em" }}>{moment(mesg.date).fromNow()}</small>
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div className="col-sm-12 msg" id="msg">
                        <div className="row " style={{ marginBottom: "10px" }}>
                            <div className="col-xs-1 dp">
                                <img src="../../../images/avatar.jpg" width="140px" className="img-responsive img-rounded" alt="Image" />
                            </div>

                            <div className="col-xs-11 zero">
                                <div className="chat-box">
                                    {mesg.text}<br />
                                    <small style={{ fontSize: "0.8em" }}>{moment(mesg.date).fromNow()}</small>
                                </div>

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
            <div className="row ">
                {/* <Navbar /> */}
                <Sidebar match={this.props.match}/>
                
                <div className="col-sm-9 x-right-grid conversation">

                <Navbar user={this.state.user}  match={this.props.match}  socket={this.props.socket}/>
                <div className="row  ">
                        <div className="col-sm-4" style={{paddingRight:"15px"}}>
                        <div className="white left-grid">
                                         <Conversation  socket={this.props.socket} auth={this.props.auth} />
                                        </div>
                                    </div>
                        <div className="col-sm-8 zero" style={{paddingRight:"15px"}}>
                        <div className="white">
                                                    {this.matchmesg()}
                                                        <form onSubmit={this.submit}>
                                                            <input type="text" className="search-field chat-input" onChange={this.typing} placeholder="Type your message" name="text" id="" style={{ width: "100%" }} />
                                                        </form>
                            </div>
                            </div>
                        </div>
                    </div>

                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white">
                    {/* <Relatedusers auth={this.props.auth}/> */}
                    <Conversation auth={this.props.auth}  socket={this.props.socket}/>
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
                         input,
.conversation input[type="text"],
.input[type="password"],
input[type="email"],
input[type="number"],
textarea{
    min-height:50px;
	padding:  20px;
	outline: none;
	font-size: 15px;
	color: #808080;
	max-width: 100%;
	width: 100%;
	box-sizing: border-box;
	display: block;
	background-color: #fff;
	border: none;
	box-shadow: none;
	font-weight: 500;
	opacity: 1;
	border-radius: 3px;
}


input {
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	-ms-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;
}

input:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
textarea:focus {
	color: #808080;
	transition: box-shadow 0.2s !important;
	box-shadow: none !important;
	border: 0px !important;
	opacity: 1;
}

input[type="submit"] {
  border: none;
  padding: 11px 18px;
  width: auto;
}

input[type="checkbox"] { display: inline; }

input[type="radio"] {
	width: 15px;
	height: 15px;
	cursor: pointer;
	box-shadow: none;
}

/* Input Placeholder Color */
::-webkit-input-placeholder { /* WebKit browsers */
	color: #888;
	opacity: 1;
}

:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	color: #888;
	opacity: 1;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
	color: #888;
	opacity: 1;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
	color: #888;
	opacity: 1;
}

                `}
                </style>

                {/* <div className="col-xs-12" style={{background:"#fff"}}>
                            <div style="text-align:center;padding: 15px 0px;font-weight:400">
                                2017 © Peer to Peer RTC Designed by Habeeb <br />
                                <button className="btn btn-danger btn-sm btn-round" style="border-radius:100%;box-shadow:0 1px 10px 0 darkgrey;border:none">
                                    <i className="fa fa-facebook"></i>
                                </button>
                                <button className="btn btn-danger btn-sm btn-round" style="border-radius:100%;box-shadow:0 1px 10px 0 darkgrey;border:none">
                                    <i className="fa fa-instagram"></i>
                                </button>
                                <button className="btn btn-danger btn-sm btn-round" style="border-radius:100%; box-shadow:0 1px 10px 0 darkgrey;border:none">
                                    <i className="fa fa-whatsapp"></i>
                                </button>
                            </div>
                        </div> */}
                        <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Chatpage);