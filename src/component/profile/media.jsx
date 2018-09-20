import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photocard from '../extras/photocard';
import Videocard from '../extras/videocard';
class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[],
            video:[]
        }
    }
    componentWillMount() {
 
    }
    render() {
        return (
            <div className="row" style={{paddingRight:"15px"}}>
              <Videocard {...this.props} />
              <Photocard {...this.props} />
            </div>
        );
    }
}

export default Photos;