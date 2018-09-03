import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./component/dashboard/index"
import Login from "./component/login"
import Signup from "./component/signup"
import Search from "./component/search"
import Video from "./component/video"
import Chat from "./component/chat"
import Chatpage from "./component/chat/main"
import Profile from "./component/profile"
import Privateroute from "./container/privateroute"
import Edit from './component/dashboard/edit';
import Call from "./component/call"
import Answer from "./component/call/answer"
import Newsfeed from "./component/home"
import Forum from "./component/forum"
import Group from './component/community';
import Room from './component/community/room';
import Shoutout from './component/shoutout';
class Main extends Component {

    render() {
        
        return (
            <div className="">
                <Switch>
                    
                    <Route exact path="/login" component={Login} />
                    <Privateroute exact path="/" socket={this.props.socket} component={Newsfeed} />
                    <Privateroute  path="/forum" socket={this.props.socket} component={Forum} />
                    <Privateroute exact path="/community" socket={this.props.socket} component={Group} />
                    <Privateroute  path="/community/:id" socket={this.props.socket} component={Room} />
                    {/* <Privateroute exact path="/shoutout" socket={this.props.socket} component={Shoutout} /> */}

                    <Privateroute  path="/profile/:id" socket={this.props.socket} component={Profile} />

                    {/* <Privateroute exact path="/dashboard" socket={this.props.socket} component={Dashboard} /> */}
                    {/* <Privateroute exact path="/dashboard/edit" socket={this.props.socket} component={Edit} /> */}
                    <Privateroute exact path="/search" socket={this.props.socket} component={Search} />
                    {/* <Privateroute exact path="/video" socket={this.props.socket} component={Video} /> */}
                    <Privateroute exact path="/chat" socket={this.props.socket} component={Chat} />
                    <Privateroute exact path="/chat/:id" socket={this.props.socket} component={Chatpage} />
                    <Privateroute exact path="/call/:remoteuser" socket={this.props.socket} component={Call} />
                    <Privateroute exact path="/answer/:caller" socket={this.props.socket} component={Answer} />
                    
                    <Route exact path="/signup" socket={this.props.socket} component={Signup} />
                    <Privateroute exact path="*" socket={this.props.socket} component={Newsfeed} />
                </Switch>
            </div>
        );
    }
}

export default Main;