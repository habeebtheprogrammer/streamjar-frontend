import React, { Component } from 'react';
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import validator from "validator"
import Forumcomment from "../extras/forumcomment"
import shuffle from "shuffle-array"
import Title from "./titlehead"

class Button extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
        this.likePost = this.likePost.bind(this)
        this.unLikePost = this.unLikePost.bind(this)
        
    }
    componentWillMount() {
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
    render() { 
        return (
                this.likeButton(this.props.post)
        );
    }
}

export default Button;