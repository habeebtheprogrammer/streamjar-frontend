import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import FileUpload from "react-fileupload"
import classnames from "classnames"
import axios from "axios"
class Photocard extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            modal:false,
            description:"",
            error:"",
            success:"",
            fileName:"",
            progress:"",
            images:[]
        }
    }


    componentWillMount() {
        var { match} = this.props

        axios.get(`${apiUrl}/api/getImagesByUser?username=${match.params.id}`).then((res) => {
            if (res.data.success) {
                this.setState({ images: res.data.success })
            }
            else this.setState({ empty: true })

        })
    }

    render() {
        var me =localStorage.getItem("username")
        var token =localStorage.getItem("kaytoken")
             
        return (
            
            <div className="photocard white">
               <div className="title">  Photos 
               {me === this.props.user.username?  <button className="pull-right btn btn-default btn-xs grey-color" onClick={()=>this.setState({modal:true})}>upload images</button>:null}

               </div>
           <div className="content">
           
           <div className="row">
           {this.state.images.map((image)=>(
            <div className="col-sm-3" style={{padding:"10px"}}>
            <img src={image.imgUrl} width="100%" class="img-responsive" alt="Image" />
                </div>
           ))}
           </div>
           
           
           </div>

           <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "uploadmodal" }} little>
                            <div className="row white upload">
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> Upload Photo
                                {this.state.fileName !== "" ? <small className="grey-text pull-right">You have choosen {this.state.fileName} </small> : null}
                                {this.state.error !== "" ? <small className="grey-text pull-right"> {this.state.error} </small> : null}

                                </div>
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                    <div className="row">
                                    <div className="col-sm-2">
                                    <img src={this.props.user.dpUrl||"../../images/avatar.jpg"} width="30px" />

                                    </div>
                                    <div className="col-sm-10 zero">
                                        <textarea name="description" onChange={this.typing}  > Say something about this photo</textarea>
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
                                <style>{`
                          
                             .uploadmodal{
                                width:40% !important;
                                padding:0px !important;
                                margin:0px !important;
                            }
                            .uploadmodal img{
                                border-radius:100%;
                            }
                            .uploadBtn{
                                float:right
                            }
                        

            `}</style>
                               </div>
                        </Modal>
            </div>
        );
    }
}

export default Photocard;
