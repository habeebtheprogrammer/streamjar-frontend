import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import Navtab from "../navbar/tab"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Community extends Component {
    constructor(props) {
        super(props);
        this.state ={
            media:[],
            user: {}
        }
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getNewsFeed`).then((res)=>{
            this.setState({media:res.data.media})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)

            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
   
   
    render() { 
        var me = localStorage.getItem("username")
        
        return (
            <div className="row">
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid">
           <Navtab user={this.state.user} socket={this.props.socket}/>
            <div className="row">
            <div className="col-sm-4">
            <Intro {...this.props} user={this.state.user}/>

            </div>
            <div className="col-sm-4" style={{paddingLeft:"0px"}}>
            
            <div className="x-post white">
            <div className="">
                   <div> <div className="image">
                   <img src={`${this.state.user.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title">{this.state.user.fullName} added a new photo</div>
                   <div style={{color:"grey"}}>{moment(this.state.user.date).format("ll")} at 4:03pm</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                  <div className="content">
                    <div className="post-img" style={{padding:"20px 10px 50px"}}>
                        <center><h3> NodeJS Developers </h3></center>
                    </div>
                   
                    </div>
                    <div style={{borderTop:"1px solid #e8e8e8",paddingTop:"10px"}}>
                       <span className=" " style={{margin:"0px"}}>
                       <Link to={`/chat`}><i className="fa fa-comments fa-lg"></i> Reply </Link>
                       </span>
                    </div>
                    </div>
                    </div>
              </div>
            </div>
            </div>
            <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 "}}>
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            <Footer />
            </div>
        
        );
    }
}

export default connect(mapStateToProps)(Community);