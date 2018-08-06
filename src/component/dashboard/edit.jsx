import React, { Component } from 'react';
import axios from "axios"
import FileUpload from "react-fileupload"
import apiUrl from "../../config"
import auth from "../../reducer/index"
import jwt from "jsonwebtoken"
import Navbar from "../navbar/index"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import countries from "../countries"
import $ from "jquery"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile.bioData,
        media: state.profile.media
    }
}
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            phone: "",
            dob: "",
            location: "",
            city: "",
            state: "",
            error: {},
            progress: false,
            success: "",
            dpsuccess:"",
            isLoading:false,
            dperror:"",
            userID: this.props.auth.user.id
        }
        this.typing = this.typing.bind(this)
        this.submitform = this.submitform.bind(this)
    }
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillMount() {
        $.getJSON(`${apiUrl}/api/dashboard?id=${this.props.auth.user.id}`, (res) => {
            if (res.user)
                this.setState({ user: res.user, isLoading: false }); else this.setState({ empty: true })
        })
    }
    submitform(e) {
        e.preventDefault();
        let token = jwt.sign(this.state, "o1l2a3m4i5d6e")
        this.setState({ isLoading: true, error: {}, success: {} })
        axios.post(`${apiUrl}/api/editprofile`, { token: token }).then((res) => {
            setTimeout(() => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error ,isLoading:false});
                } else if (res.data.success) {
                    this.setState({ success: res.data.success,isLoading:false });
                    // setTimeout(() => window.location.reload(), 1000)
                } 
                this.setState({ isLoading: false })
            }, 1000);

        }).catch((err) => {
            setTimeout(() => {
                console.log(err)
                this.setState({ isLoading: false, error: { server: "Please try again later. an error has occured" } })
            }, 1000);
        })
    }

    render() {
        var token = localStorage.getItem("kaytoken")
        return (
                <div className="row">
                    <Navbar />
                    <Sidebar match={this.props.match}/>
                    <div className="col-sm-11 x-right-grid">


                        <div className="second-nav" >
                            <ul className="nav navbar-nav hidden-xs">
                                <li className="list text"> Edit profile</li>

                            </ul>
                            <ul className="nav navbar-nav  right-nav ">
                                <li className="list text" style={{ color: "#aaa" }}> Dashboard</li>
                                <li className="list text slash" style={{ paddingLeft: "0%", paddingRight: "0px" }}> /</li>
                            <li className="list text" style={{ color: "#f44336" }}>  Edit profile</li>

                                <li className="list  button hidden-xs"><button className="btn btn-primary btn-sm btn-round img-rounded">
                                    <i className="fa fa-share-alt"></i>
                                </button></li>
                            </ul>
                            <div className="clearfix">

                            </div>

                        </div>


                        <div className="row zero ">
                            <div className="col-sm-12 main-page">
                                <div className="page-start  ">

                                    <div className="row zero page-row">
                                        <div className=" col-sm-3 zero left-grid  ">

                                            <Relatedusers auth={this.props.auth} />

                                        </div>

                                        <div className="col-sm-10 zero right-grid">


                                            <div className="row">
                                                <div className="col-sm-9 zero" style={{}}>
                                                <form onSubmit={this.submitform}>
                                                    <div className="row">
                                                        <div className="col-lg-12">

                                                            <div className="notification notice large margin-bottom-55">
                                                                <h4>Personal details 🙂</h4>
                                                                <p>We do not share or expose your data to any third partie application. data we collect are use to help people find and connect to you </p>
                                                            </div>

                                                            <div id="add-listing" className="separated-form">

                                                                <div className="add-listing-section">

                                                                    <div className="add-listing-headline">
                                                                        <h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
                                                                    </div>
                                                                
                                                                    <div className="row with-forms">
                                                                        <div className="col-md-6">
                                                                            <h5> Full Name </h5>
                                                                            <input required name="fullName" onChange={this.typing} className="search-field" type="text" />
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <h5> Telephone </h5>
                                                                            <input required name="phone" onChange={this.typing} className="search-field" type="text" />
                                                                        </div>
                                                                      
                                                                        <div className="col-md-6">
                                                                            <h5> Date of Birth</h5>
                                                                            <input required name="dob" onChange={this.typing} className="search-field" type="date" />
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <h5> Location</h5>
                                                                            <input required name="location" onChange={this.typing} className="search-field" type="text" />
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <h5> City</h5>
                                                                            <input required name="city" onChange={this.typing} className="search-field" type="text" />
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <h5> State</h5>
                                                                            <input required name="state" onChange={this.typing} className="search-field" type="text" />
                                                                        </div>
                                                                       
                                                                        {/* <div className="col-md-6">
                                                                            <h5>Country</h5>
                                                                            <select name="country" required onChange={this.typing} className="" >
                                                                                <option className="" >Please select </option>
                                                                                {countries.map((country, key) => (
                                                                                    <option key={key} className="" value={country.country}>{country.country}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div> */}


                                                                    </div>
                                                                    <button type="submit" className="button preview" disabled={this.state.progress ? true : false}>
                                                                        {this.state.progress ? <span><i className="fa fa-spin fa-spinner" style={{ marginRight: "5px" }}></i> Loading</span> : "Continue"}

                                                                    </button>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <p style={{ color: "#f91942", marginLeft: "3px" }}>{this.state.error.server ? <small>{this.state.error.server}</small> : null}</p>
                                                    <p style={{ color: "green", marginLeft: "3px" }}>{this.state.success ? <small>{this.state.success.server}</small> : null}</p>


                                                    <style>{`
               input,
input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"],
textarea,
select {
	height: 51px;
	line-height: 51px;
	padding: 0 20px;
	outline: none;
	font-size: 15px;
	color: #808080;
	margin: 0 0 16px 0;
	max-width: 100%;
	width: 100%;
	box-sizing: border-box;
	display: block;
	background-color: #fff;
	border: 1px solid #dbdbdb;
	box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.06);
	font-weight: 500;
	opacity: 1;
	border-radius: 3px;
}

select {
	padding: 15px 18px;
	cursor: pointer;
}

input {
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	-ms-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;
}

input:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
textarea:focus {
	color: #808080;
	transition: box-shadow 0.2s !important;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);
	border: 1px solid #d8d8d8;
	opacity: 1;
}

input[type="submit"] {
  border: none;
  padding: 11px 18px;
  width: auto;
}

input[type="checkbox"] { display: inline; }

input[type="radio"] {
	width: 15px;
	height: 15px;
	cursor: pointer;
	box-shadow: none;
}

/* Input Placeholder Color */
::-webkit-input-placeholder { /* WebKit browsers */
	color: #888;
	opacity: 1;
}

:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	color: #888;
	opacity: 1;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
	color: #888;
	opacity: 1;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
	color: #888;
	opacity: 1;
}

                    `}
                                                    </style>

                                                </form>
                                                </div>
                                                <div className="col-sm-3" style={{ borderLeft: "1px solid #eee", minHeight: "300px" }}>

                                                    <img src={this.props.auth.user.dp || "../../../../images/avatar.jpg"} width="100%" className="img-responsive" alt="img" />
                                              
                                                    <div style={{ padding: "5px 0px 0px", fontSize: "1.3em" }}><span>{this.props.auth.user.fullName} </span> </div>
                                                    <i className="fa fa-circle" style={{ fontSize: "0.5em", color: "green" }}></i>
                                                    <small className="online"> online</small><br />
                                                    <small> Joined 10:30am 12 Aug 2017</small>
                                                {this.state.dpsuccess ? <p className="green-text darken-1  center-align">{this.state.dpsuccess}</p> : null}
                                                {this.state.dperror ? <p className="red-text darken-1 center-align"> {this.state.dperror}</p> : null}
                                                    {/* <button className="btn btn-custom btn-sm  btn-block" id="callbtn">Edit profile</button> */}
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                
            </div >
        );
    }
}

export default connect(mapStateToProps)(Edit);