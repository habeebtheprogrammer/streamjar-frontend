import React,{Component} from "react"
import Banner from "./activitiesbanner";
import Navbar from "../navbar";
import Activitiescontent from "./activitiescontent";
import $ from  "jquery"
import Footer from "../footer"
export default class Activities extends Component{
    componentWillMount() {
        $(document).scrollTop(0)
    }
    render(){
        return(
            <div>
                <Navbar match={this.props.match}/>
                <Banner match={this.props.match}/>
                <Activitiescontent {...this.props}/>
                <Footer />
            </div>
        )
    }
}