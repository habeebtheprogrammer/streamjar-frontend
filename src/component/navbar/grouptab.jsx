import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import apiUrl from "../../config"
import classnames from "classnames"
class Grouptab extends Component {
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
        
    }
    render() {
        var me = localStorage.getItem("username")
        var {socket} = this.props.socket
        var username = this.props.user?this.props.user.username : this.state.user.username
        return (
            <div className="profile-tab">
                   
                    <div className="navbar" style={{marginBottom:"0px"}}>
               
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to={`/community/${this.props.match.params.id}`}>Timeline</Link>
                            </li>
                            <li>
                                <Link to={`/community/${this.props.match.params.id}/about`}>About</Link>
                            </li>
                            <li className="active">
                                <Link to={`/community/${this.props.match.params.id}/members`}>Members</Link>
                            </li>
                            <li>
                                <Link to={`/community/${this.props.match.params.id}/media`}>Media page</Link>
                            </li>
                            <li>
                                <Link to={`/community/${this.props.match.params.id}/conversation`}>Conversation</Link>
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
        );
    }
}

export default Grouptab;