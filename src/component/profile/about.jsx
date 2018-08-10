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
             <Photos user={this.props.user} {...this.props}/>
             <Intro user={this.props.user} {...this.props}/>

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                <Aboutcard user={this.props.user} {...this.props}/>
              </div>
            </div>
        );
    }
}

export default About;