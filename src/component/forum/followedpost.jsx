import React, { Component } from 'react';
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import validator from "validator"
import Forumcomment from "../extras/forumcomment"
import shuffle from "shuffle-array"
import Title from "./titlehead"

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
        var {match} = this.props
        axios.get(`${apiUrl}/api/getFollowedPost?followerID=${this.props.auth.user.id}`).then((res)=>{
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
        posts.map((item,key)=>{
                   div.push( !validator.isDivisibleBy(key.toString(),2) || key===0?
                       <div className="x-post white">
                      <Title auth={this.props.auth} post={item} />
                      <div className="content" style={{borderTop:"0px"}}>
              <p><Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link></p>

                   {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
                   </div>
                   {/* <Forumcomment item={item} auth={this.props.auth} /> */}
                       </div>
                       
                      :null)
        });
     return div
    }
  arrangePost2(posts){
      
      var div =[];
      posts.map((item,key)=>{
                 div.push(validator.isDivisibleBy(key.toString(),2) && key !==0?
                     <div className="x-post white" >
                    <Title auth={this.props.auth} post={item} />
                    <div className="content" style={{borderTop:"0px"}}>
              <p><Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link></p>

                 {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
                 </div>
                 {/* <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
                     {this.likeButton(item)}
               </div> */}
                     </div>
                     :null
                    )
      });
   return div
  }
    render() { 
        console.log(this.props)
        return (
            <div className="row">

            
            <div className="col-sm-4">
            {this.arrangePost2(this.state.posts)}
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                {this.arrangePost(this.state.posts)}
            </div>
        </div>
        );
    }
}

export default Page;