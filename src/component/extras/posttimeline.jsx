
import React,{Component} from "react";
import classnames from "classnames";
import FileUpload from "react-fileupload"
import apiUrl from "../../config"

class Posttimeline extends Component{
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
    }

    render(){
        var token = localStorage.getItem("kaytoken")
        return(
            <div className="row white upload" style={{marginBottom:"15px"}}>
         {this.state.fileName !== "" || this.state.error !== "" ?
            <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
             <small className="grey-text pull-right">You have choosen {this.state.fileName} </small> 
            <small className="grey-text pull-right"> {this.state.error} </small> 

            </div>:null
         }
            <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                <div className="row">
                <div className="col-sm-2">
                <img src={this.props.user.dpUrl||"../../images/avatar.jpg"} width="30px" />

                </div>
                <div className="col-sm-10 zero">
                    <textarea name="description" onChange={this.typing}  >What is on your mind?</textarea>
                </div>
          
                
                </div>
            </div>
        
            <div className="col-sm-12 reactfileupload" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
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

                    paramAddToField: { token: token,  description: this.state.description }
                }}>   
            
           <button  ref="chooseBtn"  className={classnames(this.state.fileName?"hide":"btn btn-default btn-xs")}>Choose image</button>
           <button ref="uploadBtn" className="btn btn-danger btn-xs pull-right">Post</button> 

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
export default Posttimeline
