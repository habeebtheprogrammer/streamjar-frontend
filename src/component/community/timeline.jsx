import React, { Component } from 'react';
import Loading from "../loader"
import Groupintro from "../extras/groupintro"
import Photos from "../extras/photos"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import Grouppost from "./grouppost"
class Grouptimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post:{content:[]},
            isLoading: true,

        }
        this.arrangePost = this.arrangePost.bind(this)
    }
    componentWillMount() {
      
    }
  
    arrangePost(){
    var sorted= this.props.group.posts.sort((a,b)=> moment(b.date).diff(a.date))
    var div =[];
        sorted.map((item)=>{
            if(item.type==="video") 
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${this.props.group.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
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
                   <div style={{color:"grey"}}>{moment(item.date).calendar('ll')}</div>
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
              <Groupintro {...this.props}/>
              {/* <Photos {...this.props} /> */}
  
            <div className="white">
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
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <Grouppost {...this.props}/>
              { this.arrangePost() }
              <div className="x-post white">
            <div className="">
           <div> <div className="image">
           <img src={`${this.props.group.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
           </div> <div className="image-text">
           <div className="title">{this.props.group.title} was created</div>
           <div style={{color:"grey"}}>{moment(this.props.group.date).format("ll")} at 4:03pm</div>
           </div>
           
           </div>

          <div className="clearfix"></div>
          <div className="content">
        <div className="post-img"><img src={"../../images/town.jpg"} /></div>
        </div>
            </div>
            </div>
              </div>
              <style>
                  {`
                  .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                    font-size:1em !important
                  }
                  .video-react-big-play-button.video-react-big-play-button-left{
                    font-size:1em !important
                  }
                  `}
              </style>
            </div>
        );
    }
}

export default Grouptimeline;