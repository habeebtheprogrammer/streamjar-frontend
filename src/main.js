import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./component/login"
import Signup from "./component/signup"
import Search from "./component/search"
import Chat from "./component/chat"
import Chatpage from "./component/chat/main"
import Profile from "./component/profile"
import Privateroute from "./container/privateroute"
import Call from "./component/call"
import Answer from "./component/call/answer"
import Newsfeed from "./component/forum/home"
import Forum from "./component/forum"
import Trending from "./component/forum/trending"
import Marketplace from "./component/marketplace"
import Group from './component/community';
import Room from './component/community/room';
class Main extends Component {

    render() {
        
        return (
            <div className="">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Privateroute exact path="/" socket={this.props.socket} component={Newsfeed} />
                    <Privateroute exact path="/trending" socket={this.props.socket} component={Trending} />
                    <Privateroute  path="/forum" socket={this.props.socket} component={Forum} />
                    <Privateroute  path="/marketplace" socket={this.props.socket} component={Marketplace} />
                    <Privateroute exact path="/community" socket={this.props.socket} component={Group} />
                    <Privateroute  path="/community/:id" socket={this.props.socket} component={Room} />
                    <Privateroute  path="/profile/:id" socket={this.props.socket} component={Profile} />
                    <Privateroute exact path="/search" socket={this.props.socket} component={Search} />
                    <Privateroute exact path="/chat" socket={this.props.socket} component={Chat} />
                    <Privateroute exact path="/chat/:id" socket={this.props.socket} component={Chatpage} />
                    <Privateroute exact path="/call/:remoteuser" socket={this.props.socket} component={Call} />
                    <Privateroute exact path="/answer/:caller" socket={this.props.socket} component={Answer} />
                    <Route exact path="/signup" socket={this.props.socket} component={Signup} />
                    <Privateroute exact path="*" socket={this.props.socket} component={Forum} />
                </Switch>
            </div>
        );
    }
}

export default Main;