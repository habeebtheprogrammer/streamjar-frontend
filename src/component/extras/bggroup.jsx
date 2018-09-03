import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Grouptab from "../navbar/grouptab"
class Bggroup extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            online:false,
            friends:{friends:[]}

        }
    }
componentWillMount() {
 
}
    render() {
        var {creatorID} = this.props.group
        var imglist = ["slide4.jpg", "bg.jpg", "banner2.jpg", "hustle-quotes.jpg"]
        return (
                   <div className="row" style={{ border:"1px solid #e8e8e8 "}}>
                <div className="col-sm-12">
                {/* <div className="profile-bg" style={{background:`url('../../images/town.jpg')`,backgroundSize:"cover"}}>
                 <div className="row profile-img">
                 <div className="col-sm-2 zero" style={{border:"1px solid lightgrey"}}>
                 <img src={`${this.props.group.dpUrl ||'../../../../images/img0.jpg'}`} width="160px" alt="" />

                 </div>
                 <div className="col-sm-9 ">
                 <p className="profile-name" style={{ textTransform: "capitalize",paddingTop:"50px" }}>
                 {this.props.group.title}
                 <br />
                <span>Created by {creatorID.fullName} {creatorID.department}</span>
              
                 </p>
                 </div>
                    </div>
                    </div> */}
           <Grouptab group={this.props.group} socket={this.props.socket} match={this.props.match}/>
             
                </div>
           
              </div>
        );
    }
}

export default Bggroup;
