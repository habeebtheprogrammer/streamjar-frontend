import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import axios from "axios"
class Creategroup extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            modal:false,
            uploading: false,
            title:"",
            error:""
            
        }
        this.typing = this.typing.bind(this)
        this.submit = this.submit.bind(this)
    }

componentWillMount() {
  
}
submit(e) {
    e.preventDefault();
    let token = localStorage.getItem("kaytoken")
    axios.post(`${apiUrl}/api/createGroup`, { "title": this.state.title, "token": token }).then((res) => {
        if (res.data.success) {
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
               <div  >
           {/* <p> <i className="fa fa-group fa-2x " > </i></p> */}
       <span onClick={()=>this.setState({modal: true})} className="" style={{cursor:"pointer"}}> <b>Create group</b>  </span>
           <span className="pull-right"> <i className="fa fa-pencil"></i></span>
            
            </div>
              <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "uploadmodal" }} little>
                            <div className="row white upload">
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> <b>Create a page</b>
                                {this.state.error !== "" ? <small className="grey-text pull-right"> {this.state.error} </small> : null}

                                </div>
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                    <div className="row">
                                    <div className="col-sm-2">
                                    <img src={this.props.auth.user.dpUrl||"../../images/avatar.jpg"} width="30px" />

                                    </div>
                                    <div className="col-sm-10 zero">
                                        <input name="title" onChange={this.typing} maxLength="40" placeholder="Title" /> 
                                    </div>
                              
                                    
                                    </div>
                                </div>
                            
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                {this.state.uploading?
                                    <div><i className="fa fa-spin fa-spinner"></i></div>
                                :
                               <div>
                               <button className="btn btn-danger btn-xs pull-right" onClick={this.submit}>Submit</button> 

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

export default Creategroup;
