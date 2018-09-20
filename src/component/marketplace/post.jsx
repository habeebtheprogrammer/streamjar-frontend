import React, { Component } from 'react';
import { Link } from "react-router-dom"
import classnames from "classnames";
import FileUpload from "react-fileupload"
import apiUrl from "../../config"
import axios from "axios"
import list from "../extras/sections"
import Intro from "../extras/intro"
import Navfooter from '../extras/navfooter';
import Trendingwidget from '../extras/trending';
import Relatedusers from '../extras/relatedusers';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state ={
            modal:false,
            description:"",
            title:"",
            section:"",
            error:"",
            success:"",
            fileName:"",
            progress:"",
        }
        this.typing = this.typing.bind(this)
        this.submitPost = this.submitPost.bind(this)
    }
    componentWillMount() {
   
    }
    typing(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitPost(e){
        e.preventDefault();
        var token = window.localStorage.getItem("kaytoken");
        var {title,description,section} = this.state
        axios.post(`${apiUrl}/api/sectionPost`,{username:this.props.auth.user.username, userID: this.props.auth.user.id, description,title,section}).then((res)=>{
            if(res.data.success) window.location.reload();
            else this.setState({error:"an error has occured."})
        })
    }

    render() {
        var {title,description,section} = this.state

        return (
            <div className="row">
                   
            <div className="col-sm-4">
            {/* <Trendingwidget /> */}
            <div className="left-grid white" >
            <Relatedusers auth={this.props.auth}/>
            </div>
            <Navfooter />
            </div>
            <div className="col-sm-8" style={{paddingLeft:"0px"}}>
            {/* <img src="../../images/slide3.jpg" height="300" className="img-responsive" alt="Image" /> */}

 <div className="x-post white" style={{paddingBottom:"0px"}}>
 <div className="">
<div> <div className="image">
<img src={`${this.props.auth.user.username}||"../../../../images/genu.jpg`} style={{width:"100%",borderRadius:"100px"}} alt="img" />
</div> <div className="image-text">
<div className="title"><Link to={`/profile/${this.props.auth.user.username}`}>{this.props.auth.user.fullName}</Link>
 {/* <i className="fa fa-check-circle" style={{color:"#337ab7"}}></i> <small>{item.username==="reactpro"?"C.E.O":"Follow"}</small> */}

</div>
<div style={{color:"grey"}}> Interesting stories get picked by our editorial team</div>
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
                {/* <div className="col-sm-2">
                   <b>Section</b>
                </div> */}
                
                <div className="col-sm-12 zero" style={{marginBottom:"15px"}}>
                        
                                <select name="section" onChange={this.typing} id="input" className="form-control" >
                                    <option value="">-- Select One --</option>
                                    {list.map((section)=><option value="" value={section.url}>{section.title}</option>)}
                                </select>
                        
                        
                </div>
                {/* <div className="col-sm-2" >
                   <b>Description </b>
                </div> */}
                
                <div className="col-sm-12 zero">

                    <textarea name="description" style={{border:"1px solid #e8e8e8"}} onChange={this.typing}  ></textarea>
                </div>
            <div className="col-sm-12  zero" > 
            {this.state.progress !==""?
                <div><i className="fa fa-spin fa-spinner"></i></div>
            :
            <FileUpload options={{
                    baseUrl: `${apiUrl}/api/uploadPictures`,
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
                            this.setState({error:"The video size should not exceed 1mb"})
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

                    paramAddToField: {description,section,title}
                }}>   
            
            {this.state.fileName !== "" || this.state.error !== "" ?
            <div > 
             {this.state.fileName?<small className="grey-text ">You have choosen {this.state.fileName} </small> :
             <small className="grey-text "> {this.state.error} </small> }

            </div>:null
         }
           <button  ref="chooseBtn"  className={classnames(this.state.fileName?"hide":"btn btn-default btn-xs")} style={{padding:"40px",marginTop:"15px"}}> <i className="fa fa-plus fa-1x"></i> </button> <br />
       
           {this.state.fileName === ""?
           <button onClick={this.submitPost} className="btn btn-danger btn-xs pull-right sendbtn" style={{marginLeft:"0px"}}>Post</button> 
            : 
            <button ref="uploadBtn" className="btn btn-danger btn-xs pull-right sendbtn" style={{marginLeft:"0px"}}>Post</button> }
            
        
                </FileUpload>
                }
     
            </div>
            {/* <div  className="col-sm-12" style={{borderTop:"1px solid #e8e8e8",paddingTop:"15px"}}>
            {this.state.fileName === ""?
           <button onClick={this.submitPost} className="btn btn-danger btn-xs pull-right sendbtn">Post</button> 
            : 
            <button ref="uploadBtn" className="btn btn-danger btn-xs pull-right sendbtn">Post</button> }
            
            </div> */}
            </div>
</div>

 </div>
 </div></div>
            </div>
        
        );
    }
}

export default Post;