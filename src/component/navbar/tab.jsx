import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import apiUrl from "../../config"
import classnames from "classnames"
class Navtab extends Component {
    constructor(props){
        super(props);
        this.state={
            online:false,
            user:{},
            showOption:false,
            type:"people",
            group:false,
            title:"",
        }
        this.option = this.option.bind(this)
        this.select = this.select.bind(this)
        this.submit=this.submit.bind(this)
        this.typing = this.typing.bind(this)

    }   
    option(){
        this.setState({showOption:!this.state.showOption})
    }
    typing(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    submit(e){
        e.preventDefault();
        window.location.assign(`/search?query=${this.state.title}&type=${this.state.type}`)
    }
    select(){
       if(this.state.type==="people") return <small style={{paddingRight:"10px"}}> People </small>
       else if(this.state.type==="groups") return <small style={{paddingRight:"10px"}}> Community </small>
       else if(this.state.type==="posts") return <small style={{paddingRight:"10px"}}> Posts </small>
       else if(this.state.type==="items") return <small style={{paddingRight:"10px"}}> Marketplace </small>
        
    }
    render() {
        var me = localStorage.getItem("username")
        var username = this.props.user?this.props.user.username : this.state.user.username
        return (
            <div style={{zIndex:"1024",position:"fixed",width:"100%"}}>
            <div className="profile-tab x-inverse primary-nav" >
                      <ul className={classnames("nav navbar-nav ")} style={{fontWeight:"800",fontSize:"1.5em"}}>
                            <li>
                                <Link to="#"><div >
                                    
                                    <i className="fa fa-twitter indianred-color"></i> iFlickr
                                    
                                {/* <img src="../../../../../images/logo-04.png" alt="" width="60px"/> */}
                                </div></Link>
                            </li>
                       

                        </ul>
                      
                        
                    <div className="navbar" style={{marginBottom:"0px"}}>
                    <form onSubmit={this.submit} className="navbar-left" style={{paddingTop:"5px",position:'relative'}}>
                         <input name="title" onChange={this.typing} type="text"style={{width:"350px",border:"1px solid #e8e8e8",background:"#f8fafc"}} className="form-control" placeholder="Search" />
                        <div className="navsearch-btn showOptionBtn" onClick={this.option} >
                         <span className="caret"></span> {this.select()}
                         </div>
                        <div className={classnames("option-menu",this.state.showOption?"":"hide")} style={{background:"#fff",position:"absolute",marginTop:"0px",right:0,border:"1px solid #e8e8e8",padding:"10px 10px",fontSize:"0.8em"}}>
                        <p><Link to="#" onClick={()=>this.setState({type:"people",showOption:false})}>Search for people </Link> </p>
                        <p><Link to="#" onClick={()=>this.setState({type:"posts",showOption:false})}> Search for posts </Link> </p>
                        <p><Link to="#" onClick={()=>this.setState({type:"groups",showOption:false})}> Search for community </Link> </p>
                        <p><Link to="#" onClick={()=>this.setState({type:"items",showOption:false})}>Search for items </Link> </p>
                        <p><Link to="#" onClick={()=>this.setState({type:"places",showOption:false})}>Search for places </Link> </p>
                        <p><Link to="#" onClick={()=>this.setState({type:"events",showOption:false})}>Search for events </Link> </p>
                    </div>
                    </form>


                        <ul className="nav navbar-nav navbar-right zero">
                      
                                 <li >
                                <Link to={`/create`} style={{fontWeight:"normal"}}  >Create</Link>
                            </li>
                            <li className="">
                                <Link to={`/forum/Notification`} className=""><span className="indianred-color" style={{fontSize:"1.1em"}}> <i className="fa fa-bell-o"></i> </span></Link>
                            </li>
                            <li className="">
                                <Link to={`/forum/Notification`}><span className="indianred-color" style={{fontSize:"1.1em"}}> <i className="fa fa-envelope-o"></i> </span></Link>
                            </li>
                                <button  className="btn btn-default nohover" style={{background:"indianred",color:"#fff",borderRadius:"100px",margin:"5px 100px 5px 20px"}}>Say something</button>
                            <li>
                        <Link to={`/profile/fppost`} style={{fontWeight:"normal"}}>NG <i className="caret"></i>
                        </Link>
                    </li>]
                        </ul>
                    </div>
                </div>
                </div>
        );
    }
}

export default Navtab;