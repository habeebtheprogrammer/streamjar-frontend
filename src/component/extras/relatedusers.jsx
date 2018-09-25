import React, { Component } from 'react';
import $ from "jquery"
import classnames from "classnames"
import apiUrl from "../../config"
import axios from "axios"
import jwt from "jsonwebtoken"

import {Link} from "react-router-dom"
class Relatedusers extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            friends:[]
        }
        this.action = this.action.bind(this)

        this.sendRequest = this.sendRequest.bind(this)
        this.accept = this.accept.bind(this)
    }

componentWillMount() {
    axios.get(`${apiUrl}/api/getFriends?username=${this.props.auth.user.username}`).then((res1)=>{
        if(res1.data.friends)
         this.setState({friends:res1.data.friends})
    axios.get(`${apiUrl}/api/get6users`).then((res) => {
        if(res.data.users) 
        {
                    var filter = res.data.users.filter((user)=>user.username !== this.props.auth.user.username);
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
                  this.setState({ relatedusers: filter })
                  }
                })
            })

            this.setState({ rloader: false })
  
}
action(member){
    if(member.type==="friend") null;
    else if(member.type==="sent") return  null
    else if(member.type==="request")return  <button type="button" onClick={()=>this.accept(member)}  className="btn btn-round pull-right" style={{}}><i className="fa fa-user-plus"></i></button>
    else return   <button type="button" onClick={()=>this.sendRequest(member)}  className="btn btn-round pull-right"><i className="fa fa-plus"></i></button>
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
    render() {
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        
        return (
            <div className="white" style={{paddingBottom:"10px"}}>
                <div style={{ margin:"0px 10px 5px",padding: "12px 0px", }}>Friends suggestion</div>
                {this.state.rloader ? <center style={{ margin: "100px 0px" }}><i className="fa fa-spin fa-spinner"></i></center> : null}
                {this.state.relatedusers.map((member, key) => (
                        <div  className={classnames(this.state.rloader ? "hide" : null)}  style={{padding:"7px 12px"}}>
                            <div className="img" style={{width:"11%",display:"inline-block"}}>
                                <img src={member.dpUrl || "../../../../images/avatar.jpg"} width="100%" className="img-responsive img-rounded" alt="Image" />
                            </div>
                            <div className="name" style={{paddingLeft:"10px",display:"inline-block",width:"58%"}}>
                    <a href={`/profile/${member.username}`}>
                                {member.username}
                    </a>
                                <br />
                                <small >{member.status}</small>
                            </div>
                            <div className="" style={{padding:"0px 5px",display:"inline-block",width:"31%"}}>
                           <small> {this.action(member)}</small>
                          
                            </div>
                            <div className="clearfix"> </div>
                        </div>


                ))}
            </div>
        );
    }
}

export default Relatedusers;
