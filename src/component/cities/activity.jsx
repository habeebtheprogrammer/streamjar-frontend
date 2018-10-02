import React,{Component} from "react"
import Banner from "./activitiesbanner";
import Navbar from "../navbar";
import Activitycontent from "./activitycontent";
import Footer from "../footer"
import $ from "jquery"

export default class Activity extends Component{
    componentWillMount() {
        $(document).scrollTop(0)
    }
    render(){
        return(
            <div>
                <Navbar match={this.props.match}/>
                <Banner {...this.props}/>
                <Activitycontent {...this.props}/>
                <Footer />
            </div>
        )
    }
}