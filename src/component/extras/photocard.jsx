import React, { Component } from 'react';
import apiUrl from "../../config"
import Modal from "react-responsive-modal"
import FileUpload from "react-fileupload"
import classnames from "classnames"
import axios from "axios"
class Photocard extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
        this.typing = this.typing.bind(this)
    }


    componentWillMount() {
    
    }
    typing(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        var me =localStorage.getItem("username")
        var token =localStorage.getItem("kaytoken")
        return (
            <div className="photocard white">
               <div className="title">  Photos 
               </div>
           <div className="content">
           <div className="row">
           {this.props.images.map((image)=>(
            <div className="col-sm-4" style={{padding:"10px"}}>
            <img src={image.imgUrl} width="100%" class="img-responsive" alt="Image" />
                </div>
           ))}
           </div>
           </div>
            </div>
        );
    }
}

export default Photocard;
