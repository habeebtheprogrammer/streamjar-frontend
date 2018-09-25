
import React,{Component} from "react";
import classnames from "classnames";
import FileUpload from "react-fileupload"
import apiUrl from "../../config"
import axios from "axios"
class Postmodal extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false,
            description:"",
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
        axios.post(`${apiUrl}/api/newsfeedPost`,{username:this.props.auth.user.username, userID: this.props.auth.user.id, description,title,section}).then((res)=>{
            if(res.data.success) window.location.reload();
            else this.setState({error:"an error has occured."})
        })
    }

    render(){
        var token = localStorage.getItem("kaytoken")
        var dpUrl = localStorage.getItem("dpUrl")
        return(
            <div className="row white upload" style={{marginBottom:"0px"}}>
            <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
            Update timeline
         {this.state.fileName !== "" || this.state.error !== "" ?

            <div className="pull-right">
            {this.state.fileName? <small className="grey-text ">You have choosen {this.state.fileName} </small> :null}
            <small className="grey-text"> {this.state.error} </small> 
        </div>:null}
            </div>
            <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                <div className="row">
                <div className="col-sm-2">
                <img src={dpUrl||"../../images/avatar.jpg"} width="30px" />
                </div>
                <div className="col-sm-10 zero">
                    <textarea name="description" onChange={this.typing}  >What is on your mind?</textarea>
                </div>
                </div>
            </div>
        
            <div className="col-sm-12 reactfileupload" style={{padding:"15px"}}> 
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
                    paramAddToField: { token: token,  description: this.state.description }
                }}>   
            
           <button  ref="chooseBtn"  className={classnames(this.state.fileName?"hide":"btn btn-default btn-xs")}>Choose image</button>
           {this.state.fileName === ""?
           <button onClick={this.submitPost} className="btn btn-danger btn-xs pull-right sendbtn" style={{marginLeft:"0px"}}>Post</button> 
            : 
            <button ref="uploadBtn" className="btn btn-danger btn-xs pull-right sendbtn" style={{marginLeft:"0px"}}>Post</button> }
            
            <button  className="btn btn-default btn-xs pull-right" >
            <i className="fa fa-globe"></i> Public 
            </button> 
                </FileUpload>
                }
     
            </div>
            </div>
    )
}
}
export default Postmodal
