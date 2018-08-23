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
import Shoutoutbox from "../extras/shoutout"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Community extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
            user: {},
            text:""
        }
        this.submit = this.submit.bind(this)
        this.arrangePost = this.arrangePost.bind(this)
        this.typing = this.typing.bind(this)
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getNewsFeed`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)

            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
    submit(user) {

        var senderID = this.props.auth.user.id; var receiverID = user._id;
        var suname = this.props.auth.user.username; var runame = user.username;
        var date = new Date()
        var {socket} = this.props.socket;
        var party; var reference = this.state.text;
        if (moment(this.props.auth.user.regDate).isAfter(user.date)) {
            party = receiverID + senderID
        } else party =senderID + receiverID
        socket.emit("sendmesg", party, senderID,suname, receiverID, runame, this.state.text,reference)
        socket.emit("fetchconversation", this.props.auth.user.username)
    }
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    arrangePost(posts){
        var sorted= posts.content.sort((a,b)=> moment(b.date).diff(a.date))
            var div =[];
            sorted.map((item)=>{
                
            if (item.type==="shoutout")
                    div.push(
                        <div className="col-sm-4 " style={{padding:"15px 8px 0px"}}>
            
                        <div className="x-post white" style={{margin:"0px"}}>
                   <div> <div className="image">
                   <img src={`${posts.userID.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                   </div> <div className="image-text">
                   <div className="title"><Link to={`/profile/${posts.username}`}>{posts.userID.fullName}</Link> </div>
                   <div style={{color:"grey"}}>{moment(posts.date).calendar()}</div>
                   </div>
                   
                   </div>
      
                  <div className="clearfix"></div>
                  <div className="content">
                    <div className="post-img" style={{padding:"20px 10px 30px",height:"100px"}}>
                        <center><h3>{item.description}</h3></center>
                    </div>
                   
                    </div>
                    <div style={{borderTop:"1px solid #e8e8e8",paddingTop:"10px"}}>
                       <span className=" " style={{margin:"0px"}}>
                       {/* <Link to={`/chat`}><i className="fa fa-comments fa-lg"></i> Reply </Link> */}
                       
                       <div className="row comment">
                           <div className="col-xs-2">
                               <img src={this.props.auth.user.dpUrl||"../images/avatar.jpg"} width="100%"/>
                           </div>
                           <div className="col-xs-10 zero">
                           {posts.username === this.props.auth.user.username?<div style={{padding:"17px"}}></div>:<form onSubmit={(e)=>{e.preventDefault();this.submit(posts)}} >
                               <input onChange={this.typing} type="text" name="text" placeholder="say something"  className="form-control no-border" required="required"  />
                            </form>}
                               </div>
                       </div>
                       
                       </span>
                    </div>
                    </div>
                    </div>
                    
                       )
            });
         return div
        }
    render() { 
        var me = localStorage.getItem("username")
        
        return (
            <div className="row">
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid">
           <Navtab user={this.state.user} socket={this.props.socket} match={this.props.match}/>
            <div className="row" style={{padding:"0px 7px"}}>
            <div className="col-sm-4"  style={{padding:"0px 8px 0px"}}>
            {/* <Intro {...this.props} user={this.state.user}/> */}
            <Shoutoutbox {...this.props} users={this.state.user}/>
            </div>
    
            { 
                  this.state.posts.map((post)=>(
                      
                    this.arrangePost(post) 
                  ))
                }
        
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