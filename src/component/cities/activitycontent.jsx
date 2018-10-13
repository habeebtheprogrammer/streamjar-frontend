import React,{Component} from "react"
import Citybanner from "./activitiesbanner";
import Navbar from "../navbar";
import {Link} from "react-router-dom"
import activities from "../data"
export default class Activitycontent extends Component{
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
    render(){
       
        return(
            <div className="container">
            <div className="row">
                
                <div className="col-md-12">
                    
        
        
                     {/* <div className="col-md-12 dark-overlay">
        
                    <div className="img-box " data-background-image={`${process.env.PUBLIC_URL}/images/sightseeing.jpg`} id="banner_img"  >
                        <div className="img-box-content visible" id="banner_img_content">
                            <h3 className="white-color">Shops</h3>
                            
                        </div>
                    </div>
        
                </div>	 */}
        
        
                </div>
                </div>
        
        
                <div className="col-md-12">
        
                    <div id="filters">
                            <ul className="option-set margin-bottom-30">
                                <li><a href="#filter" className="selected" data-filter="*">All</a></li>
                                <li><a href="#filter" data-filter=".first-filter">Crusing</a></li>
                                <li><a href="#filter" data-filter=".second-filter">Water activites</a></li>
                                <li><a href="#filter" data-filter=".third-filter">For locals</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Indoor activities</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Cultural experience</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Shopping experince</a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
        
        
        
                    <div className="row margin-bottom-20 margin-top-30">
        
                        <div className="col-md-6">
        
                        </div>
        
                        <div className="col-md-6">
                            <div className="fullwidth-filters">
                              
                                <div className="sort-by">
                                    <div className="sort-by-select">
                                        <select data-placeholder="Default order" className="chosen-select-no-single">
                                            <option>Most Popular</option>	
                                            <option>Highest Rated</option>
                                            <option>Most Reviewed</option>
                                            <option>Price:</option>
                                            <option>High to Low</option>
                                            <option>Low to High</option>
                                        </select>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                    </div>
	<section className="fullwidth">
        
        
                    <div className="row ">
        
        
        
                        {activities.map((activity,key)=>(
                            <div className="col-lg-4 col-md-6  ">
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
        
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pagination-container margin-top-20 margin-bottom-40">
                                <nav className="pagination">
                                    <ul>
                                        <li><a href="#" className="current-page">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
        
                
        
                    <div className="clearfix"></div>
                    
                    </div>
                    </section>
                </div>
        
            </div>
        )
    }
}
