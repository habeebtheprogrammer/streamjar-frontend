import React, { Component } from 'react';
import Loading from "../loader"
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media:[],
            isLoading: true,

        }

    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getTimeline?username=${match.params.id}`).then((res)=>{
            this.setState({media:res.data.media})
        })
    }
    arrangePost(){
    var div =[];
        this.state.media.map((item)=>{
            if(item.videos) return item.videos.map((video)=>{
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${this.props.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title">{this.props.user.fullName}  uploaded a new video</div>
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
            else if (item.pictures) return item.pictures.map((image)=>{
                div.push(
                    <div className="x-post white">
                    <div className="">
                   <div> <div className="image">
                   <img src={`${this.props.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title">{this.props.user.fullName} added a new photo</div>
                   <div style={{color:"grey"}}>{moment(image.date).format("ll")} at 4:03pm</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                  <div className="content">
                {image.description}
                <div className="post-img"><img src={image.imgUrl} /></div>
                </div>
                    </div>
                    </div>
                   )
            })
        });
     return div
    }
   
    render() {
        return (
            <div className="row">
              <div className="col-sm-4">
              <Intro {...this.props}/>
              <Photos {...this.props}/>
              </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
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
        <div className="post-img"><img src={"../../images/ui.png"} /></div>
        </div>
            </div>
            </div>
              </div>
            </div>
        );
    }
}

export default Timeline;