import React, { Component } from 'react';
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import jwt from "jsonwebtoken"
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newusers:{}
        }
        this.sendRequest = this.sendRequest.bind(this)
        this.accept = this.accept.bind(this)
        this.action = this.action.bind(this)
        this.filterUsers = this.filterUsers.bind(this)
    }
    componentWillMount() {
        var {users,friends} = this.props;
        var newusers = this.filterUsers(users,friends);
        this.setState({newusers})
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
           console.log(filter,friends)
           return filter
    }

    sendRequest(user){
        var {id,username} = this.props.auth.user;
        var data = {...this.props.auth.user, rFullName:user.fullName,rUsername:user.username, rID:user._id,rGender: user.gender}
        var token = jwt.sign(data,"o1l2a3m4i5d6e");
        axios.post(`${apiUrl}/api/sendFriendRequest`,{token:token}).then((res)=>{
            if(res.data.success){
                window.location.reload();
            }
        })
    }
    accept(user){
        var {id,username} = this.props.auth.user;
        var data = {...this.props.auth.user, rFullName:user.fullName,rUsername:user.username, rID:user._id, rGender: user.gender}
        var token = jwt.sign(data,"o1l2a3m4i5d6e");
        axios.post(`${apiUrl}/api/acceptRequest`,{token:token}).then((res)=>{
            if(res.data.success){
             window.location.reload();
            }
        })
    }
    
    action(member){
        if(member.type==="friend") null;
        else if(member.type==="sent") return  null
        else if(member.type==="request")return  <button type="button" onClick={()=>this.accept(member)}  className="btn btn-round pull-right" style={{}}><i className="fa fa-user-plus"></i></button>
        else return   <button type="button" onClick={()=>this.sendRequest(member)}  className="btn btn-round pull-right"><i className="fa fa-plus"></i></button>
    }
    render() {
        return (
            <div className="row">
                    {
                    this.state.newusers.map((member,key) => (
                    <div className="x-post white " style={{border:"0px",borderBottom:"1px solid #e8e8e8"}} >
                    <div className="">
                    <div> <div className="image">
                    <img src={`../../../images/${"genu.jpg"}`} style={{width:"100%",borderRadius:"100%"}} alt="img" />
                    </div> <div className="image-text">
                    <div className="title" ><Link to={`/profile/${member.username}`} style={{fontWeight:"normal"}}>{member.username}</Link>
                    </div>
                    <div style={{}}><small>{member.status} {this.action(member)}</small> </div>
                    </div>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    </div>
                    ))}
            </div>
        );
    }
}

export default Users