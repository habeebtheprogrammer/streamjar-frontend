import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Profiletab from "../navbar/profiletab"
import classnames from "classnames"
import jwt from "jsonwebtoken"

class Bgprofile extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            online:false,
            friends:{friends:[]}

        }
        this.checkgroup = this.checkgroup.bind(this)
        this.countmembers = this.countmembers.bind(this)
        this.sendRequest = this.sendRequest.bind(this)

    }
componentWillMount() {
   
}
sendRequest(group){
    var {id,username} = this.props.auth.user;
    var data = {userID: this.props.auth.user.id, groupID:group._id}
    var token = jwt.sign(data,"o1l2a3m4i5d6e");
    axios.post(`${apiUrl}/api/sendGroupRequest`,{token:token}).then((res)=>{
        if(res.data.success){
            window.location.reload();
        }
    })
}
checkgroup(group){
    if(group.member) return <button type="button" className="btn danger pull-right btn-sm" style={{color:"black"}} > {group.members.length} members</button> 
   else if(group.request)
   return <button type="button" className="btn danger pull-right btn-sm" style={{color:"black"}} disabled> Request sent</button>
   else if(group.creatorID._id !== this.props.auth.user.id && group.exists !== null)
   return <button type="button" onClick={()=>this.sendRequest(group)} className="btn danger pull-right btn-sm" style={{color:"black"}}> Join Group</button>
   else return null
}
countmembers(members){
   var filter = members.filter((user)=>user.type === "member");
   return filter.length
}
    render() {
        var imglist = ["slide4.jpg", "bg.jpg", "banner2.jpg", "china.jpg"]
        var me = localStorage.getItem("username")
        return (
                   <div className="row" style={{ border:"1px solid #e8e8e8 "}}>
                <div className="col-sm-12 zero">
                <div className="profile-bg" style={{background:`url('../../images/${imglist[3]}')`,backgroundPosition:"bottom"}}>
                 <div className="row profile-img">
                 <div className="col-sm-2 zero" style={{border:"1px solid lightgrey"}}>
                 <img src={`../../../../images/avatar.jpg`} width="110px" alt="" />

                 </div>
                 <div className="col-sm-9 ">
                 <p className="profile-name" style={{ textTransform: "capitalize",marginTop:"25px"}}>
                {this.checkgroup(this.props.group)}
                 </p>
                 </div>
                    </div>
                    </div>
                    <div className="profile-tab" >
                    <div className="navbar " style={{marginBottom:"0px"}}>
                        
                        <ul className="nav navbar-nav">
                            <li >
                                <Link to={`/community/${this.props.match.params.id}`}>Board</Link>
                            </li>
                            <li>
                                <Link to={`/community/${this.props.match.params.id}/members`}>Members</Link>
                            </li>
                            <li >
                                <Link to={`/community/${this.props.match.params.id}/followed_post`}>Followed post</Link>
                            </li>
                            {this.props.group.member?
                            <li >
                                <Link to={`/community/${this.props.match.params.id}/post`}>Post</Link>
                            </li>:null}
                        </ul>
                    </div>
                    
                </div>   
                </div>
           
              </div>
        );
    }
}

export default Bgprofile;
