import React, { Component } from 'react';
import Intro from "../extras/intro"
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
import Creategroup from "../extras/creategroup"
import jwt from "jsonwebtoken"
import Recentpost from "../extras/recentpost"
import sections from "../extras/sections"
import Title from "./titlehead"
import Navfooter from '../extras/navfooter';
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Room extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user: {},
            result:[],
            posts:[],
            isLoading:false,
            searching: false,
            searched:false
        }
        this.typing = this.typing.bind(this)
    }
    componentWillMount() {
        axios.get(`${apiUrl}/api/getSectionFpFeeds`).then((res)=>{
            this.setState({posts:res.data.posts})
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

    render() { 
        var me = localStorage.getItem("username")
        var imglist =["img2.jpg","img3.jpg","img4.jpg"]
        return (
            <div className="row">
            <div className="col-sm-4">
            <div className="" style={{position:"fixed",width:"24%",zIndex:"1023"}}>
              
            <div className="wildcard white">
               <div >
          <p> <Link to="/marketplace/post"><b> <i className="fa fa-pencil"></i> Post an item </b>  </Link> </p>
          <p> <Link to="/marketplace/post"><b> <i className="fa fa-list-ol"></i> Category </b>  </Link> </p>
            </div>
            </div>
            {/* <Recentpost auth={this.props.auth} /> */}
            <Relatedusers  auth={this.props.auth} />
            <Navfooter />
         
            </div>
            </div>
            <div className="col-sm-8 " style={{marginTop:"0px",paddingLeft:"0px"}}>
                            <div className="page-start  " >
                                <div className="row zero page-row">
                                    <div className="col-sm-12 full-grid zero ">
                                        
                                        <div className={classnames(this.state.searching?"row hide":"row")}>
                                            <div className="col-lg-12  zero">
                                                <div className="">
                                                        {this.state.searched ?
                                                            this.state.result.map((group, key) => (
                                                                <div className="x-post white " style={{border:"0px",borderBottom:"1px solid #e8e8e8"}} >
                                                                <div className="">
                                                               <div> <div className="image">
                                                               <img src={`../../../images/${"Lk1zkopiZ0WvMEp.jpg"}`} style={{width:"100%"}} alt="img" />
                                                               </div> <div className="image-text">
                                                               <div className="title" ><Link to={`/community/${group._id}`} style={{fontWeight:"normal"}}>{group.title}</Link>
                                                                {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}
                                                               </div>
                                                               <div style={{}}><small>{this.countmembers(group.members)} members </small>
                                                               <button type="button" className="btn btn-default btn-xs pull-right grey-color" style={{color:"grey"}}> Buy</button>
                                                               </div>
                                                               
                                                               </div>
                                                               
                                                               </div>
                                                               
                                                               <div className="clearfix"></div>
                                                                </div>
                                                                </div>
                                                            ))
                                                            :
                                                    
                                                        Shuffle(this.state.posts).map((post,key) => (
                                                            <div className="x-post  white" style={{borderTop:"0px",marginBottom:"15px"}}>
                                                            <Title auth={this.props.auth} post={post} />
                                                            <div className="content zero" style={{borderTop:"0px",padding:"0px"}}>
                                                            
                                                            <div className="row">
                                                                <div className="col-sm-2 ">
                                                            <img src="../../../../images/TxQXfke9uDjp32b.jpg" className="img-responsive" width="100px" alt="Image" /> 
                                                                    
                                                                </div>
                                                                <div className="col-sm-10 ">
                                                    <p><Link to={`/forum/section/${post.section}/${post._id}`}><b>{post.title}</b></Link></p>
                                                   {/* <p className="grey-color" style={{fontSize:"0.95em"}}> Today makes it 4 days before the Launch Ceremony for some of our Software Developers completing the fellowship. 🚀
                                                        👨🏽‍💻
                                                  </p> */}
                                                    <p><span  className="pull-"><b>₦54,343</b></span></p>
                                                    <p> 
                                                    <span className="grey-color" style={{marginRight:"15px"}}> <i className="fa fa-comments-o"></i> <small>433</small> </span>
                                                    <span className="grey-color"> <i className="fa fa-thumbs-o-up"></i> <small>423</small> </span>
                                                    </p>
                                                                </div>
                                                            </div>
                                                            
                                                            
                                                            
                                                         </div>
                                                         <div style={{borderTop:"1px solid #e8e8e8",padding:"10px"}}>
                                                             <button className="btn btn-default btn-sm grey-color"><i className="fa fa-user-md"></i> Contact Seller</button>
                                                             <button className="btn btn-default btn-sm grey-color pull-right"><i className="fa fa-reply"></i>  Share</button>
                                                             
                                                             <div className="clearfix">
                                                             
                                                             </div>
                                                             
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
        
        );
    }
}

export default  connect(mapStateToProps)(Room)