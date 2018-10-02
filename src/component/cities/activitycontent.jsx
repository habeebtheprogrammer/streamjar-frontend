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
                                <li><a href="#filter" data-filter=".first-filter">First Filter</a></li>
                                <li><a href="#filter" data-filter=".second-filter">Second Filter</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Third Filter</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Third Filter</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Third Filter</a></li>
        
                                <li><a href="#filter" data-filter=".third-filter">Third Filter</a></li>
                                <li><a href="#filter" data-filter=".third-filter">Third Filter</a></li>
                                    <li><a href="#filter" data-filter=".third-filter">Third Filter</a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
        
        
        
                    <div className="row margin-bottom-20 margin-top-30">
        
                        <div className="col-md-6">
        
                            <div className="layout-switcher" id="viewfilter">
                                <a href="#view" className="grid active selected" data-filters=".grid-view"><i className="fa fa-th"></i></a>
                                <a href="#view" className="list active selected" data-filters=".list-view"><i className="fa fa-align-justify"></i></a>
                            </div>
                        </div>
        
                        <div className="col-md-6">
                            <div className="fullwidth-filters">
                                
                                <div className="panel-dropdown wide float-right">
                                    <a href="#">Price</a>
                                    <div className="panel-dropdown-content checkboxes">
        
                                        <div className="row">
        
                                            <input className="distance" type="range" list="tickmarks" min="0" max="100" step="5" value="50" data-title="" />
        
        
                                            <div className="col-md-6">
                                                <input id="check-a" type="checkbox" name="check" />
                                                <label for="check-a">0-100</label>
        
                                                <input id="check-b" type="checkbox" name="check"/>
                                                <label for="check-b"> 1000-10000</label>
        
                                                
                                            </div>	
        
                                            <div className="col-md-6">
                                                <input id="check-e" type="checkbox" name="check" />
                                                <label for="check-e">100-1000</label>
        
                                                <input id="check-f" type="checkbox" name="check" />
                                                <label for="check-f">10000-100000</label>
                                            </div>
                                        </div>
                                        
                                        <div className="panel-buttons">
                                            <button className="panel-cancel">Cancel</button>
                                            <button className="panel-apply">Apply</button>
                                        </div>
        
                                    </div>
                                </div>
                            
                                <div className="panel-dropdown float-right">
                                    <a href="#">Distance Radius</a>
                                    <div className="panel-dropdown-content">
                                        <input className="distance-radius" type="range" min="1" max="100" step="1" value="50" data-title="Radius around selected destination" />
                                        <div className="panel-buttons">
                                            <button className="panel-cancel">Disable</button>
                                            <button className="panel-apply">Apply</button>
                                        </div>
                                    </div>
                                </div>
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
        
        
                    <div className="row grid-view">
        
        
        
                        {activities.map((activity,key)=>(
                            <div className="col-lg-4 col-md-6 grid-view ">
                            <Link to={`/cities/${activity.city}/${activity.category}/${activity.title}`} className="listing-item-container compact">
                                <div className="listing-item">
                                    <img src={activity.img[key]||"../../../images/new.jpeg"} alt="" />
                                    {this.checkType(activity)}
                                    <div className="listing-item-content">
                                        <div className="numerical-rating" dataRating={this.rating(activity.reviews)}></div>
                                        <h3>{activity.title}</h3>
                                        <span>{activity.location}</span>
                                    </div>
                                    <span className="like-icon"></span>
                                </div>
                            </Link>
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
        
                </div>
        
            </div>
        )
    }
}
