import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Profiletab from "../navbar/profiletab"
class Bgprofile extends Component {
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
   
    axios.get(`${apiUrl}/api/getFriends?username=${this.props.user.username}`).then((res)=>{
        if(res.data.friends)
         this.setState({friends:res.data.friends})
     })
}
    render() {
        var imglist = ["slide4.jpg", "bg.jpg", "banner2.jpg", "china.jpg"]
        var me = localStorage.getItem("username")
        return (
                   <div className="row" style={{ border:"1px solid #e8e8e8 "}}>
                <div className="col-sm-12">
                <div className="profile-bg" style={{background:`url('../../images/${imglist[2]}')`}}>
                 <div className="row profile-img">
                 <div className="col-sm-2 zero" style={{border:"1px solid lightgrey"}}>
                 <img src={`${this.props.user.dpUrl ||'../../../../images/avatar.jpg'}`} width="160px" alt="" />

                 </div>
                 <div className="col-sm-9 ">
                 <p className="profile-name" style={{ textTransform: "capitalize",paddingTop:"50px" }}>
                 {this.props.user.fullName}
                 <br />
                <span>Studying {this.props.user.department} {this.props.user.university}</span>
                {this.props.user.username === me? 
                <button className="btn danger pull-right " style={{color:"black"}}> {this.state.friends.friends.length}  Friends</button>  

                :
                <button className="btn danger pull-right " style={{color:"black"}}>{this.state.friends.friends.length} Friends</button>  
                }
                 </p>
                 </div>
                    </div>
                    </div>
           <Profiletab user={this.props.user} socket={this.props.socket}/>
             
                </div>
           
              </div>
        );
    }
}

export default Bgprofile;
