import React, { Component } from 'react';
import $ from "jquery"
import classnames from "classnames"
import apiUrl from "../../config"
import {Link} from "react-router-dom"
class Bgchat extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            online:false
        }
    }
    componentWillMount() {
        var {socket} = this.props.socket
        socket.emit("fetchuserlist")
        socket.on("disconnect",()=> this.setState({online:false}))
    
        socket.on("onlineusers", (onlineusers) => {
           var check = onlineusers.findIndex((user)=>user.username===this.props.user.username);
            if(check !== -1) this.setState({online:true})
        })
    }
    render() {
        var imglist = ["banner2.jpg", "bg.jpg", "banner2.jpg", "hustle-quotes.jpg"]
        
        return (
                   <div className="row" style={{border:"1px solid #e8e8e8"}}>
                <div className="col-sm-12 ">
                <div className="chat-bg" style={{background:`url('../../images/${imglist[1]}')`,backgroundSize:"cover"}}>
                 <div className="row profile-img">
                 <div className="col-sm-2 zero" style={{border:"1px solid lightgrey"}}>
                 <img src={`${this.props.user.dpUrl ||'../../../../images/avatar.jpg'}`}  width="160px" alt="" />

                 </div>
                 <div className="col-sm-9 ">
                 <p className="profile-name" style={{ textTransform: "capitalize",paddingTop:"50px" }}>
                 {this.props.user.fullName}
                <br />
                <span>Studying {this.props.user.department} {this.props.user.university}</span>
                <button className="btn danger pull-right " style={{color:"black"}}>Follow</button>  
                 
                 </p>
                 </div>
                    </div>
                    </div>
                <div className="profile-tab">
                    
                    <div className="navbar" style={{marginBottom:"0px"}}>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to={`/profile/${this.props.user.username}`}>Timeline</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${this.props.user.username}/about`}>About</Link>
                            </li>
                            <li className="active">
                                <Link to={`/profile/${this.props.user.username}/friends`}>Friends</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${this.props.user.username}/photos`}>Photos</Link>
                            </li>
                            <li className="active">
                                <Link to={`/chat/${this.props.user.username}`}>Message</Link>
                            </li>
                            <li>
                                <Link to={`/call/${this.props.user.username}`} target="_blank">Call</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right" style={{margin:"0px"}}>
                            {this.state.online?
                            <li>
                                <Link to="#"><span className="online"><i className="fa fa-circle"></i> Online</span></Link>
                            </li>:
                             <li>
                             <Link to="#"><span className="offline"><i className="fa fa-circle"></i> Offline</span></Link>
                         </li>
                            }
                        </ul>
                    </div>
                    
                </div>
                </div>
           
              </div>
        );
    }
}

export default Bgchat;
