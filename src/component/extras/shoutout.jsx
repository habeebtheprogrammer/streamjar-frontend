import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import axios from "axios"
class Shoutoutbox extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            modal:false,
            uploading: false,
            shoutout:"",
            error:""
            
        }
        this.typing = this.typing.bind(this)
        this.postShoutout = this.postShoutout.bind(this)
    }

componentWillMount() {
  
}
postShoutout(e) {
    e.preventDefault();
    let token = localStorage.getItem("kaytoken")
    axios.post(`${apiUrl}/api/postShoutout`, { "shoutout": this.state.shoutout, "token": token }).then((res) => {
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
        var me = localStorage.getItem("username")
        return (
            
            <div className="wildcard ">
               <div  onClick={()=>this.setState({modal: true})} className="" style={{padding:"50px 10px",textAlign:"center",cursor:"pointer"}}>
           <p> <i className="fa fa-bullhorn fa-5x fa-spin" > </i></p>
            <p><b>POST A SHOUTOUT</b></p>
            </div>
              <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "uploadmodal" }} little>
                            <div className="row white upload">
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> <b>Shoutout</b>
                                {this.state.error !== "" ? <small className="grey-text pull-right"> {this.state.error} </small> : null}

                                </div>
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                    <div className="row">
                                    <div className="col-sm-2">
                                    <img src={this.props.auth.user.dpUrl||"../../images/avatar.jpg"} width="30px" />

                                    </div>
                                    <div className="col-sm-10 zero">
                                        <input name="shoutout" onChange={this.typing} maxLength="20" placeholder="Say something" /> 
                                    </div>
                              
                                    
                                    </div>
                                </div>
                            
                                <div className="col-sm-12" style={{border:"1px solid #e8e8e8",padding:"15px"}}> 
                                {this.state.uploading?
                                    <div><i className="fa fa-spin fa-spinner"></i></div>
                                :
                               <div>
                               <button className="btn btn-danger btn-xs pull-right" onClick={this.postShoutout}>Post</button> 

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

export default Shoutoutbox;
