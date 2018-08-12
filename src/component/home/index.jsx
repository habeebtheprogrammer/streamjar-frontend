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
            posts:[],
            user: {}
        }
        this.arrangePost = this.arrangePost.bind(this)
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getNewsFeed`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
    arrangePost(posts){
    var sorted= posts.content.sort((a,b)=> moment(b.date).diff(a.date))
        var div =[];
        sorted.map((item)=>{
            if(item.type==="video") 
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${posts.userID.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title"><Link to={`/profile/${posts.userID.username}`}>{posts.userID.fullName}</Link>  uploaded a new video</div>
                   <div style={{color:"grey"}}>{moment(item.date).calendar()} }</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                        <div className="content">
                    {item.description}
                    <div className="post-img">
                    <Player
                          playsInline
                            src={item.videoUrl}
                           />
                    </div>
                    </div>
                    </div>
                    </div>
                
            )
            else if (item.type==="image")
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${posts.userID.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title"><Link to={`/profile/${posts.userID.username}`}>{posts.userID.fullName}</Link> added a new photo</div>
                   <div style={{color:"grey"}}>{moment(item.date).calendar()}</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                  <div className="content">
                {item.description}
                <div className="post-img"><img src={item.imgUrl} /></div>
                </div>
                    </div>
                    </div>
                   )
        });
     return div
    }
   
    render() { 
        var me = localStorage.getItem("username")
        
        return (
            <div className="row">
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid">
            <Navtab user={this.state.user} socket={this.props.socket}/>
           
            <div className="row">
            <div className="col-sm-4">
            <Intro {...this.props} user={this.state.user}/>

            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              { 
                  this.state.posts.map((post)=>(
                    this.arrangePost(post) 
                  ))
                }
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