import React, { Component } from 'react';
import Loading from "../loader"
import Groupintro from "../extras/groupintro"
import Photos from "../extras/photos"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import {Link} from "react-router-dom"
import Comments from "../extras/groupcomment"
import Title from "./titlehead"
import $ from "jquery"
class Grouptimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post:{content:[]},
            isLoading: true,

        }
        this.arrangePost = this.arrangePost.bind(this)

    }
    componentWillMount() {
      
    }
    jointext(e,text){
     $(e.target).parent().parent().text(text)
    }
    cuttext(text,maxlength){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <div>{newtext} <Link to="#" onClick={(e)=>this.jointext(e,text)}  style={{color:"black",fontWeight:"bold"}}><small>continue</small></Link></div>
        }else return text
    }
    arrangePost(){
    var sorted= this.props.posts
    var div =[];
        sorted.map((item)=>{
            div.push(
                <div className="x-post white" style={{marginBottom:"15px"}}>
                <Title post={item} auth={this.props.auth} creatorID={this.props.group.creatorID._id}/>
              
              <div className="content">
              {/* <p><b>{item.title}</b></p> */}
                   {this.cuttext(item.description,500,item._id)}
                {item.type==="video"?
                  <div className="post-img">
                  <Player
                        playsInline
                          src={item.videoUrl}
                         />
                  </div>:null}
                {item.type==="image"?
                <div className="post-img"><img src={item.imgUrl} /></div>
                :null}
          
            
                </div>
              <Comments item={item} auth={this.props.auth} match={{params:{}}}/>
                </div>
                
            )
        });
     return div
    }
   
    render() {
        var me = localStorage.getItem("username")
        return (
            <div className="row" style={{marginTop:"0px"}}> 
           
              { this.arrangePost() }
            
              </div>
            
        );
    }
}

export default Grouptimeline;