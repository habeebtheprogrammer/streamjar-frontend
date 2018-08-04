import React, { Component } from 'react';
import apiUrl from "../../config"

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
        }
    }

componentWillMount() {
  
}

    render() {
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        
        return (
            
            <div className="wildcard white">
               <div className="title"> <i className="fa fa-globe"></i> Intro </div>
                    <div className="content" >
                    <center>
                   There call us dreamers, but we are the dreamer that dont sleep #ReactPro
                    </center>
                    </div>

              <div className="content" style={{borderTop:"1px solid #d9d9d9"}}>
             <div> <div className="icon"><i className="fa fa-graduation-cap"></i> </div> <div className="icon-text">Studies {this.props.profile.department} at {this.props.profile.university} </div> </div>
             <div> <div className="icon"><i className="fa fa-home"></i> </div> <div className="icon-text">from </div></div>
             <div> <div className="icon"><i className="fa fa-heart"></i> </div> <div className="icon-text">Single </div></div>
             <div> <div className="icon"><i className="fa fa-users"></i> </div> <div className="icon-text">Followed by  </div></div>
             <div className="clearfix"></div>
              </div>
            </div>
        );
    }
}

export default Intro;
