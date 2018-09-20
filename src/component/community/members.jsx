import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import jwt from "jsonwebtoken"
class Friends extends Component {
    constructor(props) {
        super(props);
        this.accept = this.accept.bind(this)
    }
    accept(user){
        console.log(user)
        var {id,username} = this.props.auth.user;
        var data = {userID:user._id,groupID:this.props.groupID}
        var token = jwt.sign(data,"o1l2a3m4i5d6e");
        axios.post(`${apiUrl}/api/acceptGroupRequest`,{token:token}).then((res)=>{
            if(res.data.success){
             window.location.reload();
            }
        })
    }
    render() { console.log(this.props)
        return (
            <div className="row">
          
              <div className="friendscard white" style={{margin:"0px"}}>
            <div className="title"  style={{fontSize:"1em"}}>
            <b> Members </b>
            </div>
               
               <div className="row content">
               {this.props.members.map((user)=>( user.type==="member"?
     <div className="col-sm-6 ">
     <div className="row" >
         <div className="col-sm-3 zero">
         <Link to={`/profile/${user.userID.username}`}><img src={user.userID.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
         </div>
         <div className="col-sm-9"  style={{padding:"20px 10px"}}>
         <div><Link to={`/profile/${user.userID.username}`} style={{ textTransform: "capitalize" }}>{user.userID.fullName} </Link></div>
         <div style={{color:"gray",fontSize:"0.9em"}}>department of {user.userID.department} {user.userID.university} </div>
         </div>
     </div>
  
 </div>:null
               ))}
          
               </div>
               
              </div>
            {this.props.auth.user.id === this.props.creatorID._id?
              <div className="friendscard white">
            <div className="title" style={{fontSize:"1em"}}>
             <b>Request</b>
            </div>
               
               <div className="row content">
               {this.props.members.map((user)=>( user.type ==="request"?
     <div className="col-sm-12 " style={{margin:"10px 0px"}}>
     <div className="row" >
         <div className="col-sm-2 zero">
         <Link to={`/profile/${user.userID.username}`}><img src={user.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
         </div>
         <div className="col-sm-10"  style={{padding:"20px 10px"}}>
         <div><Link to={`/profile/${user.userID.username}`} style={{ textTransform: "capitalize" }}>{user.userID.fullName} </Link></div>
         <div style={{color:"gray",fontSize:"0.9em"}}>department of {user.userID.department} {user.userID.university} </div>
         <button type="button" className="btn btn-default pull-right" onClick={()=>this.accept(user.userID)} style={{fontSize:"0.9em"}}>Accept</button>
         </div>
     </div>
  
 </div>:null
               ))}
          
               </div>
               
         </div>:null}
            </div>

            
        );
    }
}

export default Friends;