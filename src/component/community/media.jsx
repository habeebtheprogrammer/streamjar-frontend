import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photocard from '../extras/photocard';
import { Player } from "video-react"
import Videocard from '../extras/videocard';
class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[],
            video:[]
        }
    }
    componentWillMount() {
 
    }
    render() {
        return (
            <div className="row">
             <div className="col-sm-4">
             {/* <Photos profile={this.props.user}/> */}
             {/* <Intro user={this.props.user} {...this.props}/> */}

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <div className="photocard white">
               <div className="title"> Videos 
               </div>
           <div className="content">
           
           <div className="row">
           {this.props.videos.map((video)=>(
            <div className="col-sm-4" style={{padding:"10px"}}>
            
            <Player
                                                            playsInline
                                                            // poster="/assets/poster.png"
                                                            src={video.videoUrl}
                                                        />
                </div>
           ))}
           </div>
           
           
           </div>
   
            </div>
                 
            <div className="photocard white">
               <div className="title">  Photos 
             
               </div>
           <div className="content">
           
           <div className="row">
           {this.props.images.map((image)=>(
            <div className="col-sm-4" style={{padding:"10px"}}>
            <img src={image.imgUrl} width="100%" class="img-responsive" alt="Image" />
                </div>
           ))}
           </div>
           
           
           </div>

              </div>
            </div>
            </div>
            
        );
    }
}

export default Photos;