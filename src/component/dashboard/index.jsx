import React, { Component } from 'react';
import { Link,Switch, Route} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
import Loading from "../loader"
import $ from "jquery"
import jwt from "jsonwebtoken"
import Navbar from '../navbar';
import Dashboardnav from '../navbar/dashboardnav'
import Footer from '../footer';
import Account from "./account"
import Booking from "./booking"
import Wishlist from "./wishlist"
import Reviews from "./reviews"
import Messages from "./messages"
import Settings from "./settings"
import Rewards from "./rewards"
export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            error: "",
            success: "",
        }
    }
  
    render() {
        return (
            <div>
            <Navbar match={this.props.match}/>
            <div id="dashboards" style={{paddingTop:"0px"}}>
            <Dashboardnav {...this.props}/>
            <Switch>
                    <Route exact path="/" component={Account} />
                    <Route exact path={`/dashboard/bookings`} component={Booking} />
                    <Route exact path="/dashboard/messages" component={Messages} />
                    <Route exact path="/dashboard/wishlist" component={Wishlist} />
                    <Route exact path="/dashboard/rewards" component={Rewards} />
                    <Route exact path="/dashboard/reviews" component={Reviews} />
                    <Route exact path="/dashboard/settings" component={Settings} />
                    <Route exact path="*" component={Account} />
            </Switch>
            </div>
            {/* <Footer /> */}
         </div>
        );
    }
}
