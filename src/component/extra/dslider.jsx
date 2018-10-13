import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Slider from "react-slick";
import axios from "axios"
import apiUrl from "../../config.js"
import activities from "../data.js"
import $ from "jquery"
import {countries} from "../data"
export default class Dslider extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const settings = {
            dots: true,
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
			<div className="row sidepadding-sm-40">
                <Slider {...settings}>
            <div className="row">
			{activities.slice(0,6).map((activity,key)=>(
                <div className="col-sm-3">
					<Link to={`/city/${activity.city}`} className="listing-item-container ">
						<div className="listing-item">
							<img className="" src={activity.img[key]||"../../../images/sa.jpg"} alt="" />
							<div className="listing-item-content">
								<h3 className="xcapitalize">{activity.city}</h3>
							</div>
						</div>
					 </Link>
                     </div>
            ))}
            </div>
            <div className="row">
			{activities.slice(6,12).map((activity,key)=>(
                <div className="col-sm-3">
					<Link to={`/city/${activity.city}/${activity.city}`} className="listing-item-container ">
						<div className="listing-item">
							<img className="" src={activity.img[key]} alt="" />
							<div className="listing-item-content">
								<div className="numerical-rating"></div>
								<h3 className="xcapitalize">{activity.city}</h3>
							</div>
						</div>
					 </Link>
                     </div>
            ))}
            </div>
            </Slider>
            </div>
			);
    }
}
