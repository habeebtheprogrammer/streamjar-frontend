import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./component/dashboard/index"
import Login from "./component/login/index"
import Signup from "./component/signup/index"
import Search from "./component/search/index"
import Video from "./component/video/index"
import Chat from "./component/chat/index"
import Chatpage from "./component/chat/main"
import Profile from "./component/profile/index"
import Privateroute from "./container/privateroute"
import Join from "./join"
import Edit from './component/dashboard/edit';
import Call from "./component/call/index"
import Answer from "./component/call/answer"

class Main extends Component {

    render() {
        
        return (
            <div className="">
                {/* <Join /> */}
                <Switch>
                    
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Privateroute  path="/profile/:id" socket={this.props.socket} component={Profile} />

                    <Privateroute exact path="/dashboard" socket={this.props.socket} component={Dashboard} />
                    <Privateroute exact path="/dashboard/edit" socket={this.props.socket} component={Edit} />
                    <Privateroute exact path="/search" socket={this.props.socket} component={Search} />
                    <Privateroute exact path="/video" socket={this.props.socket} component={Video} />
                    <Privateroute exact path="/chat" socket={this.props.socket} component={Chat} />
                    <Privateroute exact path="/chat/:id" socket={this.props.socket} component={Chatpage} />
                    <Privateroute exact path="/call/:remoteuser" socket={this.props.socket} component={Call} />
                    <Privateroute exact path="/answer/:caller" socket={this.props.socket} component={Answer} />
                    
                    <Route exact path="/signup" socket={this.props.socket} component={Signup} />
                    {/* <Route exact path="*" component={Notfound} /> */}
                </Switch>
            </div>
        );
    }
}

export default Main;