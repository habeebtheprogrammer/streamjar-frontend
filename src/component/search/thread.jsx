import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Forumcomment from "../extras/forumcomment"
import Title from "../forum/titlehead"
class Thread extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
        this.arrangePost= this.arrangePost.bind(this)
    }
    arrangePost(posts){
        var div =[];
        posts.map((post,key)=>{
                   div.push( 
                   <div className="x-post white" style={{marginBottom:"15px"}}>
                   <Title post={post} auth={this.props.auth}/>
                <div className="content">
                <p><b>#{post.title}</b></p>
                {this.cuttext(post.description,200,post.section,post._id)}
                
                <p style={{margin:"inherit"}}> 
                <span className="grey-color" style={{marginRight:"15px"}}> <i className="fa fa-comments-o"></i> <small>{post.comments.length}</small> </span>
                <span className="grey-color"> <i className="fa fa-thumbs-o-up"></i> <small>{post.likes.length}</small> </span>
                </p>
              {/* {1===1?<div className="post-img"><img src={"../../../../../images/china.jpg"} /></div>:null} */}
              </div>
              {/* <Forumcomment item={post} auth={this.props.auth} match={this.props.match}/> */}
                  </div>
                     
                    )
        });
     return div
    }
    cuttext(text,maxlength,section,id){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to={`/forum/section/${section}/${id}`} style={{color:"black",fontWeight:"bold"}}><small>Continue</small></Link></div>
        }else return text
    }
    render() { 
        console.log(this.props)
        var {posts} = this.props
        return (
            <div className="row">
            {this.arrangePost(posts)}
            </div>
        );
    }
}

export default Thread