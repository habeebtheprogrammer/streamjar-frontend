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
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Intro from "../extras/intro"
import Photos from "../extras/photos"
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
               
                <div className="col-sm-9 x-right-grid">
                <div className="row">
                <div className="col-sm-12">
                <div className="profile-bg" style={{background:"url('../../images/bg.jpg')"}}>
                 <div className="row profile-img">
                 <div className="col-sm-2 zero">
                 <img src={`${this.state.user.dpUrl ||'../../../../images/john.jpg'}`} width="160px" alt="" />

                 </div>
                 <div className="col-sm-9 ">
                 <p className="profile-name" style={{ textTransform: "capitalize",paddingTop:"50px" }}>{this.state.user.fullName}
                <button className="btn danger pull-right " style={{color:"black"}}>Follow</button>  
                 
                 </p>
                 </div>
                    </div>
                    </div>
                <div className="profile-tab">
                </div>
                </div>
           
              </div>

              <div className="row">
              <div className="col-sm-4">
              <Intro profile={this.state.user}/>
              <Photos profile={this.state.user}/>
              </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <div className="x-post white">
              <div className="">
             <div> <div className="image">
             <img src="../../images/john.jpg" style={{width:"100%",borderRadius:"100px"}} alt="img" />
             </div> <div className="image-text">
             <div className="title">{this.state.user.fullName}  has just Joined!</div>
             <div style={{color:"grey"}}>{moment(this.state.user.date).format("ll")} at 4:03pm</div>
             </div>
             
             </div>

            <div className="clearfix"></div>
            <div className="content">
           <q>Change your life today. Don't gamble on the future, act now, without delay.</q> - Quote of the day
            <div className="post-img"><img src="../images/hustle-quotes.jpg" width="100%"/></div>
            </div>
              </div>
              </div>
              </div>
              </div>
                    {/* <div className="second-nav" >
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

                    </div> */}

                    
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
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white">
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth} />
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
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