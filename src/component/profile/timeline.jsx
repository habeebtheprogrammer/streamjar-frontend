import React, { Component } from 'react';
import Loading from "../loader"
import Intro from "../extras/about"
import Photos from "../extras/photos"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import Posttimeline from "../extras/posttimeline"
import {Link} from "react-router-dom"
import Comments from "../extras/forumcomment"
import Title from "../forum/titlehead"
import Recentpost from "../extras/recentpost"
import Bgprofile from "../extras/bgprofile"

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            isLoading: true,

        }
        this.arrangePost = this.arrangePost.bind(this)

    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getTimeline?username=${match.params.id}`).then((res)=>{
            console.log(res.data.post)
            this.setState({posts:res.data.posts});
        })
    }
  
    arrangePost(){
    var sorted= this.state.posts
    var div =[];
        sorted.map((item)=>{
                div.push(
                <div className="x-post white" style={{marginBottom:"15px"}}>
                <Title post={item} auth={this.props.auth}/>
              
              <div className="content">
              <p><Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link> </p>
              {/* <p><b>{item.title}</b></p> */}
                   {item.description}
                {item.type==="video"?
                  <div className="post-img">
                  <Player
                        playsInline
                          src={item.videoUrl}
                         />
                  </div>:null}
                {item.type==="image"?
                <div className="post-img"><img src={item.imgUrl} /></div>
                :null}
          
            
                </div>
              <Comments item={item} auth={this.props.auth} match={{params:{}}}/>
                </div>
                
               )
        });
     return div
    }
   
    render() {
        var me = localStorage.getItem("username")
        return (
            <div className="row">
            
              <div className="col-sm-12" style={{paddingLeft:"0px"}}>
              {/* <img src="../../images/slide1.jpg" width="100%" alt=""/> */}
              {/* <Bgprofile user={this.props.auth.user} socket={this.props.socket}/> */}

             {/* {this.props.user.username === me? <Posttimeline {...this.props}/> :null} */}
              { this.arrangePost() }
          
              </div>
              <style>
                  {`
                  .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                    font-size:2em !important
                  }
                  .video-react-big-play-button.video-react-big-play-button-left{
                    font-size:2em !important;
                  }
                  `}
              </style>
            </div>
        );
    }
}

export default Timeline;