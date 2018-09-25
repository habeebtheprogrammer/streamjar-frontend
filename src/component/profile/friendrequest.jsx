import React, { Component } from 'react';
import Intro from "../extras/about"
import Photos from "../extras/photos"
import Requestsent from "../extras/requestsent"

import Friendrcard from "../extras/friendrcard"
class Friendrequest extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
          
             <div className="row" style={{paddingRight:"15px"}}>
                <Friendrcard {...this.props}/>
                <Requestsent {...this.props}/>
            </div>
        );
    }
}

export default Friendrequest;