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
            <div className="row" style={{marginRight:"15px"}}>
             <Intro user={this.props.user} {...this.props}/>

            </div>
        );
    }
}

export default About;