import React, { Component } from 'react';
import Loading from "../loader"
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import Posttimeline from "../extras/posttimeline"
class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post:{content:[]},
            isLoading: true,

        }
        this.arrangePost = this.arrangePost.bind(this)

    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getTimeline?username=${match.params.id}`).then((res)=>{
            console.log(res.data.post)
            this.setState({post:res.data.post});
        })
    }
  
    arrangePost(){
    var sorted= this.state.post.content.sort((a,b)=> moment(b.date).diff(a.date))
    var div =[];
        sorted.map((item)=>{
            if(item.type==="video") 
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${this.props.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title">{this.props.user.fullName}  uploaded a new video</div>
                   <div style={{color:"grey"}}>{moment(item.date).calendar()}</div>
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
                   <img src={`${this.props.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title">{this.props.user.fullName} added a new photo</div>
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
              <div className="col-sm-4">
              <Intro {...this.props}/>
              <Photos {...this.props} />
              <div className="row white">
                <div className="col-xs-12 zero">
                    <img src="../../images/img.jpg" width="100%" alt=""/>
                </div>
                
                <div className="col-xs-12 "  style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>
                <div>Advertise your business on KampusKonnect</div>
                    
                </div>
                
            </div>
             
    
              </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
             {this.props.user.username === me? <Posttimeline {...this.props}/> :null}
              { this.arrangePost() }
              <div className="x-post white">
            <div className="">
           <div> <div className="image">
           <img src={`${this.props.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
           </div> <div className="image-text">
           <div className="title">{this.props.user.fullName} joins campus connect</div>
           <div style={{color:"grey"}}>{moment(this.props.user.date).format("ll")} at 4:03pm</div>
           </div>
           
           </div>

          <div className="clearfix"></div>
          <div className="content">
        <div className="post-img"><img src={"../../images/banner2.jpg"} /></div>
        </div>
            </div>
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
                  `}
              </style>
            </div>
        );
    }
}

export default Timeline;