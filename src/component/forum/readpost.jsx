import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Forumcomment from "../extras/forumcomment"
import Title from "./titlehead"
import Likebutton from "./likebutton"
import Navfooter from '../extras/navfooter';
class Page extends Component {
    constructor(props) {
        super(props);
        this.state ={
            online:false,
            post:{userID:{},likes:[],comments:[{userID:{},reply:[],likes:[]}],followers:[],flag:{userID:[]}},
            user: {},
            description:"",
            posts:[]
        }
        this.arrangePost2= this.arrangePost2.bind(this)
    }
    componentWillMount() {
        var {match} = this.props
        axios.get(`${apiUrl}/api/getSectionPostById?id=${this.props.current.params.id}`).then((res)=>{console.log(res.data)
           if(res.data.post) this.setState({post:res.data.post})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
        axios.get(`${apiUrl}/api/fetch4Post`).then((res)=>{
           if(res.data.posts) this.setState({posts:res.data.posts})
        })
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
      <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
       <Likebutton post={item} auth={this.props.auth}/>
    </div>
          </div>
        )})
     return div
    }
    render() { 
        var {post} = this.state
        return (
            <div className="row">
            <div className="col-sm-4">
            <div className="" style={{position:"fixed",width:"24%",zIndex:"1023"}}>
            {/* <img src="../../../../images/ads1.png" width="100%" /> */}
            {/* <div className="wildcard white">
               <div >
           <Link to="/forum/post"> <b>Post a story</b>  </Link>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
            </div> */}
            {this.arrangePost2(this.state.posts)}
            <Navfooter />
            </div>
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
            <div className="x-post white">
                        <Title post={post} auth={this.props.auth}/>
                     <div className="content">
                     <p><b>{post.title}</b></p>
                     {post.description}
                   <div className="post-img"><img src={"../../../../../images/cropper.jpg"} /></div>
                   </div>
                   <Forumcomment item={post} auth={this.props.auth} match={this.props.current}/>
                       </div>
            </div>
        </div>
        );
    }
}

export default Page;