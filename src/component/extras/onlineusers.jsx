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

componentWillMount() {
    
    var {socket} = this.props.socket
    var decodedToken = jwt.decode(window.localStorage.kaytoken);
    socket.emit("fetchuserlist")
    // socket.emit("initialize", decodedToken.id, decodedToken.fullName, decodedToken.department)
    socket.on("onlineusers", (onlineusers) => {
        this.setState({ onlineusers })
    })
}

    render() {
     
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
      
        return (
            <div>
                <div style={{ padding: "20px" }}>Members online</div>

                {/* {this.state.rloader ? <center style={{ margin: "100px 0px" }}><i className="fa fa-spin fa-spinner"></i></center> : null} */}
                {this.state.onlineusers.map((member, key) => (
                    <a  href={`/profile/${member.username}`}>
                        <div>
                            <div className="img">
                                <img src={`../../images/${imglist[key]}`} width="70%" className="img-responsive img-rounded" alt="Image" />
                            </div>
                            <div className="name">
                                {member.fullName}<br />
                                <small className="online"> online</small>
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
