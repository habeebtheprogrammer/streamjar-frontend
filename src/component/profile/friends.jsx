import React, { Component } from 'react';
import Intro from "../extras/about"
import Photos from "../extras/photos"
import Friendscard from "../extras/friendscard"
import Requestsent from "../extras/requestsent"
class Friends extends Component {
    constructor(props) {
        super(props);

    }
    render() { console.log(this.props)
        return (
            <div className="row" style={{paddingRight:"15px"}}>
                <Friendscard  {...this.props}/>
            </div>
        );
    }
}

export default Friends;