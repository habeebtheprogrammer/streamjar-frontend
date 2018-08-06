import React, { Component } from 'react';
class Friendscard extends Component {
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
            <div className="friendscard white">
            <div className="title" > <i className="fa fa-user" style={{color:"grey",padding:"0px 0px 5px"}}></i> Friends
            </div>
               
               <div className="row content">
                  
               </div>
               
         </div>
        );
    }
}

export default Friendscard;
