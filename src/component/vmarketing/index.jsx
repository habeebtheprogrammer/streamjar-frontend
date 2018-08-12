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
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            online:false,
            media:[],
            user: {}
        }
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getNewsFeed`).then((res)=>{
            this.setState({media:res.data.media})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)

            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
    arrangePost(){
    var div =[];
        this.state.media.map((item)=>{
            if(item.videos) return item.videos.map((video)=>{
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${this.state.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title">{this.state.user.fullName}  uploaded a new video</div>
                   <div style={{color:"grey"}}>{moment(video.date).format("ll")} at 4:03pm</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                        <div className="content">
                    {video.description}
                    <div className="post-img">
                    <Player
                          playsInline
                            src={video.videoUrl}
                           />
                    </div>
                    </div>
                    </div>
                    </div>
                
                );
            })
        });
     return div
    }
   
    render() { 
        var me = localStorage.getItem("username")
        
        return (
            <div className="row">
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid">
            <div className="profile-tab">
                    
                    <div className="navbar " style={{marginBottom:"0px"}}>
                        <ul className="nav navbar-nav ">
                            <li className="active">
                                <Link to={`/profile/${this.state.user.username}`}>Timeline</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${this.state.user.username}/about`}>About</Link>
                            </li>
                            <li className="active">
                                <Link to={`/profile/${this.state.user.username}/friends`}>Friends</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${this.state.user.username}/media`}>Media page</Link>
                            </li>
                            {this.state.user.username === me? null:
                            <li className="active">
                                <Link to={`/chat/${this.state.user.username}`}>Message</Link>
                            </li>}
                            {this.state.user.username === me? null:
                            <li>
                                <Link to={`/call/${this.state.user.username}`} target="_blank">Call</Link>
                            </li>}
                            {this.state.user.username !== me? null:
                            <li>
                                <Link to={`/call/${this.state.user.username}`} >Create a community</Link>
                            </li>}
                        </ul>
                        <ul className="nav navbar-nav navbar-right" style={{margin:"0px"}}>
                            {this.state.online?
                            <li>
                                <Link to="#"><span className="online"><i className="fa fa-circle"></i> Online</span></Link>
                            </li>:
                             <li>
                             <Link to="#"><span className="offline"><i className="fa fa-circle"></i> Offline</span></Link>
                         </li>
                            }
                        </ul>
                    </div>
                    
                </div>
            <div className="row">
            <div className="col-sm-4">
            <Intro {...this.props} user={this.state.user}/>

            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              { this.arrangePost() }
              </div>
            </div>
            </div>
            <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 "}}>
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            <Footer />
            </div>
        
        );
    }
}

export default connect(mapStateToProps)(Home);