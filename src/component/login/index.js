import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
import Loading from "../loader"
import $ from "jquery"
import jwt from "jsonwebtoken"
import Navbar from '../navbar/index';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            steptwo: false,
            isLoading: false,
            error: "",
            success: "",
        }
        this.login = this.login.bind(this)
        this.typing = this.typing.bind(this)
        this.validation = this.validation.bind(this)
    }


    componentWillMount() {
        var token = localStorage.getItem("kaytoken");
        var username = localStorage.getItem("username")
        if(token) window.location.assign(`/profile/${username}`)
        if (window.location.search) {
            axios.get(`${apiUrl}/api/success${window.location.search}`).then((res) => {
                if (res.data.success) {

                }
            })
        }
    }
    componentDidMount() {
        $(document).ready(function () {
            $('.step-two').hide();
            var next = document.getElementById('next');
            var login = document.getElementById('login');
            // login.disabled = true
            next.disabled = true
            console.log(next)
            $('.next').on('click', function () {
                $(".step-one").addClass('bounceOutLeft').removeClass('bounceInLeft');
                $('.step-two').show();
                $('.step-two').addClass('bounceInRight').removeClass('bounceOutRight');
            });
            $('.back').on('click', function () {

                $(".step-one").addClass('bounceInLeft').removeClass('bounceOutLeft');
                $(".step-two").addClass('bounceOutRight').removeClass('bounceInRight');

            });
            $(".input1").keyup(function (e) {
                if (e.which == 13) {
                    console.log(e)
                }
            });
            $(".username").keyup((e)=>{
               if(e.key==="Enter")
               {
                $(".step-one").addClass('bounceOutLeft').removeClass('bounceInLeft');
                $('.step-two').show();
                $('.step-two').addClass('bounceInRight').removeClass('bounceOutRight');
               }
            })
            // $('.username').on("keydown", function () {
            //     if ($(this).val() != "") {
            //         next.disabled = false

            //     } else next.disabled = true;
            // });
            // $('.password').on("keydown", function () {
            //     if ($(this).val() != "") {
            //         login.disabled = false

            //     } else login.disabled = true;
            // })
        })
    }

    login(e) { console.log("yeah")
        e.preventDefault();
        this.setState({ isLoading: true, error:"" })
        axios.post(`${apiUrl}/api/login`,this.state).then((res) => {
            setTimeout(() => {
                console.log(res)
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.token) {
                    var userData = jwt.verify(res.data.token, "h1a2b3e4e5b6")
                    if (userData) {
                        var data = jwt.decode(res.data.token,"h1a2b3e4e5b6");
                        localStorage.setItem("dp", data.dp||"../../../images/govinda.jpg")
                        localStorage.setItem("fullname", data.fullName)
                        localStorage.setItem("kaytoken", res.data.token);
                        localStorage.setItem("username", data.username);
                        setAuthorizationToken(res.data.token);
                        window.location.assign(`/`)
                        // window.location.assign(`/profile/${data.username}`)
                    }
                }
                this.setState({ isLoading: false })
            }, 200);
        }).catch((err) => {
            setTimeout(() => {
                this.setState({ isLoading: false, error: "Please try again later. an error has occured" })
            }, 2000);

        })
    }
    validation() {
        if (this.state.username === "") return this.setState({ steptwo: false }); else this.setState({ steptwo: true });
    }
    typing(e) {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.validation())
    }
    render() {
        var dp = window.localStorage.getItem("dp");
        var fullName = window.localStorage.getItem("fullname");
        return (
            <div className="login avenir" style={{ background: "#eee", color: " #eee" }}>
                <div className="x-wrapper">

                <Navbar />

                    <div className="row" style={{ padding: "40px 10px 0px", margin: "0px" }}>
                        <div className=" col-sm-4 col-sm-offset-4 bounceInLeft animated" style={{ overflow: "hidden" }}>

                            <form onSubmit={this.login} style={{ padding: "0px 0px 130px" }}>
                                <div className="row" style={{ padding: "30px 0px" }}>
                                    <div className="col-xs-4" style={{ paddingTop: "25px" }}>
                                        <div style={{ height: "1px", background: "#EEE", width: "100% " }}></div>
                                    </div>
                                    <div className="col-xs-4 zero" style={{ fontSize: "1.8em" }}>
                                        <center>
                                            {/* <button type="button" className="btn btn-default" style={{ background: "transparent", borderRadius: "100%", color: "#fff " }}> */}
                                                <i className="fa fa-opencart fa-2x"></i>
                                            {/* </button> */}

                                            <br /> </center>
                                    </div>
                                    <div className="col-xs-4" style={{ paddingTop: "25px" }}>
                                        <div style={{ height: "1px", background: "#EEE", width: "100% " }}></div>
                                    </div>

                                    <div className="col-xs-12 zero" style={{ fontSize: "1.8em" }}>
                                        <center> {fullName? "Welcome Back "+fullName : "IFLICKR"}</center>

                                    </div>

                                </div>
                                <div className="step-two animated" style={{ float: "left", position: "absolute" }}>
                                    <img src={dp || "../../../../images/govinda.jpg"} className="img-responsive x-govinda" width="100px" alt="Image" />


                                    <div className="input-group" style={{ padding: "31px 0px 0px" }}>
                                        <input name="password" type="password" onChange={this.typing} required className="form-control password x-password" placeholder="Password" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-default login" id="login" style={{ marginLeft: "-4px" }}>Sign in</button>
                                        </span>
                                    </div>
                                    <div style={{ padding: "10px" }}>
                                        <button type="button" className="btn btn-default pull-right back" style={{ borderRadius: "100%", background: "transparent", color: "#eee" }}>
                                            <i className="fa fa-arrow-left  "></i>
                                        </button>

                                    </div>
                                    <div className="clearfix">

                                    </div>
                                </div>
                                <div className="step-one animated" style={{ float: "left" }}>
                                    <img src={dp || "../../../../images/govinda.jpg"} className="img-responsive x-govinda" width="100px" alt="Image" />

                                    <div className="input-group" style={{ padding: "31px 0px 0px" }}>
                                        <input name="username" onChange={this.typing} type="text" className="form-control username" id="exampleInputAmount" placeholder="Username" style={{ borderLeft: "none", borderRadius: "0px", marginLeft: "-3px" }} />
                                        <span className="input-group-btn">

                                            <button type="button" className="btn btn-default next" required disabled={this.state.steptwo ? false : true} id="next" style={{ marginLeft: "-13px", borderRadius: "100%" }}>
                                                <i className="fa fa-arrow-right  "></i>
                                            </button>
                                        </span>


                                    </div>


                                    <div className="clearfix">

                                    </div>
                                </div>

                            </form>

                            <div>

                                <center>
                                    <p>{this.state.error?this.state.error:null}</p>
                                    Not a member?  <Link to="/signup"> Sign up</Link>
                                    <br />


                                    <h4> Keep in touch with family and friends</h4>
                                    <p>©2018 All Rights Reserved. IFlick is a social platform providing instant help and instant messaging</p>
                                </center>
                            </div>
                        </div>

                    </div>
                    <div className="container" >
                    <div style={{position:"fixed",bottom:"30px",width:"inherit"}}>
                        <span>
                            Follow us on  <button type="button" className="btn btn-default x-sbutton" >
                                <i className="fa fa-facebook"></i>
                            </button>    <button type="button" className="btn btn-default x-sbutton" >
                                <i className="fa fa-twitter"></i>
                            </button>    <button type="button" className="btn btn-default x-sbutton" >
                                <i className="fa fa-instagram"></i>
                            </button>

                        </span>
                        <span className="pull-right"> Developed by <span style={{ color: "#D3450C" }}>DEVCON</span>
                        
                        </span>
                      
                        </div>
                    </div>

                </div>
                <style>
                    {`
                        .x-wrapper{
                            background:linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(165, 14, 4, 0.1) 90%),url('./images/china.jpg');min-height:700px;background-size:cover;
                            background-attachment:fixed;
                            position:absolute;
                            width:inherit;
                            height:100%;
                        }
                        .x-password{
                            border-left:none; border-radius:0px;margin-left:-3px;
                        }
                        .x-navinverse{
                            background:transparent;border:none; padding:10px
                        }
                        .x-govinda{
                            border-radius:100%;padding:3px; border:3px solid #aaa;float:left;height:100px;
                        }
                        .x-sbutton{
                            background:transparent; border-radius:100%;color:#fff
                        }
                        a {
                             color: #D3450C
                        }

                        input.form-control::-webkit-input-placeholder {
                                                                    color: #eee
                        }

                        input.form-control {
                                                                    background: rgba(228, 223, 223, 0.2);
                            border: none;
                            color: #eee;
                            -webkit-transition: 0.2s ease-in;
                            -moz-transition: 0.2s ease-in;
                            transition: 0.2s ease-in;

                        }

                        input:focus {
                            box-shadow:0px !important;
                            letter-spacing: 2px;
                            -webkit-transition: 0.2s ease-in;
                            -moz-transition: 0.2s ease-in;
                            transition: 0.2s ease-in;
                        }
        `}
                </style>
            </div>
        );
    }
}

export default Login;
