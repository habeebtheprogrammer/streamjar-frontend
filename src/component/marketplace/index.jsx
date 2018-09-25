import React, { Component } from 'react';
import {Route ,Switch} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Sidebar from "../navbar/sidebar"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Navtab from "../navbar/tab"
import Post from "./post"
import Home from "./home"
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online:false,
            posts:[],
            user: {},
            description:""
        }
    }
    componentWillMount() {
        axios.get(`${apiUrl}/api/getSectionFpFeeds`).then((res)=>{
            this.setState({posts:res.data.posts})
        })
    }
    componentDidMount() {
        
    }
    render() {
        var {images,video} =this.state;
        return (
            <div className="row">
             <Navtab auth={this.props.auth} socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                <Sidebar match={this.props.match}/>
                <div className="col-sm-9 x-right-grid" style={{paddingTop:"15px"}}>
                    <Switch>
                    <Route  path={`${this.props.match.url}/post`} render={(props)=><Post {...this.props} /> } />
                    <Route  path="/" render={(props)=><Home  {...this.props} posts={this.state.posts} />} />
                    </Switch>
                </div>
            </div>
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                        {/* <Conversation auth={this.props.auth} socket={this.props.socket}/> */}
                        <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
              
            </div>
        );
    }
}

export default connect(mapStateToProps)(Page);