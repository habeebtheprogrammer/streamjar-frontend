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
            user:{}
        }
    }
    componentWillMount() {
        var {socket} = this.props.socket
        var username; 
        if(this.props.user){
          username= this.props.user.username;
        }else{
            username=localStorage.getItem("username")
            axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
                if(res.data.user)
                this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
            });
        }
        socket.emit("fetchuserlist")
        socket.on("disconnect",()=> this.setState({online:false}))
        socket.on("onlineusers", (onlineusers) => {
           var check = onlineusers.findIndex((user)=>user.username===username);
            if(check !== -1) this.setState({online:true})
        })
        
    }
    render() {
        console.log(this.props)
        var me = localStorage.getItem("username")
        var {socket} = this.props.socket
        var username = this.props.user?this.props.user.username : this.state.user.username
        return (
            <div className="profile-tab" >
                      {/* {this.props.match?   <ul className={classnames("nav navbar-nav ")} style={{position:"absolute",left:0,fontWeight:"800",fontSize:"1.5em"}}>
                            <li>
                                <Link to="#"><div >Kampus<span style={{color:"red"}}>Konnect</span></div></Link>
                            </li>
                            
                        </ul>:null} */}
                    <div className="navbar " style={{marginBottom:"0px",borderBottom:"1px solid #e8e8e8"}}>
                        
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to={`/profile/${username}`}>Timeline</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${username}/about`}>About</Link>
                            </li>
                            <li className="active">
                                <Link to={`/profile/${username}/friends`}>Friends</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${username}/media`}>Media page</Link>
                            </li>
                            {username === me? null:
                            <li className="active">
                                <Link to={`/chat/${username}`}>Message</Link>
                            </li>}
                            {username === me? null:
                            <li>
                                <Link to={`/call/${username}`} target="_blank">Call</Link>
                            </li>}
                            {username !== me? null:
                            <li>
                                <Link to={`/groups`} > Groups</Link>
                            </li>}
                            {username !== me? null:
                            <li>
                                <Link to={`/notification`} > Notifications</Link>
                            </li>}
                        </ul>
                        <ul className="nav navbar-nav navbar-right" style={{margin:"0px"}}>
                            {socket.connected?
                            <li>
                                <Link to="#"><span className="online"><i className="fa fa-circle"></i> Online</span></Link>
                            </li>:
                             <li>
                             <Link to="#"><span className="offline"><i className="fa fa-circle"></i> Offline</span></Link>
                         </li>
                            }
                        </ul>
                    </div>
                    
                </div>
        );
    }
}

export default Navtab;