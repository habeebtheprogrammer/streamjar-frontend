import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
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
import Shuffle from "shuffle-array"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Bgchat from "../extras/bgchat"
import jwt from "jsonwebtoken"
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
           friends:[],
            isLoading:false,
            searching: false,
            searched:false

        }
        this.typing = this.typing.bind(this)
        this.sendRequest = this.sendRequest.bind(this)

    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        $.getJSON(`${apiUrl}/api/getusers`,(users) => {
            var filter = users.users.filter((user)=>user.username !== this.props.auth.user.username);
            this.setState({users:filter})
        })
        axios.get(`${apiUrl}/api/getFriendRequest?username=${this.props.auth.user.username}`,(res)=>{
            this.setState({friends:res.data.friends})
        })
    }

    typing(e) {
        e.preventDefault();
        this.setState({ searching: true })        
        this.setState({ [e.target.name]: e.target.value }, (state) => {
            $.getJSON(`${apiUrl}/api/search?name=${this.state.name}`,(res) => {
                setTimeout(() => {
                if (res.result) {
            var filter = res.result.filter((user)=>user.username !== this.props.auth.user.username);
                    
                    this.setState({ result:filter})
                }

                this.setState({ searching: false,searched:true })
                }, 1000);
            });
        })
    }

    sendRequest(user){
        var {id,username} = this.props.auth.user;
        var data = {...this.props.auth.user, rFullName:user.fullName,rUsername:user.username, rID:user._id, rUniversity:user.university,rDepartment:user.department,rGender: user.gender}
        var token = jwt.sign(data,"o1l2a3m4i5d6e");
        axios.post(`${apiUrl}/api/sendFriendRequest`,{token:token}).then((res)=>{
            if(res.data.success){
                window.location.reload();
              this.setState({sentRequest:{username}})
            }
        })
    }
    render() {
        var imglist =["john.jpg","sonu.jpg","genu.jpg","govinda.jpg"]
        return (
            <div className="row">
                {/* <Navbar /> */}
                <Sidebar match={this.props.match}/>
                <div className="col-sm-9 x-right-grid">
              <Bgchat user={this.props.auth.user} socket={this.props.socket}/>
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


                    <div className="row zero " style={{paddingTop:"15px"}}>
                        <div className="col-sm-12 ">
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
                                            <div className="col-lg-12 col-md-12 zero">
                                                <div className="">
                                                        {this.state.searched ?
                                                            this.state.result.map((member, key) => (
                                                                <div className="col-sm-6 " style={{margin:"10px 0px"}}>
                                                                <div className="row" >
                                                                    <div className="col-sm-3 zero">
                                                                    <Link to={`/profile/${member.username}`}><img src={member.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
                                                                    </div>
                                                                    <div className="col-sm-6"  style={{padding:"20px 10px"}}>
                                                                    <div><Link to={`/profile/${member.username}`} style={{ textTransform: "capitalize" }}>{member.fullName} </Link></div>
                                                                    <div style={{color:"gray",fontSize:"0.9em"}}>department of {member.department} {member.university} </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                    
                                                                    <button type="button" className="btn btn-default" onClick={()=>this.sendRequest(member)} style={{fontSize:"0.9em"}}>Add friend</button>
                                                                    
                                                                    </div>
                                                                </div>
                                                             
                                                            </div>
                                                            ))
                                                            :
                                                    
                                                        Shuffle(this.state.users).map((member,key) => (
                                                            <div className="col-sm-6 " style={{margin:"10px 0px"}}>
                                                            <div className="row" >
                                                                <div className="col-sm-3 zero">
                                                                <Link to={`/profile/${member.username}`}><img src={member.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
                                                                </div>
                                                                <div className="col-sm-6"  style={{padding:"20px 10px"}}>
                                                                <div><Link to={`/profile/${member.username}`} style={{ textTransform: "capitalize" }}>{member.fullName} </Link></div>
                                                                <div style={{color:"gray",fontSize:"0.9em"}}>department of {member.department} {member.university} </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                
                                                                <button type="button" onClick={()=>this.sendRequest(member)} className="btn btn-default">Add friend</button>
                                                                
                                                                </div>
                                                            </div>
                                                         
                                                        </div>
                                                        ))}


                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 "}}>
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);