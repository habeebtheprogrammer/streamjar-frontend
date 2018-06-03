import React, { Component } from 'react';
import $ from "jquery"
import classnames from "classnames"
import apiUrl from "../../config"

class Relatedusers extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
        }
    }

componentWillMount() {
    $.getJSON(`${apiUrl}/api/relatedusers?dept=${this.props.auth.user.department}&uni=${this.props.auth.user.university}`, (res) => {
            if (res.result) {

                this.setState({ relatedusers: res.result })
            }

            this.setState({ rloader: false })
    });
}

    render() {
        var imglist = ["john.jpg", "sonu.jpg", "genu.jpg", "govinda.jpg"]
        
        
        return (
            <div>
                <div style={{ padding: "20px" }}>People you may know</div>

                {this.state.rloader ? <center style={{ margin: "100px 0px" }}><i className="fa fa-spin fa-spinner"></i></center> : null}
                {this.state.relatedusers.map((member, key) => (
                    <a className={classnames(this.state.rloader ? "hide" : null)} href={`/profile/${member.username}`}>
                        <div>
                            <div className="img">
                                <img src={`../../images/${imglist[key]}`} width="70%" className="img-responsive img-rounded" alt="Image" />
                            </div>
                            <div className="name">
                                {member.fullName}<br />
                                <small className="away"> {member.department} {member.university}</small>
                            </div>
                            <div className="clearfix"> </div>
                        </div>


                    </a>
                ))}
            </div>
        );
    }
}

export default Relatedusers;