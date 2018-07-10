import React, { Component } from 'react';
import $ from "jquery"
import classnames from "classnames"
import axios from "axios"
import apiUrl from "../../config"
import socketIOClient from "socket.io-client"
import jwt from "jsonwebtoken"
class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allmesg: [],
            rloader: true,
        }
        this.messages = this.messages.bind(this)
    }

    componentWillMount() {
        axios.post(`${apiUrl}/api/conversation`, { username: this.props.auth.user.username }).then((res) => {
            if (res.data.allmesg) {
                this.setState({ allmesg: res.data.allmesg, rloader: false })
            }
        })

    }
    messages() {
        var div = [];
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        this.state.allmesg.map((msg, key) => {
            var length = msg.messages.length;
            var lastmsg=msg.messages[length - 1].text;
            var read = msg.messages[length - 1].receipt;
            
            div.push(<a className={classnames(this.state.rloader ? "hide" : null, read === "false" ? "unread" : "")} href={`/chat/${ msg.user1 === this.props.auth.user.username ? msg.user2 : msg.user1}`}>
                <div>
                    <div className="img">
                        <img src={`../../images/${imglist[key]}`} width="70%" className="img-responsive img-rounded" alt="Image" />
                    </div>
                    <div className="name">
                        {msg.user1===this.props.auth.user.username?msg.user2:msg.user1}<br />
                        {lastmsg}
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </a>)
        })
        return div
    }
    render() {

        // var socket = socketIOClient(apiUrl);
        // var decodedToken = jwt.decode(window.localStorage.kaytoken);
        // // socket.emit("fetchconversation",  this.props.auth.user.username )
        // socket.on(`conversation/${this.props.auth.user.username}`, (allmesg) => {
        //     this.setState({ allmesg })
        // })
        return (
            <div>
                <div style={{ padding: "20px" }}>Recent conversation</div>

                {this.state.rloader ? <center style={{ margin: "100px 0px" }}><i className="fa fa-spin fa-spinner"></i></center> : null}
                {this.messages()}
            </div>
        );
    }
}

export default Conversation;