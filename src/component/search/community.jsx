import React, { Component } from 'react';
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import jwt from "jsonwebtoken"
class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newgroups:[]
        }
        this.filterGroups = this.filterGroups.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
    }
    componentWillMount() {
        var {groups} = this.props;
        var newgroups = this.filterGroups(groups);
        this.setState({newgroups})
    }
    filterGroups(groups){
        console.log(groups,this.props.auth)
            groups.map((group)=>{
            group.members.map((user)=>{console.log(group,user)
                if(user.userID === this.props.auth.user.id && user.type=== "member") group.member = true;
                else if(user.userID === this.props.auth.user.id && user.type=== "request") group.request = true;
            });
        })
        console.log(groups)

        return groups
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
        if(group.creatorID._id === this.props.auth.user.id || group.member)
       return null 
       else if(group.request)
       return <button type="button" className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.9em"}} disabled> Request sent</button>
       else if(group.creatorID._id !== this.props.auth.user.id && group.exists !== null)
       return <button type="button" onClick={()=>this.sendRequest(group)} className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.9em"}}> Join Group</button>

    }
    countmembers(members){
       var filter = members.filter((user)=>user.type === "member");
       return filter.length
    }
   
    render() {
        console.log(this.state)
        return (
            <div className="row">
                    {
                    this.state.newgroups.map((group,key) => (
                    <div className="x-post white " style={{border:"0px",borderBottom:"1px solid #e8e8e8"}} >
                    <div className="">
                    <div> <div className="image">
                    <img src={`../../../images/${"genu.jpg"}`} style={{width:"100%",borderRadius:"100%"}} alt="img" />
                    </div> <div className="image-text">
                    <div className="title" ><Link to={`/community/${group._id}`} style={{fontWeight:"normal"}}>{group.title}</Link>
                    </div>
                    <div style={{}}><small>{this.countmembers(group.members)} members {this.checkgroup(group)}</small> </div>
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

export default Community