import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
import $ from "jquery"
import apply from "./custom"
import moment from "moment"
import activities from "../data"
import Imageslider from "../extra/imageslider"
import classnames from "classnames"
import Aslider from "../extra/similaritemsslider"
export default class Attractioncontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
			activity:{img:[],reviews:[],openingHours:[]},
			date:"", quantity:1,
			packageSelected:"",
		}
		this.typing=this.typing.bind(this)
		this.selectedPackage =this.selectedPackage.bind(this)
    }

    componentWillMount() {
       var activity = activities.filter((item)=>this.props.match.params.id==item.title);
       if(activity.length) this.setState({activity:activity[0]})
	}
	componentDidMount() {
		apply();
	}

	componentWillUnmount() {
		$(window).off("scroll");
	}
	xdrop(e){
		$(e.target).parent().next().toggle();
	}
	selectedPackage(packageSelected){
		this.setState({packageSelected})
		if($('.booking-widget').hasClass("fixbook")){

		}else {
			$('.booking-widget').addClass("fixbook")
		}
	}
	typing(e){
        this.setState({[e.target.name]:e.target.value})
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
			<div className="attraction bgwhite">
	<div className="listing-slider mfp-gallery-container  margin-top-0" style={{background:`url('${this.state.activity.img[0]}')`,backgroundSize:"cover",backgroundPosition:"center"}}>
       
		{/* <Imageslider img={this.state.activity.img} /> */}
    </div>

    <div className="container">

	<div className="row sticky-wrapper">
		<div className="col-lg-8 col-md-8 padding-right-30">

			<div id="titlebar" className="listing-titlebar">
				<div className="listing-titlebar-title">
					<h2>{this.state.activity.title} <span className="listing-tag">{this.state.activity.category}</span></h2>
					<span>
						<a href="#listing-location" className="listing-address">
							<i className="fa fa-map-marker"></i> {this.state.activity.location}
						</a>
					</span>
					<div className="star-rating" data-rating={this.rating(this.state.activity.reviews)}>
						<div className="rating-counter"><a href="#listing-reviews">({this.state.activity.reviews.length} reviews)</a></div>
					</div>
					{/* <div className="star-rating redcolor" ><i className="fa fa-star"></i> {this.rating(this.state.activity.reviews)}</div> */}
				</div>
			</div>
		
			<div id="listing-nav" className="listing-nav-container">
				<ul className="listing-nav">
					<li><a href="#listing-pricing-list">Pricing</a></li>
					<li><a href="#Expect-reviews">What To Expect</a></li>
					<li><a href="#listing-activity">Activity information</a></li>
					<li><a href="#listing-location">Location</a></li>
					<li><a href="#listing-reviews">Reviews</a></li>

				</ul>
			</div>
			
			
			
			<div id="listing-overview" className="listing-section">
				<h3 className="listing-desc-headline"></h3>
				<ul className="listing-features  margin-top-0" style={{fontSize:"1em"}}> 
					<li><i className="im im-icon-Money-Bag xfa-2x"></i>  No cancellation</li>
					<li><i className="im im-icon-Printer xfa-2x"></i> Show Mobile or Printed Voucher </li>
					<li> <i className="im im-icon-Time-Clock xfa-2x"></i> 1 Day(s) Duration </li>
					<li><i className="im im-icon-Calendar-2 xfa-2x"></i> Open Date Ticket</li>
					<li><i className="im im-icon-Folder-WithDocument xfa-2x"></i>  Enter Directly With Voucher</li>
				</ul>	
			</div>

			<ul className=" listing-features-detail margin-top-20">
					<li>Singapore's most anticipated Halloween event is back! For the first time ever, step inside the mysterious world of Netflix’s Stranger Things</li>
					<li>Encounter the five haunted houses: Stranger Things, Pontianak, The Haunting of Oiwa, Pagoda of Peri,l and Killuminati</li>
					<li>Enjoy Universal Studios Singapore during the day and Halloween Horror Nights after the sun sets</li>
					<li>Don't want to queue and want to feel like a VIP? Skip the line and join the R.I.P Tour instead or purchase the USS Halloween Horror Nights 8 - Express Pass Add On!</li>
					<li>Celebrate Halloween as a family and unravel the mysteries of SpookyTown in KidZania Singapore together!</li>
				</ul>	

		
			

			<div id="listing-pricing-list" className="listing-section">
				<h3 className="listing-desc-headline margin-top-70 margin-bottom-30">Package Options</h3>
				<div className="xpackage">
					<div className="xptitle">
					HHN8 Ticket (Peak)
					<button onClick={()=>this.selectedPackage(1)} className={classnames(this.state.packageSelected===1?"xpackage-selected":null,"btn btn-danger pull-right ")}> select</button>
					<div className="xprice pull-right">$ 533</div>
					</div>
					{/* <div className="bgwhite xpackage-option">
					 <label >Select date</label>
					 <input type="date" name="date" id="input"  onChange={this.typing} />
					 <label >Package quantity</label>
					 <input type="number" min="1" name="quantity"  onChange={this.typing}  id="input" className="form-control" />
					 
					</div> */}
					<div className="xdropdown bgwhite">
					<small className="xdrop" onClick={this.xdrop}>package option <span className="caret"></span></small>
					</div>
					
					<div className="xpcontent bgwhite" >
					<li>Please note: The Day Pass is not required for entry to Halloween Horror Nights 8</li>
						Inclusive Of:
						Admission to USS from 7:30pm onwards
						Not Inclusive Of:
						Day Admission to Universal Studios Singapore (valid for entry before 7:30pm)
						Zombie Laser Tag Experience (top up available on site)
					</div>
				</div>
				<div className="xpackage">
					<div className="xptitle">
					HHN8 Ticket (Peak)
					<button onClick={()=>this.selectedPackage(2)} className={classnames(this.state.packageSelected===2?"xpackage-selected":null,"btn btn-danger pull-right ")}> select</button>
					<div className="xprice pull-right">$ 533</div>
					</div>
					<div className="xdropdown bgwhite">
					<small className="xdrop" onClick={this.xdrop}>package option <span className="caret"></span></small>
					</div>
					<div className="xpcontent bgwhite">
					<li>Please note: The Day Pass is not required for entry to Halloween Horror Nights 8</li>
						Inclusive Of:
						Admission to USS from 7:30pm onwards
						Not Inclusive Of:
						Day Admission to Universal Studios Singapore (valid for entry before 7:30pm)
						Zombie Laser Tag Experience (top up available on site)
					</div>
				</div>
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
				
			</div>
			<div id="listing-activity" className="listing-section">

			<h3 className="listing-desc-headline">Activity information</h3>

			<ul className="margin-top-20">
				<li> You will receive a confirmation email and voucher instantly after booking</li>
				<li> In the event that you do not receive an email from us, please check your Spam folder or notify us via email </li>
			</ul>	
			<h4 >Available attraction</h4>

				<ul className="margin-top-20">
					<li> All Halloween Horror Nights 8 Haunted Houses</li>
					<li> All USS rides and attractions including: Revenge of the Mummy®</li>
				</ul>	
				<h4>How to use</h4>

				<ul className="margin-top-20">
					<li> You will receive a confirmation email and voucher instantly after booking</li>
					<li> In the event that you do not receive an email from us, please check your Spam folder or notify us via email </li>
				</ul>
			</div>
			
			<div className="alert alert-warning">
			<h4 >Additional information</h4>

			<ul className="margin-top-20">
				<li> Halloween Horror Nights is not recommended for children aged 0-12</li>
				<li> No costumes, masks or face painting are allowed at the event - guests dressed in these outfits will be turned away at the gate</li>
			</ul>	
		
			</div>
			
			<div id="listing-overview" className="listing-section">

							<h3 className="listing-desc-headline">How to get there</h3>
							
							<ul className="margin-top-20">
								<li> Nearest MRT Station: Harbourfront (NE1/CC29)</li>
								<li> Sentosa Express: Waterfront Station</li>
							</ul>	
							
			</div>
		
			<div id="listing-location" className="listing-section">

			<h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>

<div id="singleListingMap-container">
	<div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger"></div>
	<a href="#" id="streetView">Street View</a>
</div>

			</div>
				
			<div id="listing-overview" className="listing-section">

							<h3 className="listing-desc-headline">Cancellation policy</h3>
							
							<ul className="margin-top-20">
								<li> No cancelations, refunds or changes can be made</li>
							</ul>	
							
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
									<div className="star-rating" data-rating={this.rating(this.state.activity.reviews)}>
									<div className="rating-counter"><a href="#listing-reviews">({this.state.activity.reviews.length} reviews)</a></div>
								</div>
                                    </div>
                                    <p>
                                        {review.description}
                                    </p>
									<div className="review-images mfp-gallery-container">
									{this.state.activity.img.map((img)=>(
										<a href={img} className="mfp-gallery"><img src={img} alt="" /></a>
									))} 
								</div>
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

			
				<section className="fullwidth margin-top-35" data-background-color="#f8f8f8">

<div className="container">
	<div className="row " style={{background:"#f9f9f9"}}>

		<div className="col-md-12">
			<h3 className="margin-bottom-45">
				While You Are Here:
				<span>Check These Out</span>
			</h3>
		</div>
		<div className="col-md-12">
			<Aslider />
		</div>

	</div>
</div>


</section>

		</div>


		<div className="col-lg-4 col-md-4 margin-top-35 sticky">

		<div className="row">		
		
					<div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
				<i className="sl sl-icon-check"></i> Verified Listing
			</div>

			<div className="boxed-widget booking-widget margin-top-35" style={{background:"#f9f9f9"}}>
				<h3><i className="fa fa-calendar-check-o "></i> Booking</h3>
				<div className="row with-forms  margin-top-0">

					<div className="col-lg-12">
						<input type="text" id="date-picker" placeholder="Date" readOnly="readonly" />
					</div>

					<div className="col-lg-12">
						<div className="panel-dropdown time-slots-dropdown">
							<a href="#">Time Slots</a>
							<div className="panel-dropdown-content padding-reset">
								<div className="panel-dropdown-scrollable">
									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-1"/>
										<label for="time-slot-1">
											<strong>8:30 am - 9:00 am</strong>
											<span>1 slot available</span>
										</label>
									</div>

									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-2"/>
										<label for="time-slot-2">
											<strong>9:00 am - 9:30 am</strong>
											<span>2 slots available</span>
										</label>
									</div>

									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-3" />
										<label for="time-slot-3">
											<strong>9:30 am - 10:00 am</strong>
											<span>1 slots available</span>
										</label>
									</div>

									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-4"/>
										<label for="time-slot-4">
											<strong>10:00 am - 10:30 am</strong>
											<span>3 slots available</span>
										</label>
									</div>

									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-5"/>
										<label for="time-slot-5">
											<strong>13:00 pm - 13:30 pm</strong>
											<span>2 slots available</span>
										</label>
									</div>
									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-6"/>
										<label for="time-slot-6">
											<strong>13:30 pm - 14:00 pm</strong>
											<span>1 slots available</span>
										</label>
									</div>
									<div className="time-slot">
										<input type="radio" name="time-slot" id="time-slot-7"/>
										<label for="time-slot-7">
											<strong>14:00 pm - 14:30 pm</strong>
											<span>1 slots available</span>
										</label>
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-12">
						<div className="panel-dropdown">
							<a href="#">Guests <span className="qtyTotal" name="qtyTotal">1</span></a>
							<div className="panel-dropdown-content">

								<div className="qtyButtons">
									<div className="qtyTitle">Adults</div>
									<input type="text" name="qtyInput" value="1"/>
								</div>

								<div className="qtyButtons">
									<div className="qtyTitle">Childrens</div>
									<input type="text" name="qtyInput" value="0"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{this.state.packageSelected?
				<div>
					<Link to={`/book/${this.state.activity.title}`} className="button book-now fullwidth margin-top-5">Book now</Link>
					<Link to="/cart" className="button book-now fullwidth margin-top-5 x-addToCartBtn"><span className="im im-icon-Shopping-Cart"></span> Add to cart</Link>
					</div>
				:<a href="#listing-pricing-list" className="button book-now fullwidth margin-top-5">Request To Book</a>}
			
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
