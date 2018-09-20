import React, { Component } from 'react';
import axios from "axios"
import apiUrl from "../../config"
import {Link} from "react-router-dom"
class Requestsent extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
        }
    }

    render() {
        var {user} = this.props
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        
        return (
            <div className="friendscard white">
            <div className="title" >
            {/* <span> Friend Request +{this.state.friends.request.length}</span> */}
            {/* <span className="pull-right font-xs"><Link to={`/profile/${this.props.match.params.id}/friends`} > <b> Friends +1332</b> </Link> </span> */}

            <span className="font-xs"> <b> Sent request</b> </span>
            </div>
               
               <div className="row content">
               {this.props.friends.list.map((user)=>( user.type==="sent"?
     <div className="col-sm-6 " style={{margin:"10px 0px"}}>
     <div className="row" >
         <div className="col-sm-3 zero">
         <Link to={`/profile/${user.userID.username}`}><img src={user.userID.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
         </div>
         <div className="col-sm-9"  style={{padding:"20px 10px"}}>
         <div><Link to={`/profile/${user.userID.username}`} style={{ textTransform: "capitalize" }}>{user.userID.username} </Link></div>
         <div style={{color:"gray",fontSize:"0.9em"}}>department of {user.userID.department} {user.userID.university} </div>
         </div>
     </div>
  
 </div>:null
               ))}
          
               </div>
               
         </div>
        );
    }
}

export default Requestsent;
