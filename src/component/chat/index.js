import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Audio from 'react-audioplayer';
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Sidebar from "../navbar/sidebar"
import Conversation from "../extras/conversation"
import classnames from "classnames"
import socketIOClient from "socket.io-client"
function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile.bioData,
        media: state.profile.media
    }
}


class Chat extends Component {
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
       
    }
  
    render() {
   
        return (
            <div className="row">
                <Navbar />
                <Sidebar />
                <div className="col-sm-11 x-right-grid">


                    <div className="second-nav" >
                        <ul className="nav navbar-nav hidden-xs">
                            <li className="list text"> CHAT PAGE</li>

                        </ul>
                        <ul className="nav navbar-nav  right-nav ">
                            <li className="list text" style={{ color: "#aaa" }}> Dashboard</li>
                            <li className="list text slash" style={{ paddingLeft: "0%", paddingRight: "0px" }}> /</li>
                            <li className="list text" style={{ color: "#f44336" }}> Chat Page</li>

                            <li className="list  button hidden-xs"><button className="btn btn-primary btn-sm btn-round img-rounded">
                                <i className="fa fa-share-alt"></i>
                            </button></li>
                        </ul>
                        <div className="clearfix">

                        </div>

                    </div>


                    <div className="row zero ">
                        <div className="col-sm-12 main-page">
                            <div className="page-start  ">

                                <div className="row zero page-row">
                                    <div className=" col-sm-3 zero left-grid  ">
                                     <Conversation auth={this.props.auth} />
                                    </div>

                                    <div className="col-sm-10 zero right-grid" style={{backgroundSize:"cover",height:"550px",padding:"180px 10px"}}>
                                    <center>
                                        <i className="fa fa-comments fa-4x"></i>
                                        <h3>Click on a conversation to continue</h3>
                                        </center>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <style>{`
                .chat-row{
                    padding:10px 0px 0px;height:450px;position:relative
                }
                .chat-input{
                    border:0px;box-shadow:none; border-top:2px
                                        solid #eee;
                }
                         input,
input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"],
textarea,
select {
	height: 51px;
	line-height: 51px;
	padding: 0 20px;
	outline: none;
	font-size: 15px;
	color: #808080;
	margin: 0 0 16px 0;
	max-width: 100%;
	width: 100%;
	box-sizing: border-box;
	display: block;
	background-color: #fff;
	border: 1px solid #dbdbdb;
	box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.06);
	font-weight: 500;
	opacity: 1;
	border-radius: 3px;
}

select {
	padding: 15px 18px;
	cursor: pointer;
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
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);
	border: 1px solid #d8d8d8;
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
            </div>
        );
    }
}

export default connect(mapStateToProps)(Chat);