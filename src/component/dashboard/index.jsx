import React, { Component } from 'react';
import { Link,Switch, Route} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
import Loading from "../loader"
import $ from "jquery"
import jwt from "jsonwebtoken"
import Navbar from '../navbar';
import Dashboardnav from '../navbar/dashboardnav'
import Account from "./account"
import Booking from "./booking"
import Wishlist from "./wishlist"
import Reviews from "./reviews"
import Messages from "./messages"
import Settings from "./settings"
import Rewards from "./rewards"
import Addlisting from "./addlisting"
import Editlisting from "./editlisting"
import Manageusers from "./manageusers"
import Manageattractions from "./manageattractions"
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
            <div id="dashboards" className="xleft" style={{paddingTop:"0px"}}>
            <Dashboardnav {...this.props}/>
            <Switch>
                    <Route exact path="/" component={Account} />
                    <Route exact path={`/dashboard/bookings`} component={Booking} />
                    <Route exact path="/dashboard/messages" component={Messages} />
                    <Route exact path="/dashboard/wishlist" component={Wishlist} />
                    <Route exact path="/dashboard/rewards" component={Rewards} />
                    <Route exact path="/dashboard/reviews" component={Reviews} />
                    <Route exact path="/dashboard/settings" component={Settings} />
                    <Route exact path="/dashboard/add_listing" component={Addlisting} />
                    <Route exact path="/dashboard/edit_listing/:id" component={Editlisting} />
                    <Route exact path="/dashboard/manage_users" component={Manageusers} />
                    <Route exact path="/dashboard/manage_attractions" component={Manageattractions} />
                    <Route exact path="*" component={Account} />
            </Switch>
            </div>
         </div>
        );
    }
}
