import React,{Component} from "react";
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
 class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            description:""
        }
        this.typing = this.typing.bind(this)
        this.postComment = this.postComment.bind(this)
        this.likePost = this.likePost.bind(this)
        this.unLikePost = this.unLikePost.bind(this)
        this.likeComment = this.likeComment.bind(this)
        this.likeButton = this.likeButton.bind(this)
        this.checkMe = this.checkMe.bind(this)

    }

    componentDidMount() {
        
    }
    postComment(post) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/postComment`, { "description": this.state.description,creatorID:post.userID, userID:this.props.auth.user.id, postID:post._id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    
    likePost(post) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/likePost`, { creatorID:post.userID, userID:this.props.auth.user.id, postID:post._id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    unLikePost(post) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/unLikePost`, { creatorID:post.userID, userID:this.props.auth.user.id, postID:post._id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    likeComment(post,comment) {
        let token = localStorage.getItem("kaytoken")
        axios.post(`${apiUrl}/api/likeComment`, { "description": this.state.description,creatorID:post.userID, userID:this.props.auth.user.id, postID:post._id,commentID:comment._id}).then((res) => {
            if (res.data.success) {
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    likeButton(posts){
       var exist = posts.likes.filter((like)=>like.username===this.props.auth.user.username)
       console.log(posts,this.props.auth.user.username,exist)
       if(exist.length > 0)
        return <button type="button" onClick={()=>this.unLikePost(posts)}  className="btn btn-default btn-sm" style={{color:"#337ab7"}}><b><i className="fa fa-thumbs-up"></i> Like</b></button>;
    else return  <button type="button" onClick={()=>this.likePost(posts)} className="btn btn-default btn-sm"><b><i className="fa fa-thumbs-o-up"></i> Like</b></button>

    }
    typing(e,item) {
    
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    checkMe(likes){
        console.log(likes)
        var exist = likes.filter((like)=>like.username===this.props.auth.user.username)
        if( likes.length>2 && exist.length>0)
        return <div className="pull-left"> <i className="fa fa-thumbs-up skyblue"></i>
        <Link to={"/profile/"+this.props.auth.user.username}> You</Link>, {likes[likes.length -1].username === this.props.auth.user.username?<Link to={"/profile/"+likes[likes.length -2].username}>{likes[likes.length -2].fullName}</Link>:<Link to={"/profile/"+likes[likes.length -1].username}>{likes[likes.length -1].fullName } </Link>} and {likes.length-2} others
        </div>
        else if( likes.length===2  && exist.length>0)
        return <div className="pull-left"> <i className="fa fa-thumbs-up skyblue"></i>
        <Link to={"/profile/"+this.props.auth.user.username}> You</Link> and {likes[likes.length-1].username === this.props.auth.user.username?<Link to={"/profile/"+likes[likes.length -2].username}>{likes[likes.length -2].fullName}</Link> :<Link to={"/profile/"+likes[likes.length -1].username}>{likes[likes.length -1].fullName } </Link>}
        </div>
         else if( likes.length===1  && exist.length>0)
         return <div className="pull-left"> <i className="fa fa-thumbs-up skyblue"></i>
         <Link to={"/profile/"+this.props.auth.user.username}> You</Link> 
         </div>
           else if( likes.length===1 && exist.length===0)
           return <div className="pull-left"> <i className="fa fa-thumbs-up skyblue"></i>
           <Link to={"/profile/"+likes[likes.length-1].username}> {likes[likes.length-1].fullName}</Link> 
           </div>
            else if( likes.length >1 && exist.length===0)
            return <div className="pull-left"> <i className="fa fa-thumbs-up skyblue"></i>
            <Link to={"/profile/"+likes[likes.length-1].username}> {likes[likes.length-1].fullName}</Link>  and {likes.length -1} others
            </div>
    }
    render(){
        var {item,auth} = this.props
        return(
            <div>
                  <div className="" style={{padding:"5px 0px 10px"}} >
                     {this.checkMe(item.likes)} 
                    
                       
                      {item.comments.length >0?<span className="pull-right"> <b>{item.comments.length} Comments</b></span>:null}
                      
                      <div className="clearfix"> </div>
                      
                       </div>
                 
                 <div className="row" style={{padding:"10px 0px",borderTop:"1px solid #e8e8e8",borderBottom:"1px solid #e8e8e8",}}>
                     <div className="col-xs-4">
                        {this.likeButton(item)}
                        
                     </div>
                     {/* <div className="col-xs-4">
                        <center>
                        <button type="button" className="btn btn-default btn-sm"><b><i className="fa fa-comments"></i> Comment</b></button>
                        </center>
                     </div> */}
                     <div className="col-xs-8">
                        
                        <button type="button" className="btn btn-default btn-sm pull-right"><b><i className="fa fa-reply"></i> Share</b></button>
                        
                     </div>
                 </div>
                 {item.comments?
                    item.comments.slice(-3).map((comment)=>(
                        <div className="row" style={{padding:"10px 0px"}}>
                                    
                        <div className="col-xs-1 zero">
                        <img src={`${comment.userID.dpUrl ||"../../images/genu.jpg"}`} style={{width:"30px",borderRadius:"100%"}} alt="img" />
                            </div>
                            <div className="col-xs-11" style={{background:"#eff1f3",padding:"7px 10px 7px",borderRadius:"30px",marginLeft:"-15px",width:"auto"}}>
                            <Link to={`/profile/${comment.userID.username}`} style={{color:"#23527c"}}>{comment.userID.fullName}</Link> {comment.description}
                            </div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-11  "><small className="" style={{color:"grey",paddingLeft:'35px'}}>
                            <Link to="#" onClick={()=>this.likeComment(item,comment)}> Like </Link> <Link to="#" style={{paddingLeft:"10px"}}> Reply </Link>- {moment(comment.date).fromNow()}</small></div>
                        </div>
                    ))
                 
                :null}
                       <div className="row" style={{borderTop:"1px solid #e8e8e8",paddingTop:"10px"}}>
                   
                   <div className="col-xs-1 zero">
                      <img src={`${item.dpUrl ||"../../images/genu.jpg"}`} style={{width:"30px",borderRadius:"100%"}} alt="img" />
                   </div>
                   <form onSubmit={(e)=>{e.preventDefault();  this.postComment(item)}}>
                
                   <div className="col-xs-10 zero" >
                       <input type="text" name="description" onChange={(e)=>this.typing(e,item)} placeholder="say something..." className="form-control description" style={{borderRadius:"30px",marginLeft:"-15px"}} />
                       
                       </div>
                       <div className="col-xs-1 " style={{paddingTop:"10px"}}>
                       
                      <Link to="#" type="submit" onClick={(e)=>{e.preventDefault();  this.postComment(item)}}> <i className="fa fa-send"></i> </Link>
                       
                       </div>
                   </form>
                       
                   </div>
            </div>
        )
    }
}

export default Comments