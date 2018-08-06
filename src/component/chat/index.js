import React, { Component } from 'react';
import Navbar from "../navbar/index"
import { connect } from "react-redux"
import Sidebar from "../navbar/sidebar"
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
                {/* <Navbar /> */}
                <Sidebar match={this.props.match}/>
                
                <div className="col-sm-9 x-right-grid">

                <Bgchat user={this.props.auth.user} socket={this.props.socket}/>
                    {/* <div className="second-nav" >
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

                    </div> */}


                    <div className="row zero ">
                        <div className="col-sm-12 zero">
                            <div className="page-start  ">

                                <div className="row zero page-row">
                                    {/* <div className=" col-sm-3 zero left-grid  ">
                                     <Conversation  socket={this.props.socket} auth={this.props.auth} />
                                    </div> */}

                                    <div className="col-sm-12 zero " style={{backgroundSize:"cover",padding:"150px 10px"}}>
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
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 "}}>
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth}  socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
                <style>{`
                body{
                    background:#fff;
                }
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