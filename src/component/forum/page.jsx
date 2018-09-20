import React, { Component } from 'react';
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import apiUrl from "../../config"
import validator from "validator"
import Forumcomment from "../extras/forumcomment"
import shuffle from "shuffle-array"
import Title from "./titlehead"
import Likebutton from "./likebutton"
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
       
        var {match} = this.props
        axios.get(`${apiUrl}/api/getSectionFeeds?section=${this.props.current.params.id}`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
    cuttext(text,maxlength,section,id){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to={`/forum/section/${section}/${id}`} style={{color:"black",fontWeight:"bold"}}><small>Continue</small></Link></div>
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
        <div className="x-post white" >
       <Title auth={this.props.auth} post={item} />
       <div className="content" style={{borderTop:"0px"}}>
                     <p>» <Link to={`/forum/section/${item.section}/${item._id}`}><b>{item.title}</b></Link> </p>
    </div>
    {/* <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
       <Likebutton post={item} auth={this.props.auth}/>
  </div> */}
        </div>
      )})
   return div
  }
    render() { 
        var {posts} = this.state;
        // var all = posts.splice(0,4);
        console.log(posts)
        return (
            <div className="row">

            
            <div className="col-sm-4">
            <div className="" style={{position:"fixed",width:"24%",zIndex:"1023"}}>
            {/* <div className="wildcard white">
               <div >
           <Link to="/forum/post"> <b>Post a story</b>  </Link>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
            </div> */}
            {this.arrangePost2(posts.slice(0,3))}
            <Navfooter />
            </div>
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                {this.arrangePost(posts)}
            </div>
        </div>
        );
    }
}

export default Page;