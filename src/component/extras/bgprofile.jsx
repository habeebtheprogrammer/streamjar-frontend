import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Profiletab from "../navbar/profiletab"
import Uploaddp from "./uploaddp"
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
        this.sendRequest=this.sendRequest.bind(this)
        this.action=this.action.bind(this)
    }
sendRequest(){
    var {user} = this.props
    var {id,username} = this.props.auth.user;
    var data = {...this.props.auth.user,rUsername:user.username, rID:user._id}
    var token = jwt.sign(data,"o1l2a3m4i5d6e");
    axios.post(`${apiUrl}/api/sendFriendRequest`,{token:token}).then((res)=>{
        if(res.data.success){
            window.location.reload();
        }
    })
}
cuttext(text,maxlength){
    if(text.length > maxlength){
        var newtext = text.slice(0,maxlength);
        newtext += "..."
        return newtext
    }else return text
}
action(member){
    if(member.type==="friend"||member.type==="me") null;
    else if(member.type==="sent")
   return  <button disabled className="btn btn-xs grey-color btn-default pull-right" style={{color:"black"}}><b>
   <i className="fa fa-user"></i> sent </b></button>
    else if(member.type==="request")return <button type="button" className="btn grey-color  btn-default btn-xs pull-right" onClick={()=>this.accept(member)} style={{color:"black"}}><i className="fa fa-user"></i>  Accept</button>        
    else return  <button type="button" onClick={()=>this.sendRequest()} className="btn btn-xs pull-right" style={{color:"black"}}><i className="fa fa-user"></i>  Add friend</button>;
}
    render() {
        console.log(this.props.userStatus)
        var imglist = ["slide4.jpg", "bg.jpg", "banner2.jpg", "china.jpg"]
        var me = localStorage.getItem("username")
        return (
                   <div className="row" style={{ border:"1px solid #e8e8e8 "}}>
                <div className="col-sm-12" style={{paddingLeft:"0px"}}>
                <div className="profile-bg" style={{background:`url('../../images/${imglist[3]}')`,backgroundPosition:"bottom"}}>
                 <div className="row profile-img">
                 <div className="col-sm-2 zero dpbox" style={{border:"1px solid lightgrey"}}>
                 <img src={`${this.props.user.dpUrl ||'../../../../images/avatar.jpg'}`} width="100%" alt="" />
                 {this.props.userStatus.type==="me"?
                 <Uploaddp auth={this.props.auth} />:null}
                 </div>
                 <div className="col-sm-9 ">
                 <div className="profile-name" style={{ textTransform: "capitalize",marginTop:"10px"}}>
                 <small>{this.props.user.username}</small>
                 <br />
                 <span> {this.cuttext(this.props.user.status||"",50)}</span>
               {this.action(this.props.userStatus)}
               
                 </div>
                 </div>
                    </div>
                    </div>
           <Profiletab user={this.props.user} socket={this.props.socket}/>
             
                </div>
           
              </div>
        );
    }
}

export default Bgprofile;
