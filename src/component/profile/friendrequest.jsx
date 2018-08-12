import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import Requestsent from "../extras/requestsent"

import Friendrcard from "../extras/friendrcard"
class Friendrequest extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
             <div className="col-sm-4">
             <Intro user={this.props.user} {...this.props}/>
             <Photos user={this.props.user} {...this.props}/>

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                <Friendrcard user={this.props.user} {...this.props}/>
                <Requestsent user={this.props.user} {...this.props}/>
              </div>
            </div>
        );
    }
}

export default Friendrequest;