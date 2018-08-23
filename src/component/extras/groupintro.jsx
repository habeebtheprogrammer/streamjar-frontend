import React, { Component } from 'react';
import apiUrl from "../../config"
import moment from "moment"
import Modal from "react-responsive-modal"
import axios from "axios"
class Groupintro extends Component {
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

postStatus(e) {
    e.preventDefault();
    let token = localStorage.getItem("kaytoken")
    axios.post(`${apiUrl}/api/postGroupStatus`, { "status": this.state.status, "token": token }).then((res) => {
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
        return (
            
            <div className="wildcard white">
               <div className="title"> <i className="fa fa-globe"></i> Intro  {this.props.group.creatorID._id === this.props.auth.user.id?  <span className="edit-pencil pull-right" onClick={()=>this.setState({modal:true})}> <b><i className="fa fa-pencil"></i></b></span>:null}</div>
                    <div className="content" >
                    <center>
                        {this.props.group.status}
                    </center>
                    </div>

              <div className="content" style={{borderTop:"1px solid #d9d9d9"}}>
             <div> <div className="icon"><i className="fa fa-home"></i> </div> <div className="icon-text">privacy public</div></div>
             <div> <div className="icon"><i className="fa fa-heart"></i> </div> <div className="icon-text">created on {moment(this.props.group.date).calendar()} </div></div>
             <div> <div className="icon"><i className="fa fa-users"></i> </div> <div className="icon-text">Followed by  {this.props.group.members.length} members</div></div>
             <div className="clearfix"></div>
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
        );
    }
}

export default Groupintro;
