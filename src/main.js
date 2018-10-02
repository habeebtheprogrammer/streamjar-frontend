import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./component/home"
import Activities from "./component/cities/activities"
import Activity from "./component/cities/activity"
import Attraction from "./component/attraction"
import Privateroute from "./container/privateroute"
import Download from "./component/extra/download"
import Dashboard from "./component/dashboard"
import {loadOne,loadMany} from "./scriptloader"
class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
   
    componentDidMount()  {
        loadOne(`${process.env.PUBLIC_URL}/scripts/jquery-2.2.0.min.js`,(success)=>{
            if(success){
                loadMany([`${process.env.PUBLIC_URL}/scripts/chosen.min.js`,`//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`,`${process.env.PUBLIC_URL}/scripts/slick.min.js`,`${process.env.PUBLIC_URL}/scripts/rangeslider.min.js`,`${process.env.PUBLIC_URL}/scripts/magnific-popup.min.js`,`${process.env.PUBLIC_URL}/scripts/waypoints.min.js`,`${process.env.PUBLIC_URL}/scripts/counterup.min.js`,`${process.env.PUBLIC_URL}/scripts/tooltips.min.js`,`${process.env.PUBLIC_URL}/scripts/custom.js`,`${process.env.PUBLIC_URL}/scripts/index.js` ],()=>console.log("done"))
            }
        })
    }
    componentDidUpdate() {
        loadOne(`${process.env.PUBLIC_URL}/scripts/jquery-2.2.0.min.js`,(load)=>{
            if(load){
        loadMany([`${process.env.PUBLIC_URL}/scripts/chosen.min.js`,`${process.env.PUBLIC_URL}/scripts/slick.min.js`,`//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`,`${process.env.PUBLIC_URL}/scripts/rangeslider.min.js`,`${process.env.PUBLIC_URL}/scripts/magnific-popup.min.js`,`${process.env.PUBLIC_URL}/scripts/waypoints.min.js`,`${process.env.PUBLIC_URL}/scripts/counterup.min.js`,`${process.env.PUBLIC_URL}/scripts/tooltips.min.js`,`${process.env.PUBLIC_URL}/scripts/index.js`,`${process.env.PUBLIC_URL}/scripts/custom.js` ],()=>console.log("done"))
            }
        })
    }
  
    render() {
        return (
            <div id="wrapper" className="mm-page mm-slideout">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/download" component={Download} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path="/cities/:id" component={Activities} />
                    <Route exact path="/cities/:id/:id" component={Activity} />
                    <Route exact path="/cities/:id/:id/:id" component={Attraction} />
                    <Route exact path="*" socket={this.props.socket} component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;