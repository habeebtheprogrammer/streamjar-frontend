import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
import activities from "../data"

export default class Hcontent extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.typing = this.typing.bind(this)
    }

    typing(e) {
        this.setState({[e.target.name]: e.target.value})
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
		{this.rating(activity.reviews) >4 ? <ul>
						<li><i className="sl sl-icon-fire"></i></li>
					</ul>:null}
		</div>
		else if(activity.category === "events")
		return <div className="listing-item-details">
		<ul>
		<li>Starting at 4pm tommorow</li>
	</ul>
		</div>
	}
    render() {
        return (
			<div>

	<section className="fullwidth margin-top-65" data-background-color="#ffffff">

		<div className="container">
			<div className="row">

				<div className="col-md-12">
					<h3 className="headline centered margin-bottom-45">
						Most Visited Destination
						<span>Discover top-rated destinations</span>
					</h3>
				</div>
			</div>
		</div>

		<div className="simple-fw-slick-carousel ">
			{activities.slice(-4).map((activity,key)=>(
				<div className="fw-carousel-item">
					<Link to={`/cities/${activity.city}/${activity.category}/${activity.title}`} className="listing-item-container compact">
						<div className="listing-item">
							<img src={activity.img[key]} alt="" />
							{this.checkType(activity)}
							
							<div className="listing-item-content">
								<div className="numerical-rating" data-rating={this.rating(activity.reviews)}></div>
								<h3>{activity.title}</h3>
								<span>{activity.location}</span>
							</div>
							<span className="like-icon"></span>
						</div>
					</Link>
				</div>
			))}
		</div>
	</section>

	<section className="fullwidth margin-top-65" data-background-color="#ffffff">

<div className="container">
	<div className="row">
		<div className="col-md-12">
			<h3 className="headline centered margin-bottom-45">
				Popular Activites
				<span>Discover top-rated activities</span>
			</h3>
		</div>
	</div>
</div>

<div className="simple-fw-slick-carousel ">
	{activities.slice(4,8).map((activity,key)=>(
		<div className="fw-carousel-item">
			<Link to={`/cities/${activity.city}/${activity.category}/${activity.title}`} className="listing-item-container compact">
				<div className="listing-item">
					<img src={activity.img[key]} alt="" />
					{this.checkType(activity)}
					
					<div className="listing-item-content">
						<div className="numerical-rating" data-rating={this.rating(activity.reviews)}></div>
						<h3>{activity.title}</h3>
						<span>{activity.location}</span>
					</div>
					<span className="like-icon"></span>
				</div>
			</Link>
		</div>
	))}
</div>
</section>
	<section className="fullwidth margin-top-65 " data-background-color="#ffffff">

<div className="container">
	<div className="row">

		<div className="col-md-12">
			<h3 className="headline centered margin-bottom-45">
					Recommended 
				<span>Activities handpicked by our travel curators</span>
			</h3>
		</div>
	</div>
</div>

<div className="simple-fw-slick-carousel ">
{activities.slice(0,4).map((activity,key)=>(
	<div className="fw-carousel-item">
		<Link to={`/cities/${activity.city}/${activity.category}/${activity.title}`} className="listing-item-container compact">
			<div className="listing-item">
				<img src={activity.img[key]} alt="" />
				{this.checkType(activity)}
			
				<div className="listing-item-content">
					<div className="numerical-rating" data-rating={this.rating(activity.reviews)}></div>
					<h3>{activity.title}</h3>
					<span>{activity.location}</span>
				</div>
				<span className="like-icon"></span>
			</div>
		</Link>
	</div>
))}

</div>


</section>
	<div className="container">
	<div className="row">

		<div className="col-md-12">
			<h3 className="headline centered margin-bottom-35 margin-top-70">TRAVEL INSPIRATION<span>Curated suggestions based on seasons, festivals and interests</span></h3>
		</div>
		
		<div className="col-md-8">
		<Link to="/cities/new_york"  className="img-box" data-background-image={`${process.env.PUBLIC_URL}/images/manama.jpeg`}>
				<div className="img-box-content visible" >
					<h4>New York </h4>
					<span>14 Listings</span>
				</div>
			</Link>

		</div>	
			
		<div className="col-md-4">
			<Link to="/cities/Los_angeles" className="img-box" data-background-image={`${process.env.PUBLIC_URL}/images/sa.jpg`}>
				<div className="img-box-content visible">
					<h4>Los Angeles</h4>
					<span>24 Listings</span>
				</div>
			</Link>

		</div>	

		<div className="col-md-4">

			<Link to="/cities/san_francisco" className="img-box" data-background-image={`${process.env.PUBLIC_URL}/images/sightseeing.jpg`}>
				<div className="img-box-content visible">
					<h4>San Francisco </h4>
					<span>12 Listings</span>
				</div>
			</Link>

		</div>	
			
		<div className="col-md-4">
			<Link to="/cities/Miami" className="img-box" data-background-image={`${process.env.PUBLIC_URL}/images/new.jpeg`}>
				<div className="img-box-content visible">
					<h4>Miami</h4>
					<span>9 Listings</span>
				</div>
			</Link>

		</div>
		<div className="col-md-4">

			<Link to="/cities/monterrey" className="img-box" data-background-image={`${process.env.PUBLIC_URL}/images/search.jpeg`}>
				<div className="img-box-content visible">
					<h4>Monterrey</h4>
					<span>9 Listings</span>
				</div>
			</Link>
		</div>
	</div>
</div>
<a href="/" className="flip-banner parallax margin-top-65" data-background-image={`${process.env.PUBLIC_URL}/images/sightseeing.jpg`} data-color="#f91942" data-color-opacity="0.85" data-img-width="2500" data-img-height="1666">
	<div className="flip-banner-content">
		<h2 className="flip-visible">Explore top-rated attractions nearby</h2>
		<h2 className="flip-hidden">Browse Listings <i className="sl sl-icon-arrow-right"></i></h2>
	</div>
</a>
</div>

			);
    }
}
