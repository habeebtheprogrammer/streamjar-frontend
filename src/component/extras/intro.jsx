import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import axios from "axios"
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            modal:false,
            uploading: false,
            status:"",
            error:""
            
        }
        this.typing = this.typing.bind(this)
        this.postStatus = this.postStatus.bind(this)
    }

componentWillMount() {
  
}
postStatus(e) {
    e.preventDefault();
    let token = localStorage.getItem("kaytoken")
    axios.post(`${apiUrl}/api/postStatus`, { "status": this.state.status, "token": token }).then((res) => {
        if (res.data.status) {
           window.location.reload();
        }
    }).catch((err)=>this.setState({error:"An error has occured"}))

}
typing(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}
    render() {
        var me = localStorage.getItem("username")
        return (
            <div className="aboutcard white">
            <div className="title" >  About me {me === this.props.user.username?  <span className="edit-pencil pull-right" onClick={()=>this.setState({modal:true})}> <b><i className="fa fa-pencil"></i></b></span>:null}</div>
               
               <div className="row content">
                   <div className="col-sm-4 zero left-content">
                       <div> Overview</div>
                       <div style={{color:"black"}}> Description</div>
                       <div> Places his lived</div>
                       <div> Basic Contact</div>
                       <div> Life Event</div>
                   </div>
                   <div className="col-sm-8 zero right-content">
                   <div>
                   {this.props.user.status}
                      </div> 
                       </div>
               </div>
               <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "uploadmodal" }} little>
                            <div className="row white upload">
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> Update status
                                {this.state.error !== "" ? <small className="grey-text pull-right"> {this.state.error} </small> : null}

                                </div>
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                    <div className="row">
                                    <div className="col-sm-2">
                                    <img src={this.props.auth.user.dpUrl||"../../images/avatar.jpg"} width="30px" />

                                    </div>
                                    <div className="col-sm-10 zero">
                                        <textarea name="status" onChange={this.typing}  > What is on your mind?</textarea>
                                    </div>
                              
                                    
                                    </div>
                                </div>
                            
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                {this.state.uploading?
                                    <div><i className="fa fa-spin fa-spinner"></i></div>
                                :
                               <div>
                               <button className="btn btn-danger btn-xs pull-right" onClick={this.postStatus}>Post</button> 

                                <button  className="btn btn-default btn-xs pull-right" >
                                <i className="fa fa-globe"></i> Public 
                                </button> 
                                </div>
                                }
                                </div>
                               </div>
                        </Modal>
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
            // <div className="wildcard white">
            //    <div className="title"> <i className="fa fa-globe"></i> Intro  {me === this.props.user.username?  <span className="edit-pencil pull-right" onClick={()=>this.setState({modal:true})}> <b><i className="fa fa-pencil"></i></b></span>:null}</div>
            //         <div className="content" >
            //         <center>
            //             {this.props.user.status}
            //         </center>
            //         </div>

            //   <div className="content" style={{borderTop:"1px solid #d9d9d9"}}>
            //  <div> <div className="icon"><i className="fa fa-graduation-cap"></i> </div> <div className="icon-text">Studies {this.props.user.department} at {this.props.user.university} </div> </div>
            //  <div> <div className="icon"><i className="fa fa-home"></i> </div> <div className="icon-text">from </div></div>
            //  <div> <div className="icon"><i className="fa fa-heart"></i> </div> <div className="icon-text">Single </div></div>
            //  <div> <div className="icon"><i className="fa fa-users"></i> </div> <div className="icon-text">Followed by  </div></div>
            //  <div className="clearfix"></div>
            //   </div>
            //   <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "uploadmodal" }} little>
            //                 <div className="row white upload">
            //                     <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> Update status
            //                     {this.state.error !== "" ? <small className="grey-text pull-right"> {this.state.error} </small> : null}

            //                     </div>
            //                     <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
            //                         <div className="row">
            //                         <div className="col-sm-2">
            //                         <img src={this.props.auth.user.dpUrl||"../../images/avatar.jpg"} width="30px" />

            //                         </div>
            //                         <div className="col-sm-10 zero">
            //                             <textarea name="status" onChange={this.typing}  > What is on your mind?</textarea>
            //                         </div>
                              
                                    
            //                         </div>
            //                     </div>
                            
            //                     <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
            //                     {this.state.uploading?
            //                         <div><i className="fa fa-spin fa-spinner"></i></div>
            //                     :
            //                    <div>
            //                    <button className="btn btn-danger btn-xs pull-right" onClick={this.postStatus}>Post</button> 

            //                     <button  className="btn btn-default btn-xs pull-right" >
            //                     <i className="fa fa-globe"></i> Public 
            //                     </button> 
            //                     </div>
            //                     }
            //                     </div>
            //                    </div>
            //             </Modal>
            //             <style>{`
                           
            //                  .uploadmodal{
            //                     width:40% !important;
            //                     padding:0px !important;
            //                     margin:0px !important;
            //                 }
            //                 .uploadmodal img{
            //                     border-radius:100%;
            //                 }
            //                 .uploadBtn{
            //                     float:right
            //                 }
                        

            // `}</style>
            // </div>
        );
    }
}

export default Intro;
