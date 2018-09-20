import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Navfooter extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    render() { 
        var {posts} = this.state
        return (
            <div className="row">
            <div className="x-post white" style={{marginTop:"15px"}}>
            <small><Link to={`/forum/followed_posts`}>Followed posts</Link> ·  <Link to={`/forum/likes`}>Likes</Link> ·  <Link to={`/forum/commented_posts`}>Comments</Link>  ·  <Link to={`/forum/section`}> Sections </Link>
            ·  <Link to={`/trending`}> Trending </Link>  </small>
            </div>
            <div className="x-post "style={{fontSize:"0.9em",color:"grey"}} >
            English (US) · Hausa · Français (France) · Português (Brasil) · Español <br />
                <Link to="/privacy" style={{color:"grey"}}> Privacy </Link> · <Link to="/privacy" style={{color:"grey"}}> Terms </Link> · <Link to="/privacy" style={{color:"grey"}}> Advertising </Link> · <Link to="/privacy" style={{color:"grey"}}> More </Link>
               <br /> Afrikal © 2018
            </div>
            </div>
        );
    }
}

export default Navfooter