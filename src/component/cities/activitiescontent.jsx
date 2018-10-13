import React,{Component} from "react"
import {Link} from "react-router-dom"
import activities,{categories} from "../data.js"

export default class Activitiescontent extends Component{
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
    rating(reviews){
        var rating =0;
        reviews.map((review,key)=>{
            rating +=review.rating;
        })
        return rating/reviews.length;
    }
    render(){
        return(
            <div className="container">
              <div className="row ">

<div className="col-md-12">
    <h3 className="headline centered margin-bottom-35 ">DISCOVER &amp; BOOK THE BEST ACTIVITIES</h3>
</div>

{categories.map((category)=>(
	<section className="fullwidth">

    <div className="row">
    <div className="col-md-12 dark-overlay margin-top-25">

    
<Link to={`/city/${this.props.match.params.city}/${category.title}`} className="img-box catimg"  style={{background:`url(${category.img}`,backgroundSize:"cover",backgroundPosition:"center"}} id="banner_img">
    <div className="img-box-content visible" id="banner_img_content">
        <h3 className="white-color" style={{textTransform:"capitalize"}}>{category.title}</h3>
    </div>
</Link>

</div>

{activities.slice(0,6).map((activity,key)=>(
<div className="col-md-4">
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
    </section>
))}

<div className="clearfix"></div>


</div>
    <style>{`
    .catimg{
        background-position:cover
    }
    `}</style>
            </div>
        )
    }
}
