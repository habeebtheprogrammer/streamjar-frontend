import React,{Component} from "react"
import {Link} from "react-router-dom"
import activities,{categories} from "../data.js"

export default class Activitiescontent extends Component{
    render(){
        return(
            <div className="container">
              <div className="row">

<div className="col-md-12">
    <h3 className="headline centered margin-bottom-35 ">DISCOVER &amp; BOOK THE BEST ACTIVITIES</h3>
</div>
{categories.map((category)=>(
    <div className="row">
    <div className="col-md-12 dark-overlay margin-top-25">

    
<Link to={`/cities/${this.props.match.params.id}/${category.title}`} className="img-box"  data-background-image={category.img} id="banner_img">
    <div className="img-box-content visible" id="banner_img_content">
        <h3 className="white-color" style={{textTransform:"capitalize"}}>{category.title}</h3>
    </div>
</Link>

</div>

{activities.slice(0,6).map((activity,key)=>(
<div className="col-md-4">


<Link to={`/cities/${activity.city}/${activity.category}/${activity.title}`} className="img-box" data-background-image={activity.img[key]||"../../../images/new.jpeg"}>
    <div className="img-box-content visible">
        <h4 style={{textTransform:"capitalize"}}>{activity.title} </h4>
        <span >10k+ Booked</span>

    </div>
    <span><h5>USD 40</h5></span>
    <span className="like-icon"></span>

</Link>

</div>
))}
    </div>
))}

<div className="clearfix"></div>


</div>
            </div>
        )
    }
}
