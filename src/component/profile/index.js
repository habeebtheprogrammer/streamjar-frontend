import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"
import { Player } from 'video-react';
import {Route ,Switch} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import classnames from "classnames"
import Audio from 'react-audioplayer';
import auth from "../../reducer/index"
import { setUserProfile, editUserProfile } from "../../actions/index"
import FileUpload from "react-fileupload"
import moment from "moment"
import $ from "jquery"
import Sidebar from "../navbar/sidebar"
import Loading from "../loader"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import Intro from "../extras/intro"
import Bgprofile from "../extras/bgprofile"
import Media from "./media"
import Timeline from './timeline';
import About from "./about"
import Friends from "./friends"
import Friendrequest from './friendrequest';
import Private from "./private"
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            user: {},
            empty:false,
            isLoading: true,
            images:[],
            video:[],
            friends:{list:[]}

        }

    }
    componentWillMount() {
        var token = localStorage.getItem("kaytoken");
        var username = localStorage.getItem("username")
        $.getJSON(`${apiUrl}/api/getuserbyid?id=${this.props.match.params.id}`, (res) => {
            console.log(res.user)
            if(res.user)
            this.setState({ user: res.user, isLoading: false });else this.setState({empty:true})
        });
        axios.get(`${apiUrl}/api/getTimeline?username=${this.props.match.params.id}`).then((res)=>{
            if(res.data.post) {
                var images = res.data.post.content.filter((post)=>post.type ==="image")
                var video = res.data.post.content.filter((post)=>post.type ==="video")
            this.setState({video,images});
            }
        })
        axios.get(`${apiUrl}/api/getFriends?username=${this.props.match.params.id}`).then((res)=>{
           if(res.data.friends)
            this.setState({friends:res.data.friends})
        })
    }
    render() {
        var {images,video} =this.state;
        var {friends} = this.state;
        return (
            <div className="row">
                
                <Sidebar match={this.props.match}/>
               
                <div className="col-sm-9 x-right-grid">
             
                <Bgprofile user={this.state.user} socket={this.props.socket}/>
                
                <Switch>
                <Route  path={`${this.props.match.url}/about`} render={(props)=><About {...this.props} user={this.state.user} images={images} /> } />
                <Route  path={`${this.props.match.url}/friends`} render={(props)=><Friends {...this.props}  user={this.state.user} images={images} friends={friends} />} />
                <Private  path={`${this.props.match.url}/friendRequests`} component={Friendrequest} {...this.props} images={images} friends={friends}  user={this.state.user} /> 
                <Route  path={`${this.props.match.url}/media`} render={(props)=><Media {...this.props} images={images} videos={video} user={this.state.user}/> } />
                <Route  path="/" render={(props)=><Timeline  {...this.props} user={this.state.user} images={images}/>} />
                </Switch>

                </div>
                <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                    <Relatedusers auth={this.props.auth}/>
                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
                <style>{`
                        .profile-pic{
                            // background: url("${this.state.user.dpUrl}");
                            background: url('${this.state.user.dpUrl || "../../../../images/avatar.jpg"}');
                             border-radius: 100%;
                             background-position: center;
                             background-size: contain;
                        }
                        `}
                            </style>
                            <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Profile);