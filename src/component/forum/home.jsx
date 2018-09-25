import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import NfComment from "../extras/newsfeedcomment"
import Title from "./newsfeedhead"
import Likebutton from "./likebutton"
import { connect } from "react-redux"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Trendingwidget from "../extras/trending"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Navtab from "../navbar/tab"
import Navfooter from '../extras/navfooter';


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
            description:"",
            posts:[]
        }
        this.arrangePost2= this.arrangePost2.bind(this)
        this.arrangePost= this.arrangePost.bind(this)
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getNewsfeed`).then((res)=>{console.log(res.data)
           if(res.data.posts) this.setState({posts:res.data.posts})
        })
    }
    
    arrangePost2(posts){
        var div =[];
        posts.map((item,key)=>{
          div.push(
          <div className="x-post white" >
         <Title auth={this.props.auth} post={item} />
         <div className="content" style={{borderTop:"0px"}}>
                       <p>» <Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link> </p>
      </div>
      <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
       <Likebutton post={item} auth={this.props.auth}/>
    </div>
          </div>
        )})
     return div
    }
    arrangePost(posts){
        var img = ["cropper.jpg","town.jpg","china.jpg","bg.jpg","banner2.jpg","4.jpg","slide3.jpg","slide4.jpg"]
        var div =[];
        posts.map((post,key)=>{
                   div.push( 
                   <div className="x-post white" style={{marginBottom:"15px"}}>
                   <Title post={post} auth={this.props.auth}/>
                <div className="content">
                {this.cuttext(post.description,200,post.section,post._id)}
              {1===1?<div className="post-img"><img src={`../../../../../images/${img[key]}`} /></div>:null}
              </div>
              <NfComment item={post} auth={this.props.auth} match={this.props.match}/>
                  </div>
                     
                    )
        });
     return div
    }
    cuttext(text,maxlength,section,id){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to={`/forum/section/${section}/${id}`} style={{color:"black",fontWeight:"bold"}}><small>Continue</small></Link></div>
        }else return text
    }
    render() { 
        var {posts} = this.state
        return (
            <div className="row">
            <Navtab socket={this.props.socket} auth={this.props.auth} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                
            <Sidebar socket={this.props.socket} match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid" style={{paddingTop:"15px"}}>
           
            <div className="row" >
            <div className="col-sm-4">
            <div className="" style={{position:"fixed",width:"24%",zIndex:"10"}}>
            {/* <img src="../../../../images/ads1.png" width="100%" /> */}
            {/* {this.arrangePost2(this.state.posts.slice(0,1))} */}
            
            {/* <div className="left-grid white" >
            <Trendingwidget auth={this.props.auth}/>
            </div> */}
             {/* <div className="wildcard white">
               <div >
           <Link to="/forum/post"> <b>Post a story</b>  </Link>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
            </div> */}
          <div className="left-grid white" >
            <Relatedusers auth={this.props.auth}/>
            </div>
           <Navfooter />
            {/* <div className=" white" style={{marginTop:"15px"}}>
           
            <img src="../../../../images/rtc.jpg" width="100%" />
            <small>advertise your business here</small>
            </div> */}
            </div>
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
            <div className="" >
            {this.arrangePost(posts)}
            </div>
            </div>
        </div>

          </div>
            <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                    {/* <Conversation auth={this.props.auth} socket={this.props.socket}/> */}
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
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
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);