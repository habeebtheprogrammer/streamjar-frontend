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
class Main extends Component {

    render() {
        
        return (
            <div className="">
                {/* <Join /> */}
                <Switch>
                    
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Privateroute exact path="/dashboard" component={Dashboard} />
                    <Privateroute exact path="/dashboard/edit" component={Edit} />
                    <Privateroute exact path="/search" component={Search} />
                    <Privateroute exact path="/profile/:id" component={Profile} />
                    <Privateroute exact path="/video" component={Video} />
                    <Privateroute exact path="/chat" component={Chat} />
                    <Privateroute exact path="/chat/:id" component={Chatpage} />
                    
                    <Route exact path="/signup" component={Signup} />
                    {/* <Route exact path="*" component={Notfound} /> */}
                </Switch>
            </div>
        );
    }
}

export default Main;