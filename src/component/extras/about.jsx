import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import axios from "axios"
import classnames from "classnames"
import {Link,Switch,Route} from "react-router-dom"
import {Status,Interest,Knowledge,Languages} from "./aboutitems"
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
        console.log(this.props)
        var me = localStorage.getItem("username")
        return (
            <div className="aboutcard white">
            <div className="title" >  About me </div>
               
               <div className="row content">
                   <div className="col-sm-4 zero left-content">
                       <div >
                       <Link to={`${this.props.match.url}/about`} className={classnames(this.props.location.pathname===`${this.props.match.url}/about`?"active":null)}>Status </Link>
                       {me === this.props.user.username && this.props.location.pathname===`${this.props.match.url}/about`?  <span className="edit-pencil pull-right" onClick={()=>this.setState({modal:true})}> <b><i className="fa fa-pencil"></i></b></span>:null}
                       </div>
                       <div> 
                           <Link to={`${this.props.match.url}/about/interest`}  className={classnames(this.props.location.pathname===`${this.props.match.url}/about/interest`?"active":null)}>Things i am interested in</Link>
                           {me === this.props.user.username && this.props.location.pathname===`${this.props.match.url}/about/interest`?  <span className="edit-pencil pull-right" onClick={()=>this.setState({modal:true})}> <b><i className="fa fa-pencil"></i></b></span>:null}
                           </div>
                       <div><Link to={`${this.props.match.url}/about/knowledge`}  className={classnames(this.props.location.pathname===`${this.props.match.url}/about/knowledge`?"active":null)}> Things i know very well</Link></div>
                       <div><Link to={`${this.props.match.url}/about/languages`}  className={classnames(this.props.location.pathname===`${this.props.match.url}/about/languages`?"active":null)}>Languages i am fluent in </Link></div>
                       <div> Educational background</div>
                       <div> Work experience</div>
                       <div> Skillset </div>
                       <div> Basic Contact</div>
                   </div>
                   <div className="col-sm-8 zero right-content">
                   <div>
                       <Switch>
                           <Route exact path={`${this.props.match.url}/about/interest`} render={(props)=><Interest interest={[1,34,5]} />} />
                           <Route exact path={`${this.props.match.url}/about/knowledge`} render={(props)=><Knowledge knowledge={[1,34,5,4,5]} />} />
                           <Route exact path={`${this.props.match.url}/about/languages`} render={(props)=><Languages languages={[1,5,53,2,3,5]} />} />
                           <Route exact path={`${this.props.match.url}/about`} render={(props)=><Status status={this.props.user.status}/>} />

                       </Switch>
                   {/* {this.props.user.status} */}
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
                           .aboutcard a{
                               color:grey;
                           }
                           .aboutcard a.active{
                               color:black;
                                font-weight:bold;
                                font-size:1.1em
                           }
                           .edit-pencil{
                               color:black
                           }

            `}</style>
         </div>
        );
    }
}

export default Intro;
