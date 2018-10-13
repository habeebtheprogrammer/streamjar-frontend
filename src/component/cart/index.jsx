import React,{Component} from "react"
import Navbar from "../navbar";
import $ from  "jquery"
import Footer from "../footer"
export default class Cart extends Component{
    componentWillMount() {
        $(document).scrollTop(0)
    }
    render(){
        return(
            <div>
                <Navbar match={this.props.match}/>
                <div className="xleft">
                <div id="titlebar" style={{margin:"0px",padding:"50px 0px 40px"}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">

                            <h2>  Shopping cart</h2>

                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li>cart</li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
            <div className="padding-top-100 padding-bottom-100 grey">
                <center>
                    <h1><i className="sl sl-icon-basket"></i></h1>
                <h2> Cart is empty
                 </h2>
                 </center>
            </div>
                <Footer />
            </div>
            </div>
        )
    }
}