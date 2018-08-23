import React, { Component } from 'react';
import {Link} from "react-router-dom"
import setAuthorizationToken from "../auth"
import classnames from "classnames"
class Sidebar extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
       
    }
    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        var url = window.location.pathname;
        window.location.assign("/")
    }

    logout(e){
        e.preventDefault();
        localStorage.removeItem("kaytoken");
        window.location.assign("/login")
    }
    render() {
        var username = localStorage.getItem("username")
        return (
            <div className="col-sm-1 navbar-inverse hidden-xs zero x-left-grid">
                <div className="x-sidebar">
                    <div className="sidebar-list">
                            <Link to="/" className={classnames(window.location.pathname ===  "/"? "active" : null)}>
                        <center>
                          
                            <i className="fa fa-home">
                            </i>
                        </center>

                            </Link>
                    </div>
                    <div className="sidebar-list">
                    <Link to="/community"  className={classnames(this.props.match.path ===  "/community/:id" || this.props.match.path ===  "/community" ? "active" : null)}>
                    
                            <center>
                                <i className="fa fa-group"></i>
                            </center>
                            </Link>
                    </div>
                    <div className="sidebar-list">
                    <Link to="/shoutout" className={classnames(window.location.pathname ===  "/shoutout"? "active" : null)}>
                    
                            <center>
                                <i className="fa fa-bullhorn"></i>
                            </center>
                            </Link>
                    </div>
                    <div className="sidebar-list">
                        <Link to={`/profile/${username}`} className={classnames(this.props.match.path ===  "/profile/:id"? "active" : null)}>
                            <center>
                                <img src="../../../images/john.jpg" width="50%" className="img-responsive img-rounded" alt="Image" />
                            </center>
                        </Link>
                    </div>
                    <div className="sidebar-list">
                        <Link to="/search" className={classnames(window.location.pathname === "/search" ? "active" : null)}>
                            <center>
                                <i className="fa fa-search"></i>
                            </center>
                        </Link>
                    </div>
                    <div className="sidebar-list">
                        <Link to="/chat" className={classnames(window.location.pathname === "/chat" ? "active" : null)}>
                            <center>
                                <i className="fa fa-comments"></i>
                            </center>
                        </Link>
                    </div>
                   
                    <div className="sidebar-list">
                        <Link to="/video" className={classnames(window.location.pathname ==="/video"?"active":null)}>
                            <center>
                                <i className="fa fa-camera"></i>
                            </center>
                        </Link>
                    </div>
                    <div className="sidebar-list">
                        <Link to="/video" className={classnames(window.location.pathname ==="/video"?"active":null)}>
                            <center>
                                <i className="fa fa-video-camera"></i>
                            </center>
                        </Link>
                    </div>
                  
                    <div className="sidebar-list">
                        <a href="" className="">
                            <center>
                                <i className="fa fa-envelope"></i>
                            </center>
                        </a>
                    </div>
                  
                    <div className="sidebar-list">
                    <Link to="/dashboard/edit" className={classnames(window.location.pathname === "/edit" ? "active" : null)}>

                            <center>
                                <i className="fa fa-cog"></i>
                            </center>
                    </Link>

                    </div>
                    <div className="sidebar-list">
                        <a href="" className="" onClick={this.logout}>
                            <center>
                                <i className="fa fa-power-off"></i>
                            </center>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;