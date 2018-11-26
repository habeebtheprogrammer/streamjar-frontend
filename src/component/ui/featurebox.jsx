import React,{Component} from "react"
export default class Featurebox extends Component{
    render(){
        return(
                   
                                <div className="feature-box" data-aos="zoom-in-up" data-aos-duration="0" data-aos-delay={this.props.delay||0}>
                                    <h2><i className={this.props.icon}></i></h2>
                                    <p>{this.props.content}</p>
                                </div>
                   
        )
    }
}


 