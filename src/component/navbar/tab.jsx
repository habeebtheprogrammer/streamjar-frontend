import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import apiUrl from "../../config"
import classnames from "classnames"
import Modal from "react-responsive-modal"
import Postmodal from "../extras/postmodal"
import Conversation from "../extras/conversation"
import Creatable from "../search/select"
class Navtab extends Component {
    constructor(props){
        super(props);
        this.state={
            online:false,
            user:{},
            showOption:false,
            showOption2:false,
            showMesg:false,
            type:window.localStorage.getItem("searchSelector")||"people",
            modal:false,
            group:false,
            title:"",
        }
        this.option = this.option.bind(this)
        this.option2 = this.option2.bind(this)
        this.showMesg = this.showMesg.bind(this)
        this.select = this.select.bind(this)
        this.submit=this.submit.bind(this)
        this.typing = this.typing.bind(this)

    }   
    componentDidMount() {
        var socket = this.props.socket
        socket.emit("fetchuserlist")
        socket.on("disconnect",()=> this.setState({online:false}))
        socket.on("onlineusers", (onlineusers) => {
           var check = onlineusers.findIndex((user)=>user.username===this.props.auth.user.username);
            if(check !== -1) this.setState({online:true})
        })
    }
    option(){
        this.setState({showOption:!this.state.showOption})
    }
    option2(){
        this.setState({showOption2:!this.state.showOption2})
    }
    showMesg(){
        this.setState({showMesg:!this.state.showMesg})
    }
    typing(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    submit(e){
        e.preventDefault();
        window.location.assign(`/search?query=${this.state.title}&type=${this.state.type}`)
    }
    select(){
       var searchSelector = localStorage.setItem("searchSelector",this.state.type);
       if(this.state.type==="people") return <small style={{paddingRight:"10px"}}> People </small>
       else if(this.state.type==="community") return <small style={{paddingRight:"10px"}}> Community </small>
       else if(this.state.type==="thread") return <small style={{paddingRight:"10px"}}> Thread </small>
       else if(this.state.type==="items") return <small style={{paddingRight:"10px"}}> Marketplace </small>
        
    }
    render() {
        var url = new URL(window.location.href)
        var query = new URLSearchParams(url.search)
        var string = query.get("query")
        var me = localStorage.getItem("username")
        var username = this.props.user?this.props.user.username : this.state.user.username
        return (
            <div style={{zIndex:"10",position:"fixed",width:"100%",background:"#fff",borderBottom:"1px solid #e8e8e8"}}>
            <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "uploadmodal" }} little>
            <Postmodal auth={this.props.auth}/>
            </Modal>
            <div className="container">
            <div className="profile-tab x-inverse primary-nav" >
                      {/* <ul className={classnames("nav navbar-nav ")} style={{fontWeight:"800",fontSize:"1.5em"}}>
                            <li>
                                <Link to="#"><div >
                                    
                                    <i className="fa fa-twitter indianred-color"></i> iFlickr
                                    
                                </div></Link>
                            </li>
                        </ul> */}
                    <div className="navbar navbar-left" style={{marginBottom:"0px",width:"100%"}}>
                  <ul className={classnames("nav navbar-nav ")} style={{fontWeight:"800",fontSize:"1.5em"}}>
                            <li>
                                <Link to="#"><div >
                                    
                                    <i className="fa fa-twitter indianred-color"></i>iFlickr
                                    
                                </div></Link>
                            </li>
                        </ul>
                   <Creatable />
                    
                        <ul className="nav navbar-nav navbar-right zero">
                                 <li >
                                <Link to="#" onClick={this.option2} style={{fontWeight:"normal"}}  >Create</Link>
                                <div className={classnames("option-menu",this.state.showOption2?"":"hide")} style={{}}>
                                    <p ><Link to="/forum/thread">Thread</Link> </p>
                                    <p><Link to="/community/create" >Community</Link> </p>
                                    <p ><Link to="#">Product for sale </Link> </p>
                                </div>
                            </li>
                            
                            <li className="">
                                <Link to={`#`} className=""><span className="indianred-color" style={{fontSize:"1.1em"}}> <i className="fa fa-bell-o"></i> </span></Link>
                            </li>
                            <li className="">
                                <Link to={`#`} onClick={this.showMesg} ><span className="indianred-color" style={{fontSize:"1.1em"}}> <i className="fa fa-envelope-o"></i> </span></Link>
                                <div className={classnames("option-menu",this.state.showMesg?"":"hide")} style={{minWidth:"250px"}}>
                                   <div className="left-grid">
                                    <Conversation auth={this.props.auth} socket={this.props.socket}/>
                                   </div>
                                </div>
                            </li>
                                <button onClick={()=>this.setState({modal:!this.state.modal})} className="btn btn-default nohover" style={{background:"indianred",color:"#fff",borderRadius:"100px",margin:"5px 20px"}}>Say something</button>
                            <li>
                    </li>
                        </ul>
                    </div>
                </div>
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
        );
    }
}

export default Navtab;