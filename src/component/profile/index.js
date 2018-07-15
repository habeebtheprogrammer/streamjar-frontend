import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import { Player } from 'video-react';
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import classnames from "classnames"
import Audio from 'react-audioplayer';
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Sidebar from "../navbar/sidebar"
import Loading from "../loader"
import Relatedusers from "../extras/relatedusers"

function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile.bioData,
        media: state.profile.media
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setUserProfile: setUserProfile,
        editUserProfile: editUserProfile
    }, dispatch)
}


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            user: {},
            empty:false,
            isLoading: true,

        }

    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        $.getJSON(`${apiUrl}/api/getuserbyid?id=${this.props.match.params.id}`, (res) => {
            if(res.user)
            this.setState({ user: res.user, isLoading: false });else this.setState({empty:true})
        }) 
    }
    render() {
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        return (
            <div className="row">
            
                <Navbar />
                <Sidebar />
               
                <div className="col-sm-11 x-right-grid">

                    <div className="second-nav" >
                        <ul className="nav navbar-nav hidden-xs">
                            <li className="list text">Search page</li>

                        </ul>
                        <ul className="nav navbar-nav  right-nav ">
                            <li className="list text" style={{ color: "#aaa" }}> Dashboard</li>
                            <li className="list text slash" style={{ paddingLeft: "0%", paddingRight: "0px" }}> /</li>
                            <li className="list text" style={{ color: "#f44336" }}> Chat Page</li>

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
                                    <div className=" col-sm-3 zero left-grid hidden-xs ">

                                     <Relatedusers auth={this.props.auth}/>

                                    </div>

                                    <div className="col-sm-10 zero right-grid">
                                        {this.state.isLoading && this.state.empty? <center style={{ margin: "200px 0px" }}><i className="fa fa-spin fa-spinner"></i></center>
                                            :
                                            <div className="row" style={{}}>
                                                <div className="col-sm-9 zero" style={{}}>
                                                    <div className="dashboard-list-box margin-top-0">
                                                        {/* <h4 style={{ textTransform: "capitalize" }}>{this.state.user.firstName} {this.state.user.lastName}</h4> */}
                                                        <ul>
                                                            <li>
                                                                <div className="row" style={{ margin: "0px" }}>
                                                                    <div className="col-sm-6 col-sm-offset-3">
                                                                        <div className="profile-pic" style={{ height: "195px", width: "67%", margin: "auto"}}>
                                                                        </div>

                                                                    </div>
                                                                    <div className="col-sm-4 col-sm-offset-4">

                                                                        <center>
                                                                            <h2 style={{ textTransform: "capitalize" }}>{this.state.user.fullName}</h2>
                                                                            <p style={{ textTransform: "capitalize" }}>{this.state.user.department} {this.state.user.university}</p>

                                                                        </center>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="list-box-listing">
                                                                    {/* <div className="list-box-listing-img"><a href="#"><img src={`${this.state.user.dpUrl}`} alt="" /></a></div> */}
                                                                    <div className="list-box-listing-content">
                                                                        <div className="inner" style={{ textTransform: "capitalize" }}>

                                                                            <div className="row" style={{ margin: "0px" }}>
                                                                                <div className="col-sm-12">
                                                                                    <h3><a href="#" style={{ textTransform: "capitalize" }}>Bio</a></h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.bio}</p>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.about}</p>
                                                                                </div>
                                                                                {/* <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>Location</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.location}</p>

                                                                                </div> */}
                                                                                <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>Department</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.department}</p>

                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>University</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.university}</p>

                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>Member since</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{moment(this.state.user.date).format("LL")}</p>

                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>Email</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.email}</p>

                                                                                </div>
                                                                                {/* <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>Date of Birth</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.dob}</p>
                                                                                </div> */}
                                                                                <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>username</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.username}</p>

                                                                                </div>
                                                                                <div className="col-sm-4">
                                                                                    <h3 style={{ textTransform: "capitalize" }}>Gender</h3>
                                                                                    <p style={{ textTransform: "capitalize" }}>{this.state.user.gender}</p>

                                                                                </div>
                                                                            </div>

                                                                            <div className="star-rating" data-rating="3.5">
                                                                                {/* <div className="rating-counter">{this.state.user.views} Views  </div> */}

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                {/* <div className="buttons-to-right">
                                                                    <a href={`/chat/${this.state.user.username}`} className="button gray"><i className="fa fa-comments"></i> Message</a>
                                                                    <a href="#" className="button gray"><i className="fa fa-phone"></i> call</a>
                                                                </div> */}
                                                            </li>


                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3" style={{ borderLeft: "1px solid #eee", minHeight: "300px" }}>

                                                    <img src={this.state.user.dpUrl || "../../../../images/avatar.jpg"} width="100%" className="img-responsive" alt="img" />
                                                    <div style={{ padding: "5px 0px 0px", fontSize: "1.3em" }}><span>{this.state.user.fullName}</span> </div>
                                                    <i className="fa fa-circle" style={{ fontSize: "0.5em", color: "green" }}></i>
                                                    <small className="online"> online</small><br />
                                                    <small> Joined {moment(this.state.user.date).format("LL")}</small>
                                                    <a href={`/call/${this.state.user.username}`} target="_blank" className="btn btn-custom btn-sm  btn-block" id="callbtn"> <i className="fa fa-video-camera"></i> call</a>
                                                </div>
                                            </div>
                                        }

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <div className="col-xs-12" style={{background:"#fff"}}>
                            <div style="text-align:center;padding: 15px 0px;font-weight:400">
                                2017 © Peer to Peer RTC Designed by Habeeb <br />
                                <button className="btn btn-danger btn-sm btn-round" style="border-radius:100%;box-shadow:0 1px 10px 0 darkgrey;border:none">
                                    <i className="fa fa-facebook"></i>
                                </button>
                                <button className="btn btn-danger btn-sm btn-round" style="border-radius:100%;box-shadow:0 1px 10px 0 darkgrey;border:none">
                                    <i className="fa fa-instagram"></i>
                                </button>
                                <button className="btn btn-danger btn-sm btn-round" style="border-radius:100%; box-shadow:0 1px 10px 0 darkgrey;border:none">
                                    <i className="fa fa-whatsapp"></i>
                                </button>
                            </div>
                        </div> */}
                </div>
                <style>{`
                        .profile-pic{
                            // background: url("${this.state.user.dpUrl}");
                            background: url('${this.state.user.dpUrl || "../../../../images/avatar.jpg"}');
                             border-radius: 100%;
                             background-position: center;
                             background-size: contain;
                        }
                        `}
                            </style>
            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);