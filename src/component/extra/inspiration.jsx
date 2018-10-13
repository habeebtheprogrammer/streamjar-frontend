import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Slider from "react-slick";
import axios from "axios"
import apiUrl from "../../config.js"
import activities from "../data.js"
import $ from "jquery"
import {countries} from "../data.js"
export default class Inspiration extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    rating(reviews){
        var rating =0;
        reviews.map((review,key)=>{
            rating +=review.rating;
        })
        return rating/reviews.length;
    }
    checkType(activity){
		if(activity.category==="hotels"||activity.category==="fitness")
		return	<div className="listing-badge now-open">Now Open</div>
		else if(activity.category==="resturants")
		return <div className="listing-item-details">
		{this.rating(activity.reviews) >3 ? <ul>
						<li><i className="sl sl-icon-fire"></i></li>
					</ul>:null}
		</div>
		else if(activity.category === "events")
		return <div className="listing-item-details">
		<ul>
		<li><small className="xcapitalize"> <i className="fa xfa-2x fa-map-marker redcolor"></i> {activity.city}</small></li>
	</ul>
		</div>
	}
    render() {
        
        return (
			<div className="row sidepadding-sm-40" >
            {activities.slice(0,1).map((activity,key)=>(
             <div className="col-sm-8">
             	<a href={`/city/${activity.city}/${activity.category}/${activity.title}`} className="listing-item-container ">
						<div className="listing-item" style={{"height":"310px"}}>
							<img className="" src={activity.img[key]||"../../../images/sa.jpg"} alt="" />
                            <div className="listing-item-content">
						{/* <div className="numerical-rating" data-rating="3.5"></div> */}
						<h3>Tom's Restaurant</h3>
						<span>964 School Street, New York</span>
					</div>
						</div>
					 </a>
                     </div>
            ))}

			{activities.slice(-4).map((activity,key)=>(
                <div className="col-sm-4">
					<a href={`/city/${activity.city}/${activity.category}/${activity.title}`} className="listing-item-container " >
						<div className="listing-item">
							<img className="" src={activity.img[key]} alt="" />
                            {/* {this.checkType(activity)}
                            <div className="listing-item-content">
								<span className="tag">{activity.category}</span>
							</div> */}
                    	</div>
                        <div className="cardxtra">
                            <div className="xtitle">{activity.title}</div>
                            <div className="xreview">
                            
                            <div className="star-rating" data-rating={this.rating(activity.reviews)}>
                                <div className="rating-counter"><a href="#listing-reviews">({activity.reviews.length} reviews)</a></div>
                            </div>
                            </div>
                            <div className="xprice">
                            <span>£ {activity.pricing[0].price} </span>
                             <small className="pull-right available lightseagreen"> Available now</small></div>
                        </div>
					 </a>
                     </div>
            ))}
            </div>
			);
    }
}
