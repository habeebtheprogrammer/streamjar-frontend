import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Audio from 'react-audioplayer';
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Onlineusers from "../extras/onlineusers"
function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile.bioData,
        media: state.profile.media
    }
}


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            user: {},
            isLoading:true,
            online:true

        }

    }
    componentWillMount() {
        $.getJSON(`${apiUrl}/api/dashboard?id=${this.props.auth.user.id}`, (res) => {
            if (res.user)
                this.setState({ user: res.user, isLoading: false }); else this.setState({ empty: true })
        })
        var {socket} = this.props.socket
        // var decodedToken = jwt.decode(window.localStorage.kaytoken);
        socket.on("connect",()=>this.setState({online:true}))
        socket.on("disconnect",()=>{
            this.setState({online:false})
            console.log("disconnect from server")
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
                            <li className="list text"> CHAT PAGE</li>

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
                                    <div className=" col-sm-3 zero left-grid  ">

                                        <Onlineusers auth={this.props.auth} socket={this.props.socket}/>

                                    </div>

                                    <div className="col-sm-12 zero right-grid">
                                     

                                        <div className="row">
                                            <div className="col-sm-9 zero" style={{}}>
                                                <div className="dashboard-list-box margin-top-0 ">
                                                    {/* <h4 style={{ textTransform: "capitalize" }}>{this.state.user.firstName} {this.state.user.lastName}</h4> */}
                                                    <ul>
                                                        <li>
                                                            <div className="row" style={{ margin: "0px" }}>
                                                                <div className="col-sm-6 col-sm-offset-3 profilepic">
                                                                <FileUpload options={{
                            baseUrl: `${apiUrl}/api/uploadDp`,
                            param: {
                                fid: 0
                            },
                            chooseAndUpload: true,
                            accept: "image/*",
                            fileFieldName: "dp",
                            uploadSuccess: function (res) {
                                if(res.error){
                                  
                                    setTimeout(() => {
                                        this.setState({ error: res.error, isLoading: false, })
                                        
                                    }, 2000);
                                }
                                else{
                                    this.setState({ isLoading: false,success:"Uploaded successfully" })
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 1000);
                                   

                                }
                                
                            }.bind(this),
                            chooseFile: function (files) {
                                if(files[0].size>4025081) {
                                    this.setState({error:"The picture size should not exceed 4mb"})
                                return false;
                                }else
                                this.setState({ isLoading:true, success: "", error: "" })
                            }.bind(this),
                            uploadFail: function (err) {
                                this.setState({ isLoading: false, success:"", error: "Please try again late" })
                                console.log(err)
                            }.bind(this),
                            uploadError: function (err) {
                                this.setState({ error: " please try again later",isLoading:false})
                            }.bind(this),
                            uploading: function (progress) {
                                this.setState({success:"",error:"",isLoading:true})
                            }.bind(this),
                            paramAddToField: { token: token }
                        }}>
                                                    {/* <button ref="chooseBtn" className="btn btn-default btn-sm">choose</button> */}
                                                    <button ref="chooseAndUpload" className="btn grey z-depth-0 lighten-2 profile-pic" style={{ minHeight: "178px", width: "183px", margin: "auto", }}>
                                                        <i className="fa fa-camera fa-2x" style={{color:"white"}}></i> 
                                                    </button>
                                                </FileUpload>
                                                                    <div >
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
                                            {/* <div className="col-sm-3" style={{ borderLeft: "1px solid #eee", minHeight: "300px" }}>

                                                <img src="../../images/user.jpg" width="100%" className="img-responsive" alt="img" />
                                                <div style={{ padding: "5px 0px 0px", fontSize: "1.3em" }}><span>{this.props.auth.user.fullName} </span> </div>
                                                <i className="fa fa-circle" style={{ fontSize: "0.5em", color: "green" }}></i>
                                                {this.state.online ? <small className="online"> online</small> : <small className="away"> Connecting...</small>}<br />
                                                <small> Joined {moment(this.props.auth.user.date).format("LL")}</small>
                                                <Link to="/dashboard/edit" className="btn btn-custom btn-sm  btn-block" id="callbtn">Edit profile</Link>
                                            </div> */}
                                        </div>

                                    </div>

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

export default connect(mapStateToProps)(Dashboard);