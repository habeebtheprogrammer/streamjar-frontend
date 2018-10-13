import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Footer from './footer';
import activities from "../data"
export default class Manageattractions extends Component {
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

		
			<div className="row">
				
	
<div className="col-lg-12 col-md-12">
<div className="dashboard-list-box margin-top-0">
    <h4>Manage Attractions</h4>
    <ul>
        {activities.map((activity)=>(
   <li>
   <div className="list-box-listing">
       <div className="list-box-listing-img"><a href="#"><img src={activity.img[0]}alt="" /></a></div>
       <div className="list-box-listing-content">
           <div className="inner">
               <h3><a href="#">{activity.title}</a></h3>
               <span>{activity.category}</span>
               <div className="star-rating" data-rating="3.5">
                   <div className="rating-counter">(12 reviews)</div>
               </div>
           </div>
       </div>
   </div>
   <div className="buttons-to-right">
       <a href={`/dashboard/edit_listing/${activity.title}`}className="button gray"><i className="sl sl-icon-note"></i> Edit</a>
       <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
   </div>
</li>
        ))}
     

    </ul>
</div>
</div>
				
			</div>
	<Footer />
		</div>
	   )}

       }
