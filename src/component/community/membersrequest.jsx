import React, { Component } from 'react';
import Intro from "../extras/about"
import Photos from "../extras/photos"
import Requestsent from "../extras/requestsent"

import Membersrequest from "../extras/friendrcard"
class Friendrequest extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
             <div className="col-sm-4">
             {/* <Intro {...this.props}/>
             <Photos {...this.props}/> */}

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                {/* <Friendrcard {...this.props}/> */}
                {/* <Requestsent {...this.props}/> */}
              </div>
            </div>
        );
    }
}

export default Membersrequest;