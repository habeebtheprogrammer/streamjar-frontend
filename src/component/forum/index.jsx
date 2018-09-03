import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import { connect } from "react-redux"
import { Link , Switch, Route} from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import $ from "jquery"
import Comments from "../extras/comments"
import Navtab from "../navbar/tab"
import Section from "./sections"
import Page from "./page"
import Poststory from "./post"
import Frontpage from "./frontpage"
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
            user: {},
            description:""
        }
        this.arrangePost = this.arrangePost.bind(this)
     
    }
    componentWillMount() {
       
        var {match} = this.props
        axios.get(`${apiUrl}/api/getSectionFpFeeds`).then((res)=>{
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
        var div =[];
        posts.map((item)=>{
            if(item.type==="video") 
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${item.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title"><Link to={`/profile/${item.username}`}>{item.fullName}</Link>  uploaded a new video</div>
                   <div style={{color:"grey"}}>{moment(item.date).calendar()} </div>
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
                   <img src={`${item.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title"><Link to={`/profile/${item.username}`}>{item.fullName}</Link> added a new photo</div>
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
                   else 
                   div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${item.userID.dpUrl ||"../../images/genu.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title"><Link to={`/profile/${item.userID.username}`}>{item.userID.fullName}</Link>
                    {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}
                   
                   
                  <span className="pull-right" style={{cursor:"pointer"}}>
                   <i className="fa fa-circle-o" style={{color:"grey",fontSize:"0.6em"}}></i> <i className="fa fa-circle-o" style={{color:"grey",fontSize:"0.6em"}} ></i>   <i className="fa fa-circle-o" style={{color:"grey",fontSize:"0.6em"}}></i>
                    </span>
                   
                   </div>
                   <div style={{color:"grey"}}>{moment(item.date).calendar()}</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                  <div className="content">
                  <p><b>{item.title}</b></p>
                {item.description}
                {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
                </div>
              
                
                    </div>
                  <Comments item={item} auth={this.props.auth} />
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
           
           <div className="row">
           <div className="col-sm-12 zero">
            <Navtab socket={this.props.socket} match={this.props.match}/>
                
            </div>
           </div>
           
            {/* <div className="row">
            
            <div className="col-sm-12 zero">
            <Navtab socket={this.props.socket} match={this.props.match}/>
                
            </div>
            
            <div className="col-sm-4">
            
            <Intro {...this.props} user={this.state.user}/>
            <div className="white ads">
            <Player
                          playsInline
                            src={"../../video/scott.mp4"}
                           />
                <div   style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>Advertise your business here</div>
            </div>

            <div className="row white" style={{marginTop:"15px"}}>
                <div className="col-xs-12 zero">
                    <img src="../../images/img.jpg" width="100%" alt=""/>
                </div>
                
                <div className="col-xs-12 "  style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>
                <div>Advertise your business here</div>
                    
                </div>
                
            </div>
             
            
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}> */}
            <Switch>
                <Route exact path={`${this.props.match.url}/section`} render={(props)=><Section {...this.props} current={props.match}/> } />
                <Route path={`${this.props.match.url}/section/post`} render={(props)=><Poststory {...this.props} /> } />
                <Route path={`${this.props.match.url}/section/:id`} render={(props)=><Page {...this.props} current={props.match}/> } />
                <Route  path="/" render={(props)=><Frontpage  {...this.props} />} />
            </Switch>
                    {/* {this.arrangePost(this.state.posts) } */}
              
              {/* </div>
            </div> */}
            </div>
            <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            <Footer />
            <style>
                  {`
                  .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                    font-size:2em !important
                  }
                  .video-react-big-play-button.video-react-big-play-button-left{
                    font-size:2em !important;
                  }
                  .ads .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                    font-size:1em !important
                  }
                  .ads .video-react-big-play-button.video-react-big-play-button-left{
                    font-size:1em !important;
                  }
                  `}
              </style>
            </div>
        
        );
    }
}

export default connect(mapStateToProps)(Home);