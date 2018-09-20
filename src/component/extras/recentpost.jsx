import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import Title from "../forum/titlehead"
import Likebutton from "../forum/likebutton"
class Page extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[]
        }
        this.arrangePost2= this.arrangePost2.bind(this)
    }
    componentWillMount() {
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
         <div className="content" style={{borderTop:"0px",fontSize:"1em"}}>
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
            {/* <img src="../../../../images/ads1.png" width="100%" /> */}
               {this.arrangePost2(this.state.posts)}
        </div>
        );
    }
}

export default Page;