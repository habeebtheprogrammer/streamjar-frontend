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
import Recentpost from "../extras/recentpost"
import CreatableInput from "./select"
import Navtab from '../navbar/tab';
import Navfooter from '../extras/navfooter';
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
            result: {users:[],groups:[]}, 
           friends:{list:[]},
            isLoading:false,
            searching: true,
        }
        this.typing = this.typing.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
        this.accept = this.accept.bind(this)
        this.action = this.action.bind(this)
        this.filterUsers = this.filterUsers.bind(this)
        this.filterGroups = this.filterGroups.bind(this)
    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        var friends =[];
        axios.get(`${apiUrl}/api/getFriends?username=${this.props.auth.user.username}`).then((res1)=>{
            if(res1.data.friends)
             friends =res1.data.friends
             axios.get(`${apiUrl}/api/search${window.location.search}`).then((res) => {
                if(res.data.result && friends.username){
                var {result} = res.data
                if(result.users) this.filterUsers(result.users,friends);
                if(result.groups) this.filterGroups(result.groups);
                this.setState({searching:false,result})
            }
            });
         })
            var url = new URL(window.location.href)
            var query = new URLSearchParams(url.search)
            var string = query.get("query")
         
    }
    getFriends(username){
        
    }
    filterGroups(groups){
        groups.map((group)=>{
            group.members.map((user)=>{
                if(user.userID === this.props.auth.user.id && user.type=== "member") group.member = true;
                else if(user.userID === this.props.auth.user.id && user.type=== "request") group.request = true;
            });
        })
    }
    filterUsers(users,friends){
            var filter = users.filter((user)=>user.username !== this.props.auth.user.username);
           filter.map((user)=>{
               friends.list.map((friend)=>{
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
           return filter
    }

    typing(e) {
        e.preventDefault();
        this.setState({ searching: true })        
        this.setState({ [e.target.name]: e.target.value }, (state) => {
            axios.get(`${apiUrl}/api/search?query=${this.state.name}`).then((res) => {
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
    checkgroup(group){
        if(group.creatorID._id === this.props.auth.user.id || group.member)
       return null 
       else if(group.request)
       return <button type="button" className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.9em"}} disabled> Request sent</button>
       else if(group.creatorID._id !== this.props.auth.user.id && group.exists !== null)
       return <button type="button" onClick={()=>this.sendRequest(group)} className="btn btn-default btn-xs pull-right grey-color" > Join Group</button>

    }
    countmembers(members){
       var filter = members.filter((user)=>user.type === "member");
       return filter.length
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
       return <button type="button" className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.9em"}} disabled> Request sent</button>
        
        else if(member.type==="request")return <button type="button" className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.9em"}} onClick={()=>this.accept(member)} style={{fontSize:"0.9em"}}>Accept</button>        
        else return  <button type="button" onClick={()=>this.sendRequest(member)} className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.9em"}}>Add friend</button>;
    }
    render() {
        var imglist =["john.jpg","sonu.jpg","genu.jpg","govinda.jpg"]
        return (
            <div className="row">
                <Navtab socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid" >
          <div className="white" style={{margin:"5px 0px 15px"}}>
           <ul className="nav navbar-nav navbar-right zero filter" style={{fontSize:"0.9em"}}>
           <li className=""> 
           {/* <CreatableInput /> */}
            </li>
                 <li>
                 <select name="" id="input" className="form-control white" required="required">
                     <option value="">Gender</option>
                     <option value="">Male</option>
                     <option value="">Female</option>
                 </select>
                 </li>
                 <li className="">
                 <select name="" id="input" className="form-control white" required="required">
                     <option value="">City</option>
                     <option value="">Ilorin</option>
                     <option value="">Makurdi</option>
                 </select>
                 </li>
                 <li>
                 <select name="" id="input" className="form-control white" required="required">
                     <option value="">Work</option>
                     <option value="">Chevron</option>
                     <option value="">Dangote factory</option>
                 </select>
                 </li>
                 <li className="">
                 <select name="" id="input" className="form-control white" required="required">
                     <option value="">Education</option>
                     <option value="">University of ilorin</option>
                     <option value="">University of ibadan</option>
                 </select>
                 </li>
                 <li className="">
                    <button className="btn btn-default">
                    APPLY FILTER
                    </button>
                 </li>
             </ul>
             
             <div className="clearfix">
             
             </div>
             
             </div>
                    <div className="row zero ">
                    <div className="col-sm-4">
                    <div className="white x-post" style={{marginBottom:"15px",fontSize:"0.9em"}}>
                        Send a broadcast
                        
                        <i className="fa fa-bullhorn pull-right"></i>
                        
                    </div>
            <Recentpost auth={this.props.auth} />
            <Navfooter />
            
            </div>
                        <div className="col-sm-8 "  style={{paddingLeft:"0px"}}>
                            <div className="page-start  ">

                                <div className="row zero page-row">
                                    {/* <div className=" col-sm-3 zero left-grid hidden-xs ">
                                     <Relatedusers auth={this.props.auth}/>
                                    </div> */}

                                    <div className="col-sm-12 full-grid zero ">
                                        {/* <div className="page-title" style={{ borderBottom: "none",marginBottom:"15px" }}>
                                            <input type="text" name="name" onChange={this.typing} placeholder="Who/what are you looking for?" className="form-control"  />
                                            
                                            {this.state.searching?<center style={{margin:"200px 0px"}}><i className="fa fa-spin fa-spinner"></i></center>:null}
                                            
                                        </div> */}

                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 zero">
                                                <div className="">
                                                        {this.state.searching ? null:
                                                        this.state.result.users.map((member,key) => (
                                                        <div className="x-post white " style={{border:"0px",borderBottom:"1px solid #e8e8e8"}} >
                                                        <div className="">
                                                       <div> <div className="image">
                                                       <img src={`../../../images/${"genu.jpg"}`} style={{width:"100%",borderRadius:"100%"}} alt="img" />
                                                       </div> <div className="image-text">
                                                       <div className="title" ><Link to={`/profile/${member.username}`} style={{fontWeight:"normal"}}>{member.username}</Link>
                                                        {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}
                                                       
                                                       </div>
                                                       <div style={{}}><small>{member.status} {this.action(member)}</small> </div>
                                                       
                                                       </div>
                                                       
                                                       </div>
                                                       
                                                       <div className="clearfix"></div>
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
                    {/* <Relatedusers auth={this.props.auth}/> */}
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);