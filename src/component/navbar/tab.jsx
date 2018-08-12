import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navtab extends Component {
    constructor(props){
        super(props);
        this.state={
            online:false
        }
    }
    componentWillMount() {
        var {socket} = this.props.socket
        socket.emit("fetchuserlist")
        socket.on("disconnect",()=> this.setState({online:false}))
    
        socket.on("onlineusers", (onlineusers) => {
           var check = onlineusers.findIndex((user)=>user.username===this.props.user.username);
            if(check !== -1) this.setState({online:true})
        })
    }
    render() {
        var me = localStorage.getItem("username")
        var {socket} = this.props.socket
        console.log(socket.connected)
        return (
            <div className="profile-tab">
                    
                    <div className="navbar" style={{marginBottom:"0px"}}>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to={`/profile/${this.props.user.username}`}>Timeline</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${this.props.user.username}/about`}>About</Link>
                            </li>
                            <li className="active">
                                <Link to={`/profile/${this.props.user.username}/friends`}>Friends</Link>
                            </li>
                            <li>
                                <Link to={`/profile/${this.props.user.username}/media`}>Media page</Link>
                            </li>
                            {this.props.user.username === me? null:
                            <li className="active">
                                <Link to={`/chat/${this.props.user.username}`}>Message</Link>
                            </li>}
                            {this.props.user.username === me? null:
                            <li>
                                <Link to={`/call/${this.props.user.username}`} target="_blank">Call</Link>
                            </li>}
                            {this.props.user.username !== me? null:
                            <li>
                                <Link to={`/call/${this.props.user.username}`} >Create a community</Link>
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