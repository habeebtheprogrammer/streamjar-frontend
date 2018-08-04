import React, { Component } from 'react';
import apiUrl from "../../config"

class Photos extends Component {
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
               <div className="title"> <i className="fa fa-photo"></i> Photos </div>
           <div className="content">
           
           <div className="row">
               <div className="col-sm-4 zero">
           <img src="../../images/genu.jpg" width="100%" class="img-responsive" alt="Image" />
               </div>
               <div className="col-sm-4 zero">
           <img src="../../images/sonu.jpg" width="100%" class="img-responsive" alt="Image" />
               </div>
               <div className="col-sm-4 zero">
           <img src="../../images/user.jpg" width="100%" class="img-responsive" alt="Image" />
               </div>
               <div className="col-sm-4 zero">
           <img src="../../images/govinda.jpg" width="100%" class="img-responsive" alt="Image" />
               </div>
               <div className="col-sm-4 zero">
           <img src="../../images/hritik.jpg" width="100%" class="img-responsive" alt="Image" />
               </div>

                  <div className="col-sm-4 zero">
           <img src="../../images/pawandeep.jpg" width="100%" class="img-responsive" alt="Image" />
               </div>
           </div>
           
           
           </div>
            </div>
        );
    }
}

export default Photos;
