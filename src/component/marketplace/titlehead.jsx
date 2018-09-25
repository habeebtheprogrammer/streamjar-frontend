import React, { Component } from 'react';
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import $ from "jquery"
import classnames from "classnames"
class Title extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showOption:false
        }
        this.option = this.option.bind(this)
    }
    followPost(postID) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/followGroupPost`, { postID,followerID:this.props.auth.user.id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    unFollowPost(postID) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/unFollowGroupPost`, { postID,followerID:this.props.auth.user.id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    flagPost(postID) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/flagPost`, { postID,userID:this.props.auth.user.id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    unFlagPost(postID) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/unFlagPost`, { postID,userID:this.props.auth.user.id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    }
    filterFollowers(post,userID){
        var exist = post.followers.filter((id)=>id===userID);
           if(!exist.length) return <span className="link" onClick={()=>this.followPost(post)} >Follow post </span> 
    else return <span className="link" onClick={()=>this.unFollowPost(post)} >Unfollow post </span> 

    }
    filterFlags(post,userID){
        var exist = post.flag.userID.filter((id)=>id===userID);
           if(!exist.length) return <span className="link" onClick={()=>this.flagPost(post)} >Flag as inappropiate </span> 
    else return <span className="link" onClick={()=>this.unFlagPost(post)} >Unflag post</span> 
    }
    componentDidMount() {
        $('.option').on("click",this.option)
        // $('.option').parent().next().addClass("hide");
    }
    option(){
        console.log(this.state.showOption)
        this.setState({showOption:!this.state.showOption})
        // if($(this).parent().next().hasClass("hide"))   $(this).parent().next().removeClass("hide");
        // else $(this).parent().next().addClass("hide")
        // $(this).parent().next().toggle()
    }
    render() { 
        var {post} = this.props
        return (
            <div className="" >
            <div> <div className="image">
            <img src={`${post.userID.dpUrl ||"../../../../images/genu.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
            </div> <div className="image-text">
            <div className="title"><Link to={`/profile/${post.userID.username}`}>{post.userID.username}</Link> 
            
            
           <div className="pull-right btn btn-default showOptionBtn" onClick={this.option}  style={{cursor:"pointer",padding:"0px"}} >
           <span>
           <i className="fa fa-circle-o" style={{fontSize:"0.6em"}}></i> <i className="fa fa-circle-o" style={{fontSize:"0.6em"}} ></i>   <i className="fa fa-circle-o" style={{fontSize:"0.6em"}}></i>
            </span>
             </div>
        
            </div>
            <div className={classnames("option-menu",this.state.showOption?"":"hide")} style={{background:"#fff",position:"absolute",marginTop:"10px",right:0,border:"1px solid #e8e8e8",padding:"10px 15px",fontSize:"0.9em"}}>
              <p>{this.filterFollowers(post,this.props.auth.user.id)}</p>
              <p>{this.filterFlags(post,this.props.auth.user.id)}</p>
              <p><Link to="">Report user </Link> </p>
          </div>
            <div style={{color:"grey",fontSize:"0.9em"}}>{moment(post.date).calendar()}</div>
            </div>
            </div>
           <div className="clearfix"></div>
           </div>
        );
    }
}

export default Title;