import React, { Component } from 'react';
import Navbar from "../navbar/tab"
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

                <Navbar user={this.props.auth.user} match={this.props.match} socket={this.props.socket}/>
                    <div className="row  ">
                        <div className="col-sm-4" style={{paddingRight:"15px"}}>
                        <div className="white left-grid">
                             <Conversation  socket={this.props.socket} auth={this.props.auth} />
                        </div>
                        </div>
                        <div className="col-sm-8 white" style={{backgroundSize:"cover",padding:"150px 10px"}}>
                                    <center>
                                        <i className="fa fa-comments fa-4x"></i>
                                        <h3>Click on a conversation to continue</h3>
                                        </center>
                                    </div>
                    </div>

                </div>
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 "}}>
                    {/* <Relatedusers auth={this.props.auth}/> */}
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