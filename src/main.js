import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./component/home"
import Activities from "./component/cities/activities"
import Activity from "./component/cities/activity"
import Attraction from "./component/attraction"
import Privateroute from "./container/privateroute"
import Download from "./component/extra/download"
import Dashboard from "./component/dashboard"
import Book from "./component/book"
import Cart from "./component/cart"
import "materialize-css"
import "./component/extra/custom"
import Footer from './component/footer';
import Navbar from './component/navbar';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
  
    render() {
        return (
            <div id="wrapper" className="mm-page mm-slideout">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/download" component={Download} />
                    <Route exact path="/book/:id" component={Book} />
                    <Route exact path="/cart" component={Cart} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path="/city/:city" component={Activities} />
                    <Route exact path="/city/:city/:id" component={Activity} />
                    <Route exact path="/city/:city/:id/:id" component={Attraction} />
                    <Route exact path="*" socket={this.props.socket} component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;