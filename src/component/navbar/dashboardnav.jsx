import React, { Component } from 'react';
import { Link } from "react-router-dom"
import classnames from "classnames"
export default class Dashboardnav extends Component {
    render() {
        return (
<div>
<a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
	
<div className="dashboard-nav">
    <div className="dashboard-nav-inner">
        <ul>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/account"? "active":null)}><Link to={`${this.props.match.url}/account`}><i className="sl sl-icon-user"></i> My Profile</Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/bookings"? "active":null)}> <Link to={`${this.props.match.url}/bookings`}><i className="fa fa-calendar-check-o"></i> Bookings</Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/wishlist"? "active":null)}><Link to={`${this.props.match.url}/wishlist`}><i className="sl sl-icon-heart"></i> Wishlist</Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/rewards"? "active":null)}><Link to={`${this.props.match.url}/rewards`}><i className="sl sl-icon-trophy"></i> Earn Rewards <span className="nav-tag messages">2</span></Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/messages"? "active":null)}><Link to={`${this.props.match.url}/messages`}><i className="sl sl-icon-envelope-open"></i> Messages <span className="nav-tag messages">2</span></Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/reviews"? "active":null)}><Link to={`${this.props.match.url}/reviews`}><i className="sl sl-icon-note"></i> Reviews</Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/manage_users"? "active":null)}><Link to={`${this.props.match.url}/manage_users`}><i className="sl sl-icon-user"></i> Create/manage users</Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/manage_attractions"? "active":null)}><Link to={`${this.props.match.url}/manage_attractions`}><i className="sl sl-icon-list"></i> Manage attractions</Link></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/add_listing"? "active":null)}><a href={`${this.props.match.url}/add_listing`}><i className="sl sl-icon-plus"></i> Add listing</a></li>
            <li className={classnames(this.props.location.pathname === this.props.match.url+"/settings"? "active":null)}><a href={`${this.props.match.url}/settings`}><i className="sl sl-icon-settings"></i> Settings</a></li>
        </ul>
        <ul>
            <li><Link to="/"><i className="sl sl-icon-power"></i> Logout</Link></li>
        </ul>	
</div>
</div>
</div>
        )}
}