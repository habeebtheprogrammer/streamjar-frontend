import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Wishlist extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            error: "",
            success: "",
        }
    }


   
    render() {
        return (
			<div className="dashboard-content">

			<div className="col-lg-10 col-md-8">
				<div className="dashboard-list-box margin-top-0">
					<h4>My Wishlist</h4>
					<ul>

						<li>
							<div className="list-box-listing">
<section>

	<div className="container">
		<div className="row">


			<div className="col-md-12">
				<div className="simple-slick-carousel dots-nav">
				<div className="carousel-item">
					<a href="listings-single-page.html" className="listing-item-container">
						<div className="listing-item">
							<img src={`${process.env.PUBLIC_URL}/images/Manama.jpeg`} alt="" />

							<div className="listing-badge now-open">Now Open</div>

							<div className="listing-item-content">
								<span className="tag">Eat & Drink</span>
								<h3>Tom's Restaurant <i className="verified-icon"></i></h3>
								<span>964 School Street, New York</span>
							</div>

					
						</div>

						<div className="star-rating" data-rating="3.5">

							<div className="rating-counter">(12 reviews)</div>

						</div>
					
							
					</a>
					<div className="buttons-to-right">
								<a href="#" className="button gray"><i className="sl sl-icon-close"></i></a>
							</div>
						
				</div>

		</div>
	</div>
</div></div>
</section>
</div>
</li>


					</ul>
				</div>
			</div>
			<div className="col-lg-10 col-md-8">
				<div className="dashboard-list-box margin-top-0">
					<h4>Popular On Wishlist</h4>
					<ul>

						<li>
							<div className="list-box-listing">
<section>

	<div className="container">
		<div className="row">


			<div className="col-md-12 compact">
				<div className="simple-slick-carousel ">
				<div className="carousel-item">
					<a href="listings-single-page.html" className="listing-item-container">
						<div className="listing-item">
							<img src={`${process.env.PUBLIC_URL}/images/sa.jpg`} alt="" />

							<div className="listing-badge now-open">Now Open</div>
							
							<div className="listing-item-content">
								<span className="tag">Eat & Drink</span>
								<h3>Tom's Restaurant <i className="verified-icon"></i></h3>
								<span>964 School Street, New York</span>
							</div>
							<span className="like-icon"></span>
						</div>
						<div className="star-rating" data-rating="3.5">
							<div className="rating-counter">(12 reviews)</div>
						</div>
					</a>
				</div>
				<div className="carousel-item">
					<a href="listings-single-page.html" className="listing-item-container">
						<div className="listing-item">
							<img src={`${process.env.PUBLIC_URL}/images/search.jpeg`} alt="" />

							<div className="listing-badge now-open">Now Open</div>
							
							<div className="listing-item-content">
								<span className="tag">Eat & Drink</span>
								<h3>Tom's Restaurant <i className="verified-icon"></i></h3>
								<span>964 School Street, New York</span>
							</div>
							<span className="like-icon"></span>
						</div>
						<div className="star-rating" data-rating="3.5">
							<div className="rating-counter">(12 reviews)</div>
						</div>
					</a>
				</div>

		</div>
	</div>
</div></div>
</section>
</div>
</li>
</ul>

		</div>

	</div>

</div>
	   )}

       }