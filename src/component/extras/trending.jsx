import React, { Component } from 'react';
import $ from "jquery"
import classnames from "classnames"
import apiUrl from "../../config"
import axios from "axios"
import jwt from "jsonwebtoken"

import {Link} from "react-router-dom"
class Trendingwidget extends Component {
    constructor(props) {
        super(props);
        this.state ={
        posts: [],
            rloader: true,
        }
    }

componentWillMount() {
    axios.get(`${apiUrl}/api/get3TrendingPost`).then((res)=>{console.log(res.data)
        if(res.data.posts) this.setState({posts:res.data.posts,rloader:false})
  
    })

         
  
}
cuttext(text,maxlength){
    if(text.length > maxlength){
        var newtext = text.slice(0,maxlength);
        newtext += "..."
        return newtext
    }else return text
}
    render() {
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        
        return (
            <div className="white" style={{paddingBottom:"10px"}}>
                <div style={{ margin:"0px 10px 5px",padding: "12px 0px", }}>#Trending</div>
                {this.state.rloader ? <center style={{ margin: "100px 0px" }}><i className="fa fa-spin fa-spinner"></i></center> : null}
                {this.state.posts.map((post, key) => (
                        <div  className={classnames(this.state.rloader ? "hide" : null)}  style={{padding:"7px 12px"}}>
                            <div className="img" style={{width:"11%",float:"left"}}>
                                <img src={post.userID.dpUrl || "../../../../images/john.jpg"} width="100%" className="img-responsive img-rounded" alt="Image" />
                            </div>
                            <div className="name" style={{paddingLeft:"10px",float:"left",width:"89%"}}>
                    <a href={`/profile/${post.userID.username}`}>
                                <b>{post.userID.username}</b>
                    </a>
                                <br />
                                <small className="grey-color"><Link to={`/forum/section/${post.section}/${post._id}`}>{this.cuttext(post.title,60)}</Link></small>
                            </div>
                            <div className="clearfix"> </div>
                        </div>


                ))}
            </div>
        );
    }
}

export default Trendingwidget;
