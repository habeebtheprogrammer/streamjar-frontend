import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
import activities from "../data"
import $ from "jquery"
import {Button,Icon} from "react-materialize"
import Dslider from '../extra/dslider';
import Aslider from '../extra/aslider';
import Inspiration from '../extra/inspiration';
import Destinationmodal from '../extra/destinationmodal';
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
			<div className="">
<div className="xcontainer">
	<section className="fullwidth margin-top-65" >

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
		<Dslider />
		<div>
		<center><Destinationmodal /></center>
		</div>
	</section>
	<section className="fullwidth margin-top-65" >

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
	<Aslider />
</section>
	<section className="fullwidth margin-top-65 ">

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
<Aslider />



</section>
<section className="fullwidth margin-top-65" >

	<div className="container">
	<div className="row">

		<div className="col-md-12">
			<h3 className="headline centered margin-bottom-35 margin-top-70">TRAVEL INSPIRATION<span>Curated suggestions based on seasons, festivals and interests</span></h3>
		</div>
		</div>
</div>
<Inspiration />
</section>
</div>

<section className="bgwhite">
<div className="container ">
<div className="row">
	<div className="col-md-8 col-md-offset-2">
		<h2 className="headline centered margin-top-80">
			Plan The Vacation of Your Dreams 
			<span className="margin-top-25">Explore some of the best tips from around the world from our partners and friends.  Discover some of the most popular listings in Sydney</span>
		</h2>
	</div>
</div>

</div>
</section>
</div>


			);
    }
}
