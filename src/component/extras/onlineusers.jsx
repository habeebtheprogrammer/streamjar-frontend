import React, { Component } from 'react';
import $ from "jquery"
import classnames from "classnames"
import apiUrl from "../../config"
// import socketIOClient from "socket.io-client"
import jwt from "jsonwebtoken"
class Onlineusers extends Component {
    constructor(props) {
        super(props);
        this.state ={
        onlineusers: [],
            rloader: true,
        }
    }

componentDidMount() {
    var username = localStorage.getItem("username")
    console.log(this.props.socket,username)

    var socket = this.props.socket
    var decodedToken = jwt.decode(window.localStorage.kaytoken);
    socket.on("onlineusers", (onlineusers) => {
        var list = onlineusers.filter((user)=>user.username !== username)
        this.setState({ onlineusers:list })
    })
    socket.on("disconnect",()=>this.setState({onlineusers:[]}))
}

    render() {
        return (
            <div>
                <div style={{ padding: "20px" }}>Members online</div>

                {/* {this.state.rloader ? <center style={{ margin: "100px 0px" }}><i className="fa fa-spin fa-spinner"></i></center> : null} */}
                {this.state.onlineusers.map((member, key) => (
                    <a  href={`/profile/${member.username}`} >
                        <div className="changebg" style={{padding:"10px 10px"}}>
                            <div className="img">
                                <img src={member.dpUrl || "../../../../images/avatar.jpg"} width="70%" className="img-responsive img-rounded" alt="Image" />
                            </div>
                            <div className="name" >
                             {member.username} <span className="online pull-right"style={{paddingTop:"1px"}} ><i className="fa fa-circle" style={{fontSize:"0.7em"}}></i> 
                                </span>
                            </div>
                            <div className="clearfix"> </div>
                        </div>


                    </a>
                ))}
            </div>
        );
    }
}

export default Onlineusers;
