import React, { Component } from 'react';
import { Link,withRouter } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import validator from "validator"
import Forumcomment from "../extras/forumcomment"
import shuffle from "shuffle-array"
import Title from "./titlehead"
import Navfooter from '../extras/navfooter';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state ={
            online:false,
            posts:[],
            user: {},
            description:""
        }
        this.arrangePost = this.arrangePost.bind(this)
        this.arrangePost2 = this.arrangePost2.bind(this)
    }
    componentWillMount() {
        var {current} = this.props
        if(current.url ==="/forum/commented_posts")
        axios.get(`${apiUrl}/api/getCommentedPost?userID=${this.props.auth.user.id}`).then((res)=>{
            if(res.data.posts)this.setState({posts:res.data.posts})
        })
        else  if(current.url ==="/forum/likes")
        axios.get(`${apiUrl}/api/getLikesPost?userID=${this.props.auth.user.id}`).then((res)=>{
            if(res.data.posts)this.setState({posts:res.data.posts})
        })
        else  if(current.url==="/forum/followed_posts")
        axios.get(`${apiUrl}/api/getFollowedPost?userID=${this.props.auth.user.id}`).then((res)=>{
            if(res.data.posts)this.setState({posts:res.data.posts})
        })
    }
    cuttext(text,maxlength,section,id){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to={`/forum/section/${section}/${id}`} style={{color:"black",fontWeight:"bold"}}><small>view post</small></Link></div>
        }else return text
    }
    arrangePost(posts){
        var div =[];
        posts.map((item,key)=>{key==0||key===1?null:
                   div.push(
                      <div className="x-post white" style={{borderTop:"0px"}}>
                      <Title auth={this.props.auth} post={item} />
                      <div className="content" style={{borderTop:"0px"}}>
              <p><Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link></p>
              <span className="grey-color" style={{marginRight:"15px"}}> <i className="fa fa-comments-o"></i> <small>{item.comments.length}</small> </span>
               <span className="grey-color"> <i className="fa fa-thumbs-o-up"></i> <small>{item.comments.length}</small> </span>
                
                   </div>
                       </div>
                    )
        });
     return div
    }
    arrangePost2(posts){
      var div =[];
      posts.map((item,key)=>{
        div.push(
        <div className="x-post white"  >
       <Title auth={this.props.auth} post={item} />
       <div className="content" style={{borderTop:"0px"}}>
                     <p><Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link> </p>
                     <span className="grey-color" style={{marginRight:"15px"}}> <i className="fa fa-comments-o"></i> <small>{item.comments.length}</small> </span>
               <span className="grey-color"> <i className="fa fa-thumbs-o-up"></i> <small>{item.comments.length}</small> </span>
                
    {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
    </div>
        </div>
      )})
   return div
  }
    render() { 
        return (
            <div className="row">
            <div className="col-sm-4">
            <div className="" style={{position:"fixed",width:"24%",zIndex:"10"}}>
            <div className="wildcard white">
               <div >
           <Link to="/forum/post"> <b>Post a story</b>  </Link>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
            </div>
            {this.arrangePost2(this.state.posts.slice(0,2))}
            <Navfooter />
           </div>
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                {this.arrangePost(this.state.posts)}
            </div>
        </div>
        );
    }
}

export default withRouter(Page);