import React, { Component } from 'react';
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import sections from "../extras/sections"
import apiUrl from "../../config"
import Forumcomment from "../extras/forumcomment"
import shuffle from "shuffle-array"
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
     
    }
    componentWillMount() {
       
        var {match} = this.props
        axios.get(`${apiUrl}/api/getSectionFeeds?section=${this.props.current.params.id}`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }

    arrangePost(posts){
     
          var div =[];
          posts.map((item)=>{
              if(item.type==="video") 
                  div.push(
                      <div className="x-post white">
                      <div className="">
                     <div> <div className="image">
                     <img src={`${item.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                     </div> <div className="image-text">
                     <div className="title"><Link to={`/profile/${item.username}`}>{item.fullName}</Link>  uploaded a new video</div>
                     <div style={{color:"grey"}}>{moment(item.date).calendar()} </div>
                     </div>
                     
                     </div>
        
                    <div className="clearfix"></div>
                          <div className="content">
                      {item.description}
                      <div className="post-img">
                      <Player
                            playsInline
                              src={item.videoUrl}
                             />
                      </div>
                      </div>
                      </div>
                      </div>
                  
              )
              else if (item.type==="image")
                  div.push(
                      <div className="x-post white">
                      <div className="">
                     <div> <div className="image">
                     <img src={`${item.dpUrl ||"../../images/avatar.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                     </div> <div className="image-text">
                     <div className="title"><Link to={`/profile/${item.username}`}>{item.fullName}</Link> added a new photo</div>
                     <div style={{color:"grey"}}>{moment(item.date).calendar()}</div>
                     </div>
                     </div>
        
                    <div className="clearfix"></div>
                    <div className="content">
                  {item.description}
                  <div className="post-img"><img src={item.imgUrl} /></div>
                  </div>
                      </div>
                      </div>
                     )
                     else 
                     div.push(
                         <div className="x-post white">
                         <div className="">
                        <div> <div className="image">
                        <img src={`${item.userID.dpUrl ||"../../images/genu.jpg"}`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
                        </div> <div className="image-text">
                        <div className="title"><Link to={`/profile/${item.userID.username}`}>{item.userID.fullName}</Link>
                         {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}
                        
                        
                       <span className="pull-right" style={{cursor:"pointer"}}>
                        <i className="fa fa-circle-o" style={{color:"grey",fontSize:"0.6em"}}></i> <i className="fa fa-circle-o" style={{color:"grey",fontSize:"0.6em"}} ></i>   <i className="fa fa-circle-o" style={{color:"grey",fontSize:"0.6em"}}></i>
                         </span>
                        
                        </div>
                        <div style={{color:"grey"}}>{moment(item.date).calendar()}</div>
                        </div>
                        
                        </div>
           
                       <div className="clearfix"></div>
                       <div className="content">
                       <p><b>{item.title}</b></p>
                     {item.description}
                     {/* <div className="post-img"><img src={item.imgUrl} /></div> */}
                     </div>
                   
                     
                         </div>
                       <Forumcomment item={item} auth={this.props.auth} />
                         </div>
                         
                        )
          });
       return div
      }

    render() { 
        console.log(this.props)
        return (
            <div className="row">

            
            <div className="col-sm-4">
            {shuffle(sections).slice(0,2).map((section)=>(
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
              <div className="row white">
                <div className="col-xs-12 zero">
                    <img src="../../images/china.jpg" width="100%" alt=""/>
                </div>
                
                <div className="col-xs-12 "  style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>
                <div>Advertise your business on Afrikal</div>
                    
                </div>
                
            </div>
             
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
                {this.arrangePost(this.state.posts)}
            </div>
        </div>
        );
    }
}

export default Page;