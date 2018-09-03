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
import Intro from "../extras/intro"
import Navtab from '../navbar/tab';
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            users:[],
            result: [], 
           friends:{list:[]},
            isLoading:false,
            searching: false,
            searched:false
        }
        this.typing = this.typing.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
        this.accept = this.accept.bind(this)
        this.action = this.action.bind(this)

    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        axios.get(`${apiUrl}/api/getFriends?username=${this.props.auth.user.username}`).then((res1)=>{
           if(res1.data.friends)
            this.setState({friends:res1.data.friends})
            
            axios.get(`${apiUrl}/api/getusers`).then((res) => {
                if(res.data.users) 
                {
                  var filter = res.data.users.filter((user)=>user.username !== this.props.auth.user.username);
                  var alluser=[]; 
                if(res1.data.friends){
                    filter.map((user)=>{
                        res1.data.friends.list.map((friend)=>{
                            if(friend.userID.username===user.username && friend.type==="sent"){
                                user.type = "sent";
                            }
                            else if(friend.userID.username===user.username && friend.type==="request"){
                            user.type = "request"
                           }
                           else if(friend.userID.username===user.username && friend.type==="friend"){
                            user.type = "friend"
                           } 
                        })
                    
                    })
                    
                }
               this.setState({users:filter})
                }
               
              })
            
        })
       
     
    }

    typing(e) {
        e.preventDefault();
        this.setState({ searching: true })        
        this.setState({ [e.target.name]: e.target.value }, (state) => {
            axios.get(`${apiUrl}/api/search?name=${this.state.name}`).then((res) => {
                // setTimeout(() => {
                if (res.data.result) {
                    var filter = res.data.result.filter((user)=>user.username !== this.props.auth.user.username);
                    var alluser=[]; 
                   filter.map((user)=>{
                       this.state.friends.list.map((friend)=>{
                        if(friend.userID.username===user.username && friend.type==="sent"){
                            user.type = "sent";
                        }
                        else if(friend.userID.username===user.username && friend.type==="request"){
                        user.type = "request"
                       }
                       else if(friend.userID.username===user.username && friend.type==="friend"){
                        user.type = "friend"
                       }
                       })
                   })
                this.setState({ searching: false,searched:true,result:filter })

                }

                // }, 1000);
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
            }
        })
    }
    accept(user){
        var {id,username} = this.props.auth.user;
        var data = {...this.props.auth.user, rFullName:user.fullName,rUsername:user.username, rID:user._id, rUniversity:user.university,rDepartment:user.department,rGender: user.gender}
        var token = jwt.sign(data,"o1l2a3m4i5d6e");
        axios.post(`${apiUrl}/api/acceptRequest`,{token:token}).then((res)=>{
            if(res.data.success){
             window.location.reload();
            }
        })
    }
    
    action(member){
        if(member.type==="friend") null;
       
        else if(member.type==="sent")
       return <button type="button" className="btn btn-default btn-sm pull-right" disabled> Request sent</button>
        
        else if(member.type==="request")return <button type="button" className="btn btn-default pull-right" onClick={()=>this.accept(member)} style={{fontSize:"0.9em"}}>Accept</button>        
        else return  <button type="button" onClick={()=>this.sendRequest(member)} className="btn btn-default btn-sm pull-right" >Add friend</button>;
    }
    render() {
        var imglist =["john.jpg","sonu.jpg","genu.jpg","govinda.jpg"]
        return (
            <div className="row">
                <Sidebar match={this.props.match}/>
                <div className="col-sm-9 x-right-grid">
                <Navtab socket={this.props.socket} match={this.props.match}/>
         

                    <div className="row zero ">
                    <div className="col-sm-4">
            <Intro {...this.props} user={this.props.auth}/>
            <div className="row white">
                <div className="col-xs-12 zero">
                    <img src="../../images/img.jpg" width="100%" alt=""/>
                </div>
                
                <div className="col-xs-12 "  style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>
                <div>Advertise your business here</div>
                    
                </div>
                
            </div>
            
            </div>
                        <div className="col-sm-8 "  style={{paddingTop:"15px",paddingLeft:"0px"}}>
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
                                                                <div className="col-sm-12 " style={{margin:"10px 0px"}}>
                                                                 <div className="row" >
                                                                <div className="col-sm-2 zero">
                                                                <Link to={`/profile/${member.username}`}><img src={member.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
                                                                </div>
                                                                <div className="col-sm-10"  style={{padding:"20px 10px"}}>
                                                                <div><Link to={`/profile/${member.username}`} style={{ textTransform: "capitalize" }}>{member.fullName} </Link></div>
                                                                <div style={{color:"gray",fontSize:"0.9em"}}>Studying {member.department} {member.university} </div>
                                                                {this.action(member)}
                                                                </div>
                                                            </div>
                                                             
                                                            </div>
                                                            ))
                                                            :
                                                    
                                                        Shuffle(this.state.users).map((member,key) => (
                                                            <div className="col-sm-12" style={{margin:"10px 0px",borderBottom:"1px solid #e8e8e8"}}>
                                                            <div className="row" >
                                                                <div className="col-sm-2 ">
                                                                <Link to={`/profile/${member.username}`}><img src={member.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
                                                                </div>
                                                                <div className="col-sm-10"  style={{padding:"0px 10px 5px"}}>
                                                                <div><Link to={`/profile/${member.username}`} style={{ textTransform: "capitalize" }}>{member.fullName} </Link></div>
                                                                <div style={{color:"gray",fontSize:"0.9em",paddingTop:"15px"}}>Studying {member.department} <br /> {member.university} </div>
                                                              {/* {member.friendrequest?null:  <button type="button" onClick={()=>this.sendRequest(member)} className="btn btn-default btn-sm pull-right" >Add friend</button>} */}
                                                                {this.action(member)}
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
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
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