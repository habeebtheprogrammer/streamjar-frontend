import React, { Component } from 'react';
import Intro from "../extras/intro"
import Photos from "../extras/photos"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import { connect } from "react-redux"
import { Link , Switch,withRouter, Route} from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import $ from "jquery"
import Navtab from "../navbar/tab"
import Section from "./sections"
import Page from "./page"
import Followedposts from "./followedpost"
import Commentedpost from "./commentedpost"
import Readpost from "./readpost"
import Poststory from "./post"
import Frontpage from "./frontpage"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            online:false,
            posts:[],
            user: {},
            description:""
        }
      
    }
    componentWillMount() {
       
        var {match} = this.props
        axios.get(`${apiUrl}/api/getSectionFpFeeds`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
        var username = localStorage.getItem("username")
        axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
            console.log(res.data)
            if(res.data.user)
            this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
        });
    }
    
   
    render() { 
        var me = localStorage.getItem("username")
        
        return (
            <div className="row">
            <Navtab socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid" style={{paddingTop:"15px"}}>
           
            <Switch >
                <Route exact path={`${this.props.match.url}/section`} render={(props)=><Section {...this.props} current={props.match}/> } />
                <Route exact path={`${this.props.match.url}/followed_posts`} render={(props)=><Commentedpost {...this.props} current={props.match}/> } />
                <Route exact path={`${this.props.match.url}/commented_posts`} render={(props)=><Commentedpost {...this.props} current={props.match}/> } />
                <Route exact path={`${this.props.match.url}/likes`} render={(props)=><Commentedpost {...this.props} current={props.match}/> } />
                <Route exact path={`${this.props.match.url}/post`} render={(props)=><Poststory {...this.props} /> } />
                <Route exact path={`${this.props.match.url}/section/:id`} render={(props)=><Page {...this.props} current={props.match}/> } />
                <Route path={`${this.props.match.url}/section/:id/:id`} render={(props)=><Readpost {...this.props} current={props.match}/> } />
                <Route  path="/" render={(props)=><Frontpage  {...this.props} />} />
            </Switch>
            </div>
            </div>
            <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                    {/* <Relatedusers auth={this.props.auth}/> */}
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            <style>
                  {`
                  .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                    font-size:2em !important
                  }
                  .video-react-big-play-button.video-react-big-play-button-left{
                    font-size:2em !important;
                  }
                  .ads .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                    font-size:1em !important
                  }
                  .ads .video-react-big-play-button.video-react-big-play-button-left{
                    font-size:1em !important;
                  }
                  `}
              </style>
            </div>
        
        );
    }
}

export default connect(mapStateToProps)(Home);