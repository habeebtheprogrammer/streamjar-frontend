import React, { Component } from 'react';
import Sidebar from "./sidebar"
import { Link } from "react-router-dom"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import auth from "../../reducer/index"
import $ from "jquery"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Navbar extends Component {

    // componentDidMount() {
    //   $(window).scroll(()=>{
    //       var nav = document.getElementsByTagName("nav");
    //       if (window.scrollY > 30) {
    //           $("nav").removeClass("transparent")
    //           $("nav").addClass("grey darken-4 slideInDown ")
    //         //   nav[0].removeAttribute("class", "transparent")
    //         //   nav[0].setAttribute("class", " grey darken-4 slideInDown ")
    //           $(".setnav").addClass("navbar-fixed")
    //       }else {
    //           $("nav").removeClass("grey  darken-4 slideInDown")
              
    //         //   nav[0].removeAttribute("class", "grey  darken-4 slideInDown")
              
    //           window.location.pathname === "/" ? $("nav").addClass("transparent") : $("nav").addClass("grey darken-4")
             
    //       }
    //   }
       
    //   )

    // }
    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        var url = window.location.pathname;
        window.location.assign("/")
    }
    render() {
        return (
            <nav className={classnames("navbar  navbar-inverse ", window.location.pathname === "/login" || window.location.pathname === "/"|| window.location.pathname === "/signup" ?"container x-navinverse":null)} role="navigation" >
                <div className="navbar-header" style={{ marginRight: "0px" }}>
                
                    <a className="navbar-brand" href="/">
                        <div className="brand-logo hidden-xs">
                            <img src="../../../../images/admin-logo.png" alt="" />
                        </div>
                        <div className="brand-name" >
                            <b>
                                <span>Campus</span>
                            </b>Connect</div>
                    </a>
                </div>
                {this.props.auth.isAuthenticated?null:
                <div className="collapse navbar-collapse navbar-ex1-collapse" style={{ border: "none" }}>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/login" className="navbar-link" style={{ color: "#fff" }}>

                                <i className="fa fa-user"></i>
                                <span> Login</span>
                        </a>
                        </li>
                        <li>
                            <a href="/signup" className="navbar-link" style={{ color: "#fff" }}>

                                <i className="fa fa-users"></i>
                                <span> Signup</span>
                        </a>
                        </li>
                    </ul>
                </div>
                }
                <style>
                    {`
                      
                        .x-navinverse{
                            background:transparent;border:none; padding:10px
                        }
                    
        `}
                </style>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(Navbar);