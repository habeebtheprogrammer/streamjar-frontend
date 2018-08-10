import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import jwt from "jsonwebtoken"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
import Loading from "../loader"
import classnames from "classnames"
import validator from "validator"
import Navbar from "../navbar/index"
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            username: "",
            fullName: "",
            password: "",
            university: "",
            department: "",
            gender: "",
            success:"",
            error:""
        }
        this.typing = this.typing.bind(this)
        this.register = this.register.bind(this)
    }


    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    register(e) {
        e.preventDefault();
        this.setState({error:"",success:""})
        axios.post(`${apiUrl}/api/signup`, this.state).then((res) => {
            if (res.data.success) {
                this.setState({ success: res.data.success })
                setTimeout(() => {
                    window.location.assign("/login")
                }, 1000);
            } else {
                this.setState({ error: res.data.error })
            }
        });
    }
    render() {
        // const { username, password, completed, firstName, lastName, email, dob, tos, street, country, membership, city, state, phone, touchbyemail, touchbysms, contactedbynews, contactedbypromotion, contactedbyevent, missathing, importantstuff, donotcontact } = this.state

        return (
            <div className="x-swrapper signup">
                <div className="row" className="form-horizontal" style={{ padding: "20px 10px", margin: "0" }}>
                    <div className=" col-sm-4 col-sm-offset-4 " style={{ overflow: "hidden" }}>
                        <form onSubmit={this.register}>
                            <div className="row" style={{ padding: "30px 0px" }}>
                                <div className="col-sm-4" style={{ paddingTop: "18px" }}>
                                    <div style={{ height: "1px", background: "#777", width: "100%" }} ></div>
                                </div>
                                <div className="col-sm-4 zero" style={{ fontSize: "1.8em" }}>
                                    <center>Sign Up </center>
                                </div>
                                <div className="col-sm-4" style={{
                                    paddingTop: "18px"
                                }} >
                                    <div style={{ height: "1px", background: "#777", width: "100%" }}></div>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <input name="fullName" type="text" onChange={this.typing} className="form-control" required="required" placeholder="Full Name" />
                                <span className="form-control-feedback">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="username" onChange={this.typing} className="form-control" type="username" required="required" placeholder="Username" />
                                <span className="form-control-feedback">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </div>

                            <div className="form-group has-feedback">
                                <input name="department" type="text" onChange={this.typing}  className="form-control" required="required" placeholder="Department" />
                                <span className="form-control-feedback">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="university" onChange={this.typing} className="form-control" type="text" required="required" placeholder="University" />
                                <span className="form-control-feedback">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                            <div className="form-group has-feedback">
                                <select type="text" onChange={this.typing} name="gender" className="form-control" required="required" >
                                    <option >Please select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <span className="form-control-feedback">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="email" onChange={this.typing} className="form-control" type="email" required="required" placeholder="Email" />
                                <span className="form-control-feedback">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                            <div className="form-group has-feedback">
                                <input name="password" type="password" onChange={this.typing} className="form-control"  required="required" placeholder="Password" />
                                <span className="form-control-feedback">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <div className="form-group has-feedback">
                               <p className="text-">{this.state.error?this.state.error:null}</p>
                            </div>
                            <div className="form-group has-feedback">

                                <button type="submit" className="btn btn-block btn-sm btn-custom"> Sign up</button>
                            </div>
                        </form>
                        <hr />
                        <center>Already a member?
                            <a href="/login">Log in</a>
                        </center>
                    </div>

                </div>
                <div className="clearfix">

                </div>
                <div className="container" style={{ paddingTop: "100px" }}>
                    <span>
                        Follow us on
                            <button type="button" className="btn btn-default x-sbutton" >
                            <i className="fa fa-facebook"></i>
                        </button>
                        <button type="button" className="btn btn-default x-sbutton" >
                            <i className="fa fa-twitter"></i>
                        </button>
                        <button type="button" className="btn btn-default x-sbutton" >
                            <i className="fa fa-instagram"></i>
                        </button>



                    </span>
                    <span className="pull-right"> Designed by
                        <span style={{ color: "#D3450C" }}>Habeeb Abdulrahman</span>
                    </span>
                    <br />
                        <span className="pull-right"> Supervised by <span style={{ color: "#D3450C" }}>Mr Ayeni</span><br />
                        
                        </span>
                    <style>
                        {`
                        body{
                            color:#eee;
                            background:linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(165, 14, 4, 0.6) 80%),url('./images/slide3.jpg');
                            min-height:662px;
                            background-size:cover;
                            background-attachment:fixed;
                            
                        }
                        .x-sbutton{
                            background:transparent; border-radius:100%;color:#fff
                        }
                          input.form-control::-webkit-input-placeholder {
                                                                    color: #eee 
                        }
                        .signup input,select{
                                                                    background: rgba(228, 223, 223, 0.2) !important;
                            border: none  !important;
                            color: #eee  !important;
                            -webkit-transition: 0.2s ease-in !important;
                            -moz-transition: 0.2s ease-in  !important;
                            transition: 0.2s ease-in  !important;
                        }
                       option{color:#555 !important}
                    `}
                    </style>
                </div>
            </div>
        );
    }
}

export default Signup;
