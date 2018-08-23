import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import Friendscard from "../extras/friendscard"
import Requestsent from "../extras/requestsent"
class Friends extends Component {
    constructor(props) {
        super(props);

    }
    render() { console.log(this.props)
        return (
            <div className="row">
             <div className="col-sm-4">
             <Intro  {...this.props}/>
             <Photos {...this.props}/>

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                <Friendscard  {...this.props}/>
              </div>
            </div>
        );
    }
}

export default Friends;