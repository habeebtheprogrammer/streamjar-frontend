
import React,{Component} from "react";
import classnames from "classnames";
import FileUpload from "react-fileupload"
import apiUrl from "../../config"
import axios from "axios"
class Uploaddp extends Component{
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
    componentWillMount() {
   
    }
    render(){
        var token = localStorage.getItem("kaytoken")
        return(
            <div className="row  upload changedp" style={{}}>
            {this.state.progress !==""?
                <div><i className="fa fa-spin fa-spinner"></i></div>
            :
            <FileUpload options={{
                    baseUrl: `${apiUrl}/api/uploadDp`,
                    param: {
                        fid: 0
                    },
                    chooseAndUpload: true,
                    accept: "image/*",
                    fileFieldName: "dp",
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
                    paramAddToField: { token: token}
                }}>   
            
           <button  ref="chooseAndUpload"  className={classnames(this.state.fileName?"hide":"btn btn-default btn-xs")}><i className="fa fa-camera"></i> Upload</button>
           
                </FileUpload>
                }
     
            </div>
    )
}
}
export default Uploaddp
