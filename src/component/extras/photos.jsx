import React, { Component } from 'react';
import apiUrl from "../../config"
import axios from "axios"
class Photos extends Component {
    constructor(props) {
        super(props);
        this.state ={
        relatedusers: [],
            rloader: true,
            images:[],
            empty:false
        }
    }

    componentWillMount() {
        var { match} = this.props

        axios.get(`${apiUrl}/api/getImagesByUser?username=${match.params.id}`).then((res) => {
            if (res.data.success) {
                this.setState({ images: res.data.success })
            }
            else this.setState({ empty: true })

        })
    }

    render() {
        
        return (
            
            <div className="wildcard white">
               <div className="title"> <i className="fa fa-photo"></i> Photos </div>
           <div className="content">
           
           <div className="row">
           {this.state.images.map((image)=>(
            <div className="col-sm-4 zero">
            <img src={image.imgUrl} width="100%" class="img-responsive" alt="Image" />
                </div>
           ))}
           </div>
           
           
           </div>
            </div>
        );
    }
}

export default Photos;
