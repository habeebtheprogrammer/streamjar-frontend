import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
import { Player } from 'video-react';
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import classnames from "classnames"
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Shuffle from "shuffle-array"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Bgchat from "../extras/bgchat"
import jwt from "jsonwebtoken"
import Intro from "../extras/about"
import Recentpost from "../extras/recentpost"
import Creatable from "./select"
import Navtab from '../navbar/tab';
import Navfooter from '../extras/navfooter';
import Thread from "./thread"
import Community from "./community"
import Users from "./users"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            result: {users:[],groups:[],threads:[],groups:[]},
           friends:{list:[]},
            isLoading:false,
            searching: true,
            gender:"",

        }
        this.typing = this.typing.bind(this)
        this.applyFilter = this.applyFilter.bind(this)
        this.check = this.check.bind(this)
    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        var friends =[];
        axios.get(`${apiUrl}/api/getFriends?username=${this.props.auth.user.username}`).then((res1)=>{
            if(res1.data.friends)
             friends =res1.data.friends
             axios.get(`${apiUrl}/api/search${window.location.search}`).then((res) => {
                if(res.data.result && friends.username && res.data.type==="users"){
                var {result} = res.data
                this.setState({searching:false,result:{...this.state.result,users:result.users},friends})
            }
            else if(res.data.result && res.data.type==="thread"){
                var {result} = res.data
                this.setState({searching:false,result:{...this.state.result,threads:result.threads}})
            }
            else if(res.data.result && res.data.type==="community"){
                var {result} = res.data
                this.setState({searching:false,result:{...this.state.result,groups:result.groups}})
            }
            });
         })
            var url = new URL(window.location.href)
            var query = new URLSearchParams(url.search)
            var string = query.get("query")
         
    }
   
    applyFilter(e){
        e.preventDefault();
        var url = new URL(window.location.href)
            var query = new URLSearchParams(url.search)
            var a = query.get("a");
            var b = query.get("b");
            var c = query.get("c");
            var queries = a?`a=${a}`:""+b?`&b=${b}`:""+c?`&c=${c}`:""
            var type = query.get("type");
            var gender = this.state.gender
            window.location.assign(`/search?${queries}&type=${type}&gender=${gender}`)
    }
    typing(e){
        this.setState({[e.target.name]:e.target.value})
    }
    check(result){
        if(result.users.length) return <Users auth={this.props.auth} users={this.state.result.users} friends={this.state.friends}/>
        else if(result.threads.length) return <Thread auth={this.props.auth} posts={this.state.result.threads}/>
        else if(result.groups.length) return <Community auth={this.props.auth} groups={this.state.result.groups}/>
    }
    render() {
        var searchSelector =window.localStorage.getItem("searchSelector")
        var imglist =["john.jpg","sonu.jpg","genu.jpg","govinda.jpg"]
        return (
            <div className="row">
                <Navtab auth={this.props.auth} socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
            <Sidebar match={this.props.match}/>
            <div className="col-sm-9 x-right-grid" >
          <div className="white" style={{margin:"5px 0px 15px"}}>
         {searchSelector === "people"?
          <form onSubmit={this.applyFilter}>
           <ul className="nav navbar-nav navbar-right zero filter" style={{fontSize:"0.9em"}}>
                 <li className="">
                 <input placeholder="Location" style={{border:"0px",marginTop:"10px"}}/>
                 </li>
                 <li>
                 <input placeholder="Work" style={{border:"0px",marginTop:"10px"}}/>
                 </li>
                 <li className="">
                 <input placeholder="School" style={{border:"0px",marginTop:"10px"}}/>
                 </li>
                 <li>
                 <select name="gender" onChange={this.typing} id="input" style={{border:"0px",marginTop:"1px"}} className="form-control white grey-color" >
                     <option value="">Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                 </select>
                 </li>
                 <li className="">
                    <button className="btn btn-default" type="submit">
                    Search
                    </button>
                 </li>
             </ul>
            </form>:null}
             <div className="clearfix">
             
             </div>
             </div>
                    <div className="row zero ">
                    <div className="col-sm-4">
                    {/* <div className="white x-post" style={{marginBottom:"15px",fontSize:"0.9em"}}>
                        Send a broadcast
                        
                        <i className="fa fa-bullhorn pull-right"></i>
                        
                    </div> */}
            <Recentpost auth={this.props.auth} />
            <Navfooter />
            
            </div>
                        <div className="col-sm-8 "  style={{paddingLeft:"0px"}}>
                            <div className="page-start  ">
                                <div className="row zero page-row">
                                    {/* <div className=" col-sm-3 zero left-grid hidden-xs ">
                                     <Relatedusers auth={this.props.auth}/>
                                    </div> */}

                                    <div className="col-sm-12 full-grid zero ">
                                        {/* <div className="page-title" style={{ borderBottom: "none",marginBottom:"15px" }}>
                                            <input type="text" name="name" onChange={this.typing} placeholder="Who/what are you looking for?" className="form-control"  />
                                            
                                            {this.state.searching?<center style={{margin:"200px 0px"}}><i className="fa fa-spin fa-spinner"></i></center>:null}
                                            
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 zero">
                                                <div className="">
                                                {this.state.searching?null:
                                                       this.check(this.state.result)
                                                }
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

export default connect(mapStateToProps, matchDispatchToProps)(Search);