import React, { Component } from 'react';
import axios from "axios"
import apiUrl from "../../config"
import {Link} from "react-router-dom"
import jwt from "jsonwebtoken"
class Friendrcard extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            friends:{request:[]}
        }
        this.accept = this.accept.bind(this)
    }

componentWillMount() {
    axios.get(`${apiUrl}/api/getFriends?username=${this.props.auth.user.username}`).then((res)=>{
       if(res.data.friends)
        this.setState({friends:res.data.friends})
    })
}

accept(user){
    console.log(user)
    var {id,username} = this.props.auth.user;
    var data = {...this.props.auth.user, rFullName:user.fullName,rUsername:user.username, rID:user.userID, rUniversity:user.university,rDepartment:user.department,rGender: user.gender}
    var token = jwt.sign(data,"o1l2a3m4i5d6e");
    axios.post(`${apiUrl}/api/acceptRequest`,{token:token}).then((res)=>{
        if(res.data.success){
         window.location.reload();
        }
    })
}

    render() {
        var {user} = this.props
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        
        return (
            <div className="friendscard white">
            <div className="title" >
            {/* <span> Friend Request +{this.state.friends.request.length}</span> */}
            {/* <span className="pull-right font-xs"><Link to={`/profile/${this.props.match.params.id}/friends`} > <b> Friends +1332</b> </Link> </span> */}

            <span className="font-xs"> <b>Friend request </b> </span>
            </div>
               
               <div className="row content">
               {this.state.friends.request.map((user)=>(
     <div className="col-sm-12 " style={{margin:"10px 0px"}}>
     <div className="row" >
         <div className="col-sm-2 zero">
         <Link to={`/profile/${user.username}`}><img src={user.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
         </div>
         <div className="col-sm-6"  style={{padding:"20px 10px"}}>
         <div><Link to={`/profile/${user.username}`} style={{ textTransform: "capitalize" }}>{user.fullName} </Link></div>
         <div style={{color:"gray",fontSize:"0.9em"}}>department of {user.department} {user.university} </div>
         </div>
         <div className="col-sm-4">
         <button type="button" className="btn btn-default pull-right" onClick={()=>this.accept(user)} style={{fontSize:"0.9em"}}>Accept</button>
         {/* <button type="button" className="btn btn-defaul pull-right"  style={{fontSize:"0.9em"}}>Decline</button> */}

         </div>
     </div>
  
 </div>
               ))}
          
               </div>
               
         </div>
        );
    }
}

export default Friendrcard;
