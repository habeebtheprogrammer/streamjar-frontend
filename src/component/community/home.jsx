import React, { Component } from 'react';
import Intro from "../extras/about"
import Photos from "../extras/photos"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import Navtab from "../navbar/tab"
import Shuffle from "shuffle-array"
import classnames from "classnames"
// import Creategroup from "../extras/creategroup"
import jwt from "jsonwebtoken"
import Recentpost from "../extras/recentpost"
import sections from "../extras/sections"
import Navfooter from '../extras/navfooter';
class Room extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user: {},
            result:[],
            groups:[],
            isLoading:false,
            searching: false,
            searched:false
        }
        this.typing = this.typing.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
        this.checkgroup = this.checkgroup.bind(this)
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/fetchGroups`).then((res)=>{
           if(res.data.success){
               console.log(res.data)
            res.data.success.map((group)=>{
                group.members.map((user)=>{
                    if(user.userID === this.props.auth.user.id && user.type=== "member") group.member = true;
                    else if(user.userID === this.props.auth.user.id && user.type=== "request") group.request = true;
                });
            })
          
                this.setState({groups:res.data.success})
           }                
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
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
    
    typing(e) {
        e.preventDefault();
        this.setState({ searching: true })        
        this.setState({ [e.target.name]: e.target.value }, (state) => {
            axios.get(`${apiUrl}/api/searchGroup?name=${this.state.name}`).then((res) => {
                if (res.data.result) {
                    this.setState({ result:res.data.result})
                }
                if(res.data.result){
                    res.data.result.map((group)=>{
                        group.members.map((user)=>{
                            if(user.userID === this.props.auth.user.id && user.type=== "member") group.member = true;
                            else if(user.userID === this.props.auth.user.id && user.type=== "request") group.request = true;
                        });
                    })
                this.setState({ searching: false,searched:true,result:res.data.result })

                   } 
            });
        })
    }

    checkgroup(group){
        if(group.creatorID._id === this.props.auth.user.id || group.member)
       return null 
       else if(group.request)
       return <button type="button" className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.8em"}} disabled> Request sent</button>
       else if(group.creatorID._id !== this.props.auth.user.id && group.exists !== null)
       return <button type="button" onClick={()=>this.sendRequest(group)} className="btn btn-default btn-xs pull-right grey-color" style={{fontSize:"0.8em"}} > Join Group</button>

    }
    countmembers(members){
       var filter = members.filter((user)=>user.type === "member");
       return filter.length
    }
    render() { 
        var me = localStorage.getItem("username")
        var imglist =["img2.jpg","img3.jpg","img4.jpg"]
        return (
            <div className="row">
                          <Navtab auth={this.props.auth} socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid" style={{paddingTop:"15px"}}>
           
            <div className="row">
            <div className="col-sm-4">
            {/* <div className="row white" style={{marginBottom:"15px"}}>
                <div className="col-xs-12 zero">
                    <img src="../../images/china.jpg" width="100%" alt=""/>
                </div>
                <div className="col-xs-12 "  style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>
                <div>Advertise your business here</div>
                </div>
            </div> */}
            {/* <Intro {...this.props} user={this.state.user}/> */}
            <div className="left-grid white" >
            <Relatedusers auth={this.props.auth}/>
            </div>
            {/* <Recentpost auth={this.props.auth} /> */}
            <Navfooter />
            {/* {Shuffle(sections).slice(0,5).map((section)=>(
                <Link to={`/forum/section/${section.url}`}>
                <div className="x-post white changebg" >
                <div className="">
                <div> <div className="image">
                <img src={`${section.img}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                </div> <div className="image-text">
                <div className="title"><Link to={`/forum/section/${section.url}`}>{section.title}</Link>
                </div>
                <div style={{color:"grey"}}>{section.description}</div>
                </div>
                </div>
                <div className="clearfix"></div>
                </div>
                </div>
                </Link>
            ))} */}
            </div>
            <div className="col-sm-8 " style={{marginTop:"0px",paddingLeft:"0px"}}>
                            <div className="page-start  " >
                                <div className="row zero page-row">
                                    <div className="col-sm-12 full-grid zero ">
                                        {/* <div className="page-title" style={{ borderBottom: "none" ,marginBottom:"15px"}}>
                                            <input type="text" name="name" onChange={this.typing} placeholder="Search for Communities" className="form-control"  />
                                            {this.state.searching?<center style={{margin:"200px 0px"}}><i className="fa fa-spin fa-spinner"></i></center>:null}
                                        </div> */}
                                        <div className={classnames(this.state.searching?"row hide":"row")}>
                                            <div className="col-lg-12  zero">
                                                <div className="">
                                                        {this.state.searched ?
                                                            this.state.result.map((group, key) => (
                                                                <div className="x-post white " style={{border:"0px",borderBottom:"1px solid #e8e8e8"}} >
                                                                <div className="">
                                                               <div> <div className="image">
                                                               <img src={`../../../images/${"genu.jpg"}`} style={{width:"100%",borderRadius:"100%"}} alt="img" />
                                                               </div> <div className="image-text">
                                                               <div className="title" ><Link to={`/community/${group._id}`} style={{fontWeight:"normal"}}>{group.title}</Link>
                                                                {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}
                                                               </div>
                                                               <div style={{}}><small>{this.countmembers(group.members)} members {this.checkgroup(group)} </small></div>
                                                               
                                                               </div>
                                                               
                                                               </div>
                                                               
                                                               <div className="clearfix"></div>
                                                                </div>
                                                                </div>
                                                            ))
                                                            :
                                                    
                                                        Shuffle(this.state.groups).map((group,key) => (
 <div className="x-post white " style={{border:"0px",borderBottom:"1px solid #e8e8e8"}} >
 <div className="">
<div> <div className="image">
<img src={`../../../images/${"genu.jpg"}`} style={{width:"100%",borderRadius:"100%"}} alt="img" />
</div> <div className="image-text">
<div className="title" ><Link to={`/community/${group._id}`} style={{fontWeight:"normal"}}>{group.title}</Link>
 {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}



</div>
<div style={{}}><small>{this.countmembers(group.members)} members {this.checkgroup(group)} </small></div>

</div>

</div>

<div className="clearfix"></div>
 </div>
 </div>
            ))}
                                                            {/* <div className="col-sm-12 " style={{margin:"10px 0px",borderBottom:"1px solid #e8e8e8"}}>
                                                            <div className="row" >
                                                                <div className="col-sm-2 zero">
                                                                <Link to={`/community/${group._id}`}><img src={`../../images/img${key}.jpg`}  alt=""  width="100%" /></Link>
                                                                </div>
                                                                <div className="col-sm-10"  style={{padding:"5px 10px"}}>
                                                                <div><Link to={`/community/${group._id}`} style={{ textTransform: "capitalize" }}>{group.title} </Link></div>
                                                                <div style={{color:"gray",fontSize:"0.9em",paddingTop:"15px"}}>created by  <Link to={`/profile/${group.creatorID.username}`} > {group.creatorID._id === this.props.auth.user.id? "you":group.creatorID.fullName}</Link> </div>
                                                                <div style={{color:"gray",fontSize:"0.9em"}}> {group.creatorID.department} {group.creatorID.university}</div>
                                                                <span style={{color:"gray",fontSize:"0.9em"}}>{this.countmembers(group.members)} members </span>
                                                                {this.checkgroup(group)}
                                                                </div>
                                                              
                                                            </div>
                                                         
                                                        </div>
                                                        ))} */}


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
                    {/* <Conversation auth={this.props.auth} socket={this.props.socket}/> */}
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            </div>
            </div>
        
        );
    }
}

export default Room