import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photocard from '../extras/photocard';
class Photos extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
             <div className="col-sm-4">
             {/* <Photos profile={this.props.user}/> */}
             <Intro profile={this.props.user}/>

             </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <Photocard user={this.props.user}/>
              </div>
            </div>
        );
    }
}

export default Photos;