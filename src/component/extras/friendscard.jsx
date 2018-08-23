import React, { Component } from 'react';
import axios from "axios"
import apiUrl from "../../config"
import {Link} from "react-router-dom"
class Friendscard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            rloader: true,
        }
    }

componentWillMount() {
    
}

    render() {
        return (
            <div className="friendscard white">
            {this.props.auth.user.username === this.props.match.params.id?
            <div className="title" >
            <span> Friends </span>
            <span className="pull-right font-xs"><Link to={`/profile/${this.props.match.params.id}/friendRequests`} > <b> Friend request </b> </Link> </span>
            {/* <span className="pull-right " style={{fontSize:"0.9em"}}><Link to={`/profile/${this.props.match.params.id}/sentRequests`} style={{paddingRight:"10px"}}> {this.state.friends.sent.length} Sent </Link> </span> */}
            </div>
        :<div className="title" > Friends </div>}
               
               <div className="row content">
               {this.props.friends.list.map((user)=>( user.type ==="friend"?
     <div className="col-sm-6 " style={{margin:"10px 0px"}}>
     <div className="row" >
         <div className="col-sm-3 zero">
         <Link to={`/profile/${user.username}`}><img src={user.dpUrl || "../../../../images/avatar.jpg"} alt="" width="100%" /></Link>
         </div>
         <div className="col-sm-9"  style={{padding:"20px 10px"}}>
         <div><Link to={`/profile/${user.username}`} style={{ textTransform: "capitalize" }}>{user.fullName} </Link></div>
         <div style={{color:"gray",fontSize:"0.9em"}}>department of {user.department} {user.university} </div>
         </div>
     </div>
  
 </div>:null
               ))}
          
               </div>
               
         </div>
        );
    }
}

export default Friendscard;
