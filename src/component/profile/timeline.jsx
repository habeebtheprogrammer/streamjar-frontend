import React, { Component } from 'react';
import Loading from "../loader"
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import moment from "moment"
class Timeline extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
              <div className="col-sm-4">
              <Intro profile={this.props.user}/>
              <Photos profile={this.props.user}/>
              </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <div className="x-post white">
              <div className="">
             <div> <div className="image">
             <img src={`${this.props.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
             </div> <div className="image-text">
             <div className="title">{this.props.user.fullName}  has just Joined!</div>
             <div style={{color:"grey"}}>{moment(this.props.user.date).format("ll")} at 4:03pm</div>
             </div>
             
             </div>

            <div className="clearfix"></div>
            <div className="content">
           <q>Change your life today. Don't gamble on the future, act now, without delay.</q> - Quote of the day
            <div className="post-img"><img src="../images/bg.jpg" width="100%"/></div>
            </div>
              </div>
              </div>
              </div>
            </div>
        );
    }
}

export default Timeline;