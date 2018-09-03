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
import Bggroup from "../extras/bggroup"
import Media from "./media"
import Timeline from './timeline';
import About from "./about"
import Members from "./members"
import Membersrequest from './membersrequest';
import Private from "./private"
import Groupintro from "../extras/groupintro"
import Grouppost from './grouppost';

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}


class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            group: {posts:[],creatorID:{},members:[]},
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
        axios.get(`${apiUrl}/api/fetchGroupById?id=${this.props.match.params.id}`).then((res) => {
            if(res.data.group){
                var images = res.data.group.posts.filter((post)=>post.type ==="image")
                var video = res.data.group.posts.filter((post)=>post.type ==="video")
                console.log(res)
            this.setState({ group: res.data.group, isLoading: false,video,images });
            }
         else this.setState({empty:true})
        });
    }
    render() {
        var {images,video} =this.state;
        return (
            <div className="row">
                
                <Sidebar match={this.props.match}/>
               
                <div className="col-sm-9 x-right-grid">
             
                <Bggroup group={this.state.group} socket={this.props.socket} match={this.props.match}/>
                <div className="row">
              <div className="col-sm-4">
              <Groupintro group={this.state.group} auth={this.props.auth}/>
              {/* <Photos {...this.props} /> */}
  
            <div className="white">
            <Player
                          playsInline
                            src={"../../video/scott.mp4"}
                           />
                <div   style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>Advertise your business here</div>
            </div>
            <div className="row white" style={{marginTop:"15px"}}>
                <div className="col-xs-12 zero">
                    <img src="../../images/img.jpg" width="100%" alt=""/>
                </div>
                
                <div className="col-xs-12 "  style={{padding:"10px",fontSize:"0.9em",fontFamily:"sans-serif"}}>
                <div>Advertise your business here</div>
                    
                </div>
                
            </div>
             
              </div>
              <div className="col-sm-8" style={{paddingLeft:"0px"}}>
              <Grouppost {...this.props}/>

                <Switch>
                <Route  path={`${this.props.match.url}/about`} render={(props)=><About group={this.state.group}/> } />
                <Route  path={`${this.props.match.url}/members`} render={(props)=><Members members={this.state.group.members} creatorID={this.state.group.creatorID} groupID={this.state.group._id} {...this.props}/>} />
                <Private  path={`${this.props.match.url}/membersRequest`} component={Membersrequest} group={this.state.group} /> 
                <Route  path={`${this.props.match.url}/media`} render={(props)=><Media {...this.props} images={images} videos={video}/> } />
                <Route  path="/" render={(props)=><Timeline  {...this.props} group={this.state.group} />} />
                </Switch>

                </div>
                </div>
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
                            // background: url("${this.state.group.dpUrl}");
                            background: url('${this.state.group.dpUrl || "../../../../images/avatar.jpg"}');
                             border-radius: 100%;
                             background-position: center;
                             background-size: contain;
                        }
                        .video-react-big-play-button.video-react-big-play-button-left.big-play-button-hide{
                            font-size:1em !important
                          }
                          .video-react-big-play-button.video-react-big-play-button-left{
                            font-size:1em !important
                          }
                        `}
                            </style>
                            <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Room);