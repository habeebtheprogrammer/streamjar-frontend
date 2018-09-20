import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Player } from 'video-react';
import Navtab from "../navbar/tab"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import sections from "../extras/sections"
import shuffle from "shuffle-array"
import Title from "./titlehead"
import Forumcomment from "../extras/forumcomment"
import Navfooter from '../extras/navfooter';
import Relatedusers from '../extras/relatedusers';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state ={
            online:false,
            posts:[],
            user: {},
            description:""
        }
        this.likeButton = this.likeButton.bind(this)
        this.likePost = this.likePost.bind(this)
        this.unLikePost = this.unLikePost.bind(this)
        this.arrangePost2 = this.arrangePost2.bind(this)
     
    }
    componentWillMount() {
       
        var {match} = this.props
        axios.get(`${apiUrl}/api/getSectionFpFeeds`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
  
    cuttext(text,maxlength,section,id){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to={`/forum/section/${section}/${id}`} style={{color:"black",fontWeight:"bold"}}><small>view post</small></Link></div>
        }else return text
    }
    likeButton(posts){
        var exist = posts.likes.filter((like)=>like.username===this.props.auth.user.username)
        if(exist.length > 0)
         return <button type="button" onClick={()=>this.unLikePost(posts)}  className="btn btn-default btn-sm" style={{color:"#337ab7"}}><b><i className="fa fa-thumbs-up"></i> Like</b></button>;
     else return  <button type="button" onClick={()=>this.likePost(posts)} className="btn btn-default btn-sm"><b><i className="fa fa-thumbs-o-up"></i> Like</b></button>
 
     }
     likePost(post) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/likeForumPost`, { creatorID:post.userID, userID:this.props.auth.user.id, postID:post._id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
  
     unLikePost(post) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/unLikeForumPost`, { creatorID:post.userID, userID:this.props.auth.user.id, postID:post._id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    arrangePost2(posts){
     
        var div =[];
        shuffle(posts).slice(0,3).map((item)=>{
                   div.push(
                       <div className="x-post white" >
                        <Title post={item} auth={this.props.auth}  />
                     <div className="clearfix"></div>
                     <div className="content" style={{borderTop:"0px",fontSize:"1em"}}>
                     <p>» <Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link> </p>

                   </div>

                       </div>
                      )
        });
     return div
    }
    render() { 
        return (
  <div className="row">
            
          
            <div className="col-sm-4">
            {/* <img src="../../../../../images/ads4.jpg" width="100%" alt=""/> */}
            <div className="wildcard white">
               <div >
           <Link to="/forum/post"> <b>Post a story</b>  </Link>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
            </div>
            <div className="left-grid white" >
            <Relatedusers auth={this.props.auth}/>
            </div>
            {/* {this.arrangePost2(this.state.posts)} */}
            <Navfooter />
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}> 
            
            {/* <img src="../../images/china.jpg"className="img-responsive" alt="Image" /> */}
                   {/* <div style={{background:"url('../../../../../images/ads3.jpg')",height:"200px",backgroundSize:"cover",backgroundPosition:"center"}} ></div> */}
            
            {sections.map((section)=>(
 <Link to={`${this.props.location.pathname}/${section.url}`}>
 <div className="x-post white changebg" style={{borderBottom:"0px"}}>
 <div className="">
<div> <div className="image">
<img src={`${section.img}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
</div> <div className="image-text">
<div className="title" style={{fontWeight:"normal",paddingTop:"6px"}}><Link to={`/forum/section/${section.url}`}>{section.title}</Link>

</div>
</div>

</div>

<div className="clearfix"></div>
 </div>
 </div>
 </Link>
            ))}
           
                       
            </div>
        </div>
        );
    }
}

export default Section;