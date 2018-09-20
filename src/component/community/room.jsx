import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import { Player } from 'video-react';
import {Route ,Switch} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import classnames from "classnames"
import Audio from 'react-audioplayer';
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Sidebar from "../navbar/sidebar"
import Loading from "../loader"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Intro from "../extras/intro"
import Navtab from "../navbar/tab"
import Media from "./media"
import Timeline from './timeline';
import About from "./about"
import Followed from "./followed"
import Members from "./members"
import Membersrequest from './membersrequest';
import Private from "./private"
import Groupintro from "../extras/groupintro"
import Grouppost from "../extras/posttimeline"
import Shuffle from "shuffle-array"
import Title from "../forum/titlehead"
import Likebutton from "../forum/likebutton"
import Bggroup from "../extras/bggroup"

import sections from "../extras/sections"
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}


class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            group: {posts:[],creatorID:{},members:[{userID:{}}]},
            groups:[],
            empty:false,
            isLoading: true,
            images:[],
            membership:false,
            video:[],
            friends:{list:[]},
            posts:[],
            newsfeed:[]

        }
        this.arrangePost2 = this.arrangePost2.bind(this)
    }
    componentWillMount() {
        var token = localStorage.getItem("kaytoken");
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/fetchGroupById?id=${this.props.match.params.id}`).then((res) => {
            if(res.data.group){
                var {group} = res.data
                group.members.map((user)=>{
                    if(user.userID._id === this.props.auth.user.id && user.type=== "member") group.member = true;
                    else if(user.userID._id === this.props.auth.user.id && user.type=== "request") group.request = true;
                });
                this.setState({group})
            }
         else this.setState({empty:true})
        });
        axios.get(`${apiUrl}/api/fetch4Post`).then((res)=>{
            if(res.data.posts) this.setState({newsfeed:res.data.posts})
         })
        axios.get(`${apiUrl}/api/fetch5Groups`).then((res) => {
            if(res.data.groups){
                this.setState({ groups: res.data.groups });
            }
         else this.setState({empty:true})
        });
        axios.get(`${apiUrl}/api/fetchGroupPostNewsFeed?id=${this.props.match.params.id}`).then((res) => {
            if(res.data.posts){
                this.setState({ posts: res.data.posts });
             
            }
         else this.setState({empty:true})
        });
    }
    componentDidMount() {
        
    }
    arrangePost2(posts){
        var div =[];
        posts.map((item,key)=>{
          div.push(
          <div className="x-post white" >
         <Title auth={this.props.auth} post={item} />
         <div className="content" style={{borderTop:"0px",fontSize:"1em"}}>
                       <p>» <Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link> </p>
      </div>
      <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
       <Likebutton post={item} auth={this.props.auth}/>
    </div>
          </div>
        )})
     return div
    }
    render() {
        var {images,video} =this.state;
        return (
            <div className="row">
                               <Navtab socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid" style={{paddingTop:"15px"}}>
           
                <div className="row">
              <div className="col-sm-4">
            <div className="" style={{position:"fixed",width:"24%",zIndex:"1023"}}>

              <Groupintro {...this.props} group={this.state.group}/>
             </div>
              {/* <div className="x-post white" style={{marginTop:"15px"}}><Link to={`/community/${this.props.match.params.id}`}>Board</Link></div>
              <div className="x-post white" style={{marginTop:"15px"}}><Link to={`/community/${this.props.match.params.id}/members`}>Members</Link></div>
              <div className="x-post white" style={{marginTop:"15px"}}><Link to={`/community/${this.props.match.params.id}/followed_post`}>Followed post</Link></div>
         */}
              </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <Bggroup group={this.state.group} {...this.props}/>
              {/* <div className="post-img"><img src={"../../../../../images/slide4.jpg"} /></div> */}
            {/* {this.state.membership?<Grouppost {...this.props}/>:null} */}
                <Switch>
                <Route  path={`${this.props.match.url}/about`} render={(props)=><About group={this.state.group}/>} />
                <Route  path={`${this.props.match.url}/members`} render={(props)=><Members members={this.state.group.members} creatorID={this.state.group.creatorID} groupID={this.state.group._id} {...this.props}/>} />
                <Private  path={`${this.props.match.url}/membersRequest`} component={Membersrequest} group={this.state.group}/> 
                <Route  path={`${this.props.match.url}/media`} render={(props)=><Media {...this.props} /> } />
                <Route  path={`${this.props.match.url}/followed_post`} render={(props)=><Followed {...this.props} group={this.state.group} /> } />
                <Route  path={`${this.props.match.url}/post`} render={(props)=><Grouppost {...this.props} group={this.state.group} /> } />
                <Route  path="/" render={(props)=><Timeline  {...this.props} posts={this.state.posts} group={this.state.group} />} />
                </Switch>

                </div>
                </div>
                </div>
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                    {/* <Relatedusers auth={this.props.auth}/> */}
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
                <style>{`
                        .profile-pic{
                            // background: url("${this.state.group.dpUrl}");
                            background: url('${this.state.group.dpUrl || "../../../../images/avatar.jpg"}');
                             border-radius: 100%;
                             background-position: center;
                             background-size: contain;
                        }
                        .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                            font-size:1em !important
                          }
                          .video-react-big-play-button.video-react-big-play-button-left{
                            font-size:1em !important
                          }
                        `}
                            </style>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Room);