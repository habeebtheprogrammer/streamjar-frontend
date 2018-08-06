import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import Friendscard from "../extras/friendscard"
class About extends Component {
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
                <Friendscard user={this.props.user}/>
              </div>
            </div>
        );
    }
}

export default About;