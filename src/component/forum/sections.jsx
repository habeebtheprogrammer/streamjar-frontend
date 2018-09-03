import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Player } from 'video-react';
import Navtab from "../navbar/tab"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import sections from "../extras/sections"
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
    cuttext(text,maxlength){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to="#"><small>continue</small></Link></div>
        }else return text
    }
    likeButton(posts){
        var exist = posts.likes.filter((like)=>like.username===this.props.auth.user.username)
        if(exist.length > 0)
         return <button type="button" onClick={()=>this.unLikePost(posts)}  className="btn btn-default btn-sm" style={{color:"#337ab7"}}><b><i className="fa fa-thumbs-up"></i> Like</b></button>;
     else return  <button type="button" onClick={()=>this.likePost(posts)} className="btn btn-default btn-sm"><b><i className="fa fa-thumbs-o-up"></i> Like</b></button>
 
     }
    arrangePost2(posts){
     
        var div =[];
        posts.map((item)=>{
                   div.push(
                       <div className="x-post white" >
                       <div className="">
                      <div> <div className="image">
                      <img src={`${item.userID.dpUrl ||"../../images/genu.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                      </div> <div className="image-text">
                      <div className="title"><Link to={`/profile/${item.userID.username}`}>{item.userID.fullName}</Link>
                     <span className="pull-right" style={{cursor:"pointer"}}>
                     <i className="fa fa-circle-o" style={{fontSize:"0.6em"}}></i> <i className="fa fa-circle-o" style={{fontSize:"0.7em"}} ></i>   <i className="fa fa-circle-o" style={{fontSize:"0.8em"}}></i>
                       </span>
                      </div>
                      <div style={{color:"grey"}}>{moment(item.date).calendar()}</div>
                      </div>
                      
                      </div>
         
                     <div className="clearfix"></div>
                     <div className="content">
                     <p><b>{item.title}</b></p>
                     {this.cuttext(item.description,200)}
                   {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
                   </div>
                   {/* <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
                       {this.likeButton(item)}
                 </div> */}
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
            {this.arrangePost2(this.state.posts)}

            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}> 
            
            <img src="../../images/china.jpg"className="img-responsive" alt="Image" />
            
            {sections.map((section)=>(
 <Link to={`${this.props.location.pathname}/${section.url}`}>
 <div className="x-post white changebg" >
 <div className="">
<div> <div className="image">
<img src={`${section.img}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
</div> <div className="image-text">
<div className="title"><Link to={`${this.props.location.pathname}/${section.url}`}>{section.title}</Link>
 {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}


</div>
<div style={{}}>{section.description}</div>
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