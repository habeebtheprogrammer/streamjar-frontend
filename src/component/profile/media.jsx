import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photocard from '../extras/photocard';
import Videocard from '../extras/videocard';
class Photos extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
             <div className="col-sm-4">
             {/* <Photos profile={this.props.user}/> */}
             <Intro user={this.props.user} {...this.props}/>

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <Videocard {...this.props}/>
              <Photocard {...this.props}/>
              </div>
            </div>
        );
    }
}

export default Photos;