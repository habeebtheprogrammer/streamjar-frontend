import React, { Component } from 'react';
import Navbar from "../navbar/index"
import { connect } from "react-redux"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Bgchat from "../extras/bgchat"
import Footer from '../footer/index'
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
            <div className="row conversation">
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
       
<Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Chat);