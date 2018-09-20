import React, { Component } from 'react';
class Aboutcard extends Component {
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
        var {user} = this.props
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        return (
            <div className="aboutcard white">
            <div className="title" >  About me </div>
               
               <div className="row content">
                   <div className="col-sm-4 zero left-content">
                       <div> Overview</div>
                       <div style={{color:"black"}}> Description</div>
                       <div> Places his lived</div>
                       <div> Basic Contact</div>
                       <div> Life Event</div>
                   </div>
                   <div className="col-sm-8 zero right-content">
                   <div>
                   {user.status}
                      </div> 
                       </div>
               </div>
               
         </div>
        );
    }
}

export default Aboutcard;
