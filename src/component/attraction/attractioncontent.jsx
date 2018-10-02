import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
import $ from "jquery"
import activities from "../data"
export default class Attractioncontent extends Component {
    constructor() {
        super();
        this.state = {
            activity:{img:[],reviews:[],openingHours:[]}
        }
    }

    componentWillMount() {
       var activity = activities.filter((item)=>this.props.match.params.id==item.title);
       if(activity.length) this.setState({activity:activity[0]})
	}
	componentWillUnmount() {
	
	}
 myFunction(e) {
    var x= $(e.target).next();
    console.log(x)
    $(x).toggle()
    // var x = document.getElementById("myDIV");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
}


 mySelect() {
    var x = document.getElementById("Select Div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
    rating(reviews){
        var rating =0;
        reviews.map((review,key)=>{
            rating +=review.rating;
        })
        return rating/reviews.length;
    }
    render() {
        return (
			<div className="attraction">
	<div className="listing-slider mfp-gallery-container  margin-top-0">
        {this.state.activity.img.map((img)=>(
                <a href={img}data-background-image={img} className="item mfp-gallery" title={this.state.activity.title}></a>
        ))}
	
    </div>
    <div className="container">
	<div className="row sticky-wrapper">
		<div className="col-lg-8 col-md-8 padding-right-30">

			<div id="titlebar" className="listing-titlebar">
				<div className="listing-titlebar-title">
					<h2>{this.state.activity.title} <span className="listing-tag">{this.state.activity.category}</span></h2>
					<span>
						<a href="#listing-location" className="listing-address">
							<i className="fa fa-map-marker"></i>
							{this.state.activity.location}
						</a>
					</span>
					<div className="star-rating" data-rating={this.rating(this.state.activity.reviews)}>
						<div className="rating-counter"><a href="#listing-reviews">({this.state.activity.reviews.length} reviews)</a></div>
					</div>
				</div>
			</div>
<div id="listing-nav" className="listing-nav-container">
				<ul className="listing-nav">
					<li><a href="#listing-pricing-list">Pricing</a></li>
					<li><a href="#listing-location">Location</a></li>
					<li><a href="#Expect-reviews">What To Expect</a></li>
					<li><a href="#listing-reviews">Reviews</a></li>

				</ul>
			</div>
			
			
			
			<div id="listing-overview" className="listing-section">

				<h3 className="listing-desc-headline"></h3>
				<ul className="listing-features slicon margin-top-0">
					<li>  Elevator in building</li>
					<li>   Friendly workspace</li>
					<li>   Instant Book</li>
					<li>   Wireless Internet</li>
					<li>  Free parking on </li>
					<li>   Free parking on </li>
				</ul>	
			</div>

			<ul className=" listing-features-detail margin-top-20">
					{this.state.activity.description}
				</ul>	

		
			

			<div id="listing-pricing-list" className="listing-section">
				<h3 className="listing-desc-headline margin-top-70 margin-bottom-30">Package Options</h3>

				<div className="show-more">
					<div className="pricing-list-container">
						<ul>
						
							<li>
								<h5>Cheddar Burger</h5>
								<button  className="package-details-button" onClick={this.myFunction}>Package Details<i className="fa fa-angle-down"></i> </button>

                          <div id="myDIV">
								<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
								<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
								<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
								</div>

								<span>$6</span>
                                <div className="style-2">

                                <div className="toggle-wrap">
					            <span className="trigger "><a href="#" className="button">SELECT</a></span>
					
		                        </div>
                            </div>
							</li>

                            <li>
								<h5>Cheddar </h5>
								<button  className="package-details-button" onClick={this.myFunction}>Package Details<i className="fa fa-angle-down"></i> </button>

                          <div id="myDIV">
								<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
								<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
								<p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
								</div>

								<span>$6</span>
                                <div className="style-2">

                                <div className="toggle-wrap">
					            <span className="trigger "><a href="#" className="button">SELECT</a></span>
					
		                        </div>
                            </div>
							</li>
						</ul>

					</div>
				</div>








				<a href="#" className="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i className="fa fa-angle-down"></i></a>
			</div>
			<div id="listing-location" className="listing-section">

			
				<h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>

				<div id="singleListingMap-container">
					<div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger"></div>
					<a href="#" id="streetView">Street View</a>
				</div>


</div>
			

			<div id="listing-overview" className="listing-section">

				<h3 className="listing-desc-headline">Cancellation Policy</h3>
                 
				<ul className="margin-top-20">
					<li> Elevator in building</li>
				</ul>	
                
			</div>

          



			<div id="Expect-reviews" className="listing-section">
				<h3 className="listing-desc-headline margin-top-75 margin-bottom-20">What to Expect</h3>

				<div className="clearfix"></div>

				<section className="comments listing-reviews">

					<ul>
                        {this.state.activity.img.map((img)=>(
                            <li>
							<div className="Expect-content">
								<p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus
								Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
								
								<div className="Expect-image mfp-gallery-container">
									<a href={img} className="mfp-gallery"><img src={img} alt="" /></a>
						
								</div>
								
							</div>
						</li>
                        ))}
						
					 </ul>
				</section>

				<div className="clearfix"></div>
				
				<div className="clearfix"></div>
			</div>



			<div id="listing-reviews" className="listing-section">
				<h3 className="listing-desc-headline margin-top-75 margin-bottom-20">Reviews <span>({this.state.activity.reviews.length})</span></h3>

				<div className="clearfix"></div>

				<section className="comments listing-reviews">

					<ul>
                        {this.state.activity.reviews.map((review)=>(
                            <li>
                            	<div className="avatar"><img src={review.dp} alt="" /></div>
                                <div className="comment-content"><div className="arrow-comment"></div>
                                    <div className="comment-by">{review.author}<span className="date">June 2017</span>
                                        <div className="star-rating" data-rating={review.rating}></div>
                                    </div>
                                    <p>
                                        {review.description}
                                    </p>
                                    <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>{review.helpful}</span></a>
                                </div>
						</li>

                        ))}
					 </ul>
				</section>

				<div className="clearfix"></div>
				<div className="row">
					<div className="col-md-12">
						<div className="pagination-container margin-top-30">
							<nav className="pagination">
								<ul>
									<li><a href="#" className="current-page">1</a></li>
									<li><a href="#">2</a></li>
									<li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>


			<div id="add-review" className="" data-background-color="#f8f8f8">

				
				<div className="row">
					<div class>
						<div className="clearfix"></div>
						
						<div className="clearfix"></div>
					</div>

					<div>
						<div className="add-review-photos margin-bottom-30">
							
						</div>
					</div>
				</div>
	
				<form id="add-comment" className="add-comment">
					<fieldset>
<section className="fullwidth margin-top-35 padding-top-35 padding-bottom-70" data-background-color="#f8f8f8">

	<div className="container">
		<div className="row">

			<div className="col-md-12">
				<h3 className="margin-bottom-45">
					While You Are Here:
					<span>Check These Out</span>
				</h3>
			</div>

			<div className="col-md-12">
				<div className="simple-slick-carousel dots-nav">
                    {activities.slice(-4).map((activity,key)=>(
                        <div className="carousel-item">
						<a href={`/cities/${activity.city}/${activity.category}/${activity.title}`}  className="listing-item-container compact">
							<div className="listing-item">
								<img src={activity.img[key]} alt="" />

								<div className="listing-badge now-open">Now Open</div>

								<div className="listing-item-content">
									<div className="numerical-rating" data-rating={this.rating(activity.reviews)}></div>
									<h3>{activity.title} <i className="verified-icon"></i></h3>
									<span>{activity.location}</span>
								</div>
								<span className="like-icon"></span>
							</div>
						</a>
					</div>
                    ))}
					</div>
			</div>

		</div>
	</div>

</section>


						

					</fieldset>

					
					<div className="clearfix"></div>
				</form>

			</div>

		</div>


		<div className="col-lg-4 col-md-4 margin-top-35 sticky">

				
			<div className="boxed-widget booking-widget ">
				<div className="" data-tip-content="Listing has been verified and belongs the business owner or manager.">
				 Price Guarantee  <i className="sl sl-icon-info"></i>
			</div>
				<h3><b>US$ 52.75 </b><h7>61.19</h7></h3>
									
					

				<div className="row with-forms  margin-top-15">



					<div className="col-lg-6 col-md-12">
							 
						<input type="date" className="datepicker" id="booking-date" data-lang="en" data-large-mode="true" data-large-default="true" data-min-year="2017" data-max-year="2020" data-lock="from" />
					</div>

					<div className="col-lg-6 col-md-12">
						<input type="time" id="booking-time"  value="9:00 am" />
					</div>
					<div className="col-lg-12">
						<div className="panel-dropdown">
							<a href="#">Guests <span className="qtyTotal" name="qtyTotal">1</span></a>
							<div className="panel-dropdown-content">

								<div className="qtyButtons">
									<div className="qtyTitle">Adults</div>
									<input type="text" name="qtyInput" defaultValue="1" />
								</div>

								<div className="qtyButtons">
									<div className="qtyTitle">Childrens</div>
									<div className="qtyDec" onClick={()=>alert(2)}></div>
									<input type="text" name="qtyInput" defaultValue="0" />
									<div className="qtyInc" onClick={()=>alert(2)}></div>
								</div>

							</div>
						</div>
						<div className="h5b" >
							 <ul style={{"listStyleType":"none"}}>
							 <li><i className="sl sl-icon-energy"> Available Today </i></li>
							 	<li>
							 	<i className="sl sl-icon-clock"> Instant Confirmation</i> 
							 	</li>
							 </ul>
							 	</div>
					</div>
				
<a href="pages-booking.html" className="button book-now fullwidth margin-top-5">Book Now</a>
				</div>
				
				
			</div>
			<div className="boxed-widget opening-hours margin-top-35">
				<div className="listing-badge now-open">Now Open</div>
				<h3><i className="sl sl-icon-clock"></i> Opening Hours</h3>
				<ul style={{textTransform:"capitalize"}}>
					{this.state.activity.openingHours.map((item)=>(
					<li>{item.day} <span>{item.start} - {item.end}</span></li>

					))}
				</ul>
			</div>
		

			<div className="listing-share margin-top-40 margin-bottom-40 no-border">
				<button className="like-button"><span className="like-icon"></span> Wishlist</button> 
			

					
					<div className="clearfix"></div>
			</div>

		</div>

	</div>
</div>
			</div>
			);
    }
}
