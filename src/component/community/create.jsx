import React, { Component } from 'react';
import Intro from "../extras/about"
import Photos from "../extras/photos"
import Footer from "../footer/index"
import Sidebar from "../navbar/sidebar"
import FileUpload from "react-fileupload"
import $ from "jquery"
import Relatedusers from "../extras/relatedusers"
import Conversation from "../extras/conversation"
import Onlineusers from "../extras/onlineusers"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"
import { Player } from 'video-react';
import apiUrl from "../../config"
import Navtab from "../navbar/tab"
import Shuffle from "shuffle-array"
import classnames from "classnames"
import jwt from "jsonwebtoken"
import Recentpost from "../extras/recentpost"
import Navfooter from '../extras/navfooter';
class Create extends Component {
    constructor(props) {
        super(props);
        this.state ={
            description:"",
            title:"",
            fileName:"",
            progress:""
        }
    }
    componentWillMount() {
       
    }
    componentDidMount() {
        $(".fileupload-btn").parent().addClass("block")
    }
    componentDidUpdate() {
        $(".fileupload-btn").parent().addClass("block")
         }
    render() { 
        var {title,description} = this.state;
        var token = window.localStorage.getItem("kaytoken")
        return (
            <div className="row">
                          <Navtab auth={this.props.auth} socket={this.props.socket} match={this.props.match}/>
            <div style={{paddingTop:"40px"}}>
                
            <Sidebar match={this.props.match}/>
           
            <div className="col-sm-9 x-right-grid" style={{paddingTop:"15px"}}>
           
            <div className="row">
            <div className="col-sm-4">
            <div className="left-grid white" >
            <Relatedusers auth={this.props.auth}/>
            </div>
            <Navfooter />
            </div>
            <div className="col-sm-8 " style={{marginTop:"0px",paddingLeft:"0px"}}>
            <div className="x-post white" style={{paddingBottom:"0px"}}>
 <div className="">
<div> <div className="image">
<img src={`${this.props.auth.user.username}||"../../../../images/genu.jpg`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
</div> <div className="image-text">
<div className="title"><Link to={`/profile/${this.props.auth.user.username}`}>{this.props.auth.user.fullName}</Link>
 {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}

</div>
<div style={{color:"grey",fontSize:"0.9em"}}> Create a community</div>
</div>

</div>

<div className="clearfix"></div>
<div className="content" style={{paddingBottom:"0px",fontSize:"1em"}}>
<div className="row  forumupload">
{/*   
                
                <div className="col-sm-2">
                  <b>Title</b>
                </div>
                 */}
                <div className="col-sm-12 zero" style={{marginBottom:"15px"}}>
                        <input type="text" name="Title"  placeholder="Title" onChange={this.typing} className="form-control"   />
                </div>
                
                <div className="col-sm-12 zero">

                    <textarea name="description" style={{border:"1px solid #e8e8e8"}} onChange={this.typing}  ></textarea>
                </div>
            <div className="col-sm-12  zero" > 
            {this.state.progress !==""?
                <div><i className="fa fa-spin fa-spinner"></i></div>
            :
            <FileUpload options={{
                    baseUrl: `${apiUrl}/api/createCommunity`,
                    param: {
                        fid: 0
                    },
                    chooseAndUpload: false,
                    accept: "image/*",
                    fileFieldName: "picture",
                    uploadSuccess: function (resp) {
                        if (resp.error) this.setState({ error: resp.error, progress: "", fileName: "" })
                        else window.location.reload();
                    }.bind(this),
                    uploadError: function (err) {
                        this.setState({ error: "An error has occured, please try again later", progress: "", fileName: "" })
                    }.bind(this),
                   
                    chooseFile: function (files) {
                        if(files[0].size>1250810) {
                            this.setState({error:"The image size should not exceed 1mb"})
                        }else
                        this.setState({ fileName: files[0].name, error: "", success: "" })
                    }.bind(this),
                    uploadFail: function (err) {
                        console.log(err)
                        this.setState({ error: "An error has occured, please try again later", progress: "", fileName: "" })
                    }.bind(this),
                    uploading: function (progress) {
                        this.setState({ progress: progress.loaded / progress.total, error: "" })
                        console.log("loading...", progress.loaded / progress.total, "%")
                    }.bind(this),
                    paramAddToField: {description,title,token}
                }}>   
            
            {this.state.fileName !== "" || this.state.error !== "" ?
            <div > 
             {this.state.fileName?<small className="grey-text ">You have choosen {this.state.fileName} </small> :
             <small className="grey-text "> {this.state.error} </small> }
            </div>:null
         }
           <button  ref="chooseBtn"  className={classnames(this.state.fileName?"hide":"btn btn-default btn-xs ")}>Display image</button>
            <button ref="uploadBtn" className="btn btn-danger btn-xs sendbtn pull-right fileupload-btn" style={{marginLeft:"0px",marginTop:"15px"}}>Post</button>
                </FileUpload>
                }
     
            </div>
            </div>
</div>

 </div>
 </div>
            
            </div>
            </div>
            </div>
            <div className=" col-sm-2 zero left-grid hidden-xs ">
                    <div className="col-right white" style={{ borderLeft:"1px solid #e8e8e8 ",    position: "fixed",width: "inherit"}}>
                    <Onlineusers auth={this.props.auth} socket={this.props.socket}/>
                    </div>
                </div>
            </div>
            </div>
        
        );
    }
}

export default Create