import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import FileUpload from "react-fileupload"
import classnames from "classnames"
import axios from "axios"
import { Player } from 'video-react';

class Videocard extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    render() {
        return (
            
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
           
                        <style>{`
                        
                            .video-react-big-play-button.video-react-big-play-button-left{
                               font-size:1em    
        
                            }

            `}</style>
            </div>
        );
    }
}

export default Videocard;
