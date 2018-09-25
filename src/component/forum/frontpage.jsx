import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Likebutton from "./likebutton"
import Title from "./titlehead"
import Navfooter from '../extras/navfooter';
class Frontpage extends Component {
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
        axios.get(`${apiUrl}/api/getSectionFpFeeds`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
     cuttext(text,maxlength){
         if(text.length > maxlength){
             var newtext = text.slice(0,maxlength);
             newtext += "..."
             return <div>{newtext} <Link to="#" style={{color:"black",fontWeight:"bold"}}><small>view post</small></Link></div>
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
      {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
      </div>
      <div className="row" style={{padding:"10px 0px 0px",borderTop:"1px solid #e8e8e8"}}>
      <Likebutton post={item} auth={this.props.auth}/>
       
    </div>
          </div>
        )})
     return div
    }
    render() { 
        return (
            <div className="row">
            <div className="col-sm-4  " >
            <div className="" style={{position:"fixed",width:"24%",zIndex:"10"}}>
            {/* <div className="wildcard white">
               <div >
           <Link to="/forum/post"> <b>Post a story</b>  </Link>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
            </div> */}
            {this.arrangePost2(this.state.posts.slice(0,2))}
            
            <Navfooter />
            
            </div>

            </div>
            <div className="col-sm-8 " style={{paddingLeft:"0px"}}>
                <div className="white row" style={{paddingTop:"10px"}}>
                {this.arrangePost(this.state.posts)}
                </div>
            </div>
            </div>
        );
    }
}

export default Frontpage;