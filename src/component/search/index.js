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
import Relatedusers from "../extras/relatedusers"
import Shuffle from "shuffle-array"
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


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            users:[],
            result: [], 
           
            isLoading:false,
            searching: false,
            searched:false

        }
        this.typing = this.typing.bind(this)

    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        $.getJSON(`http://localhost:3006/api/getusers`,(users) => {
            console.log(users)
            this.setState(users)
        })
        
    }

    typing(e) {
        e.preventDefault();
        this.setState({ searching: true })        
        this.setState({ [e.target.name]: e.target.value }, (state) => {
            $.getJSON(`${apiUrl}/api/search?name=${this.state.name}`,(res) => {
                setTimeout(() => {
                if (res.result) {
                    
                    this.setState({ result:res.result})
                }

                this.setState({ searching: false,searched:true })
                }, 1000);
            });
        })
    }
    render() {
        var imglist =["john.jpg","sonu.jpg","genu.jpg","govinda.jpg"]
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
                                    {/* <div className=" col-sm-3 zero left-grid hidden-xs ">
                                     <Relatedusers auth={this.props.auth}/>
                                    </div> */}

                                    <div className="col-sm-12 full-grid zero ">
                                        <div className="page-title" style={{ borderBottom: "none" }}>
                                            <input type="text" name="name" onChange={this.typing} placeholder="Who/what are you looking for?" className="form-control"  />
                                            
                                            {this.state.searching?<center style={{margin:"200px 0px"}}><i className="fa fa-spin fa-spinner"></i></center>:null}
                                            
                                        </div>

                                        <div className={classnames(this.state.searching?"row hide":"row")}>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="dashboard-list-box margin-top-0">
                                                    <ul>
                                                        {this.state.searched ?
                                                            this.state.result.map((member, key) => (
                                                                <li className="col-md-6">
                                                                    <div className="list-box-listing">
                                                                        <div className="list-box-listing-img"><Link to={`/profile/${member.username}`}><img src={member.dpUrl || "../../../../images/avatar.jpg"} alt="" /></Link></div>
                                                                        <div className="list-box-listing-content">
                                                                        <div className="list-box-listing-content">
                                                                        <div className="inner" style={{ textTransform: "capitalize" }}>
                                                                            <h3><Link to={`/profile/${member.username}`} style={{ textTransform: "capitalize" }}>{member.fullName} </Link></h3>
                                                                            <span style={{ textTransform: "capitalize" }}>{member.country}</span>
                                                                            <div style={{fontSize:"0.9em"}}>  
                                                                                  <div><b>university : </b>{member.university}</div>
                                                                                  <div><b>department : </b>{member.department}</div>
                                                                                  <div style={{textTransform:"lowercase",paddingTop:"10px"}}>{member.bio}</div>
                                                                            </div>
                                                                            </div> <br /><br />
                                                                            <Link to={`/profile/${member.username}`} className="button gray"><i className="fa fa-user"></i> View profile</Link>
                                                                        <Link to={`/chat/${member.username}`}  className="button gray"><i className="fa fa-comments"></i> Message</Link>
                                                                        <Link to={`/call/${member.username}`}  target="__blank" className="button gray"><i className="fa fa-phone"></i> Call</Link>
                                                                    </div>
                                                                        </div>
                                                                    </div>
                                                                 
                                                                </li>
                                                            ))
                                                            :
                                                    
                                                        Shuffle(this.state.users).map((member,key) => (
                                                                <li className="col-md-6">
                                                                <div className="list-box-listing">
                                                                    <div className="list-box-listing-img"><Link to={`/profile/${member.username}`}><img src={member.dpUrl || "../../../../images/avatar.jpg"} alt="" /></Link></div>
                                                                    <div className="list-box-listing-content">
                                                                        <div className="inner" style={{ textTransform: "capitalize" }}>
                                                                            <h3><Link to={`/profile/${member.username}`} style={{ textTransform: "capitalize" }}>{member.fullName} </Link></h3>
                                                                            <span style={{ textTransform: "capitalize" }}>{member.country}</span>
                                                                            <div style={{fontSize:"0.9em"}}>  
                                                                                  <div><b>university : </b>{member.university}</div>
                                                                                  <div><b>department : </b>{member.department}</div>
                                                                                  <div style={{textTransform:"lowercase",paddingTop:"10px"}}>{member.bio}</div>
                                                                            </div>
                                                                            </div> <br /><br />
                                                                            <Link to={`/profile/${member.username}`} className="button gray"><i className="fa fa-user"></i> View profile</Link>
                                                                        <Link to={`/chat/${member.username}`}  className="button gray"><i className="fa fa-comments"></i> Message</Link>
                                                                        <Link to={`/call/${member.username}`}    target="__blank" className="button gray"><i className="fa fa-phone"></i> Call</Link>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="buttons-to-right">
                                                                        <Link to={`/profile/${member.username}`} className="button gray"><i className="fa fa-user"></i> View profile</Link>
                                                                    <Link to={`/chat/${member.username}`}  className="button gray"><i className="fa fa-comments"></i> Message</Link>
                                                                </div> */}
                                                            </li>
                                                        ))}


                                                    </ul>
                                                </div>
                                            </div>
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
            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);