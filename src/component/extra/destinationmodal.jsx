import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import apiUrl from "../../config"
import classnames from "classnames"
import Modal from "react-responsive-modal"
import {regions,cities} from "../data"
class Destinationmodal extends Component {
    constructor(props){
        super(props);
        this.state={
            type:window.localStorage.getItem("searchSelector")||"people",
            modal:false,
        }
       
    }   
    componentDidMount() {
     
    }
   
    render() {
        
        return (
            <div className="">
            <Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "destinationmodal" }} little>
            <div className="row">
            <div className=" zero">
            <input type="search" name="" id="input" style={{width:"100%"}} className="form-control"  title=""  placeholder="Search"/>
            
            </div>
            <div className="col-sm-3 zero">
            {regions.map((region)=>(
                <button className="regions xcapitalize">
                   <small><b>  {region.title}</b>
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-left "></i>
                    </small>
                </button>
            ))}
           
            </div>
            <div className="col-sm-4 zero">
                {regions[0].countries.map((country)=>(
                    <button className="countries xuppercase">
                      <small> <b>{country.title} </b></small>
                    </button>
                ))}
            </div>
            <div className="col-sm-5 zero">
            {cities.map((city)=>(
                <span className="cities">
                    {city.title}
                </span>
            ))}
           
            </div>
            </div>
            </Modal>
            <button onClick={()=>this.setState({modal:!this.state.modal})} className="btn btn-danger btn-lg" style={{marginTop:"50px",padding:"10px 50px"}}><span style={{marginRight:"10px"}}><i className="fa  fa-map-marker"></i></span> Explore all destination</button>
            </div>
        );
    }
}

export default Destinationmodal;