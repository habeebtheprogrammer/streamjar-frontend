import React, { Component } from 'react';
import Loading from "../loader"
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import moment from "moment"
import Aboutcard from "../extras/aboutcard"
class About extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
             <div className="col-sm-4">
             {/* <Photos {...this.props}/>
             <Intro {...this.props}/> */}

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <div className="aboutcard white">
            <div className="title" >  About me </div>
               
               <div className="row content">
                   <div className="col-sm-4 zero left-content">
                       <div style={{color:"black"}}> Overview</div>
                       <div > Target audience</div>
                       {/* <div> Places his lived</div> */}
                       {/* <div> Basic Contact</div> */}
                       <div> Life Event</div>
                   </div>
                   <div className="col-sm-8 zero right-content">
                   <div>
                  <i className="fa fa-graduation-cap"></i> created by {this.props.group.creatorID.fullName} 
                      </div> 
                       </div>
               </div>
               
         </div>
              </div>
            </div>
        );
    }
}

export default About;