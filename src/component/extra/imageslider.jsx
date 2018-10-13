import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Slider from "react-slick";
export default class imageslider extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const settings = {
            dots: false,
            arrows:true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:5000,
            speed: 500,
            slidesToShow:1,
            slidesToScroll: 1
          };
        return (
			<div className="row" >
                {/* <Slider {...settings}>
			{this.props.img.map((img,key)=>(
                <div>
                <div className="ximgslider"  style={{"maxHeight":"450px"}}>
                <a href={img} className="mfp-gallery"><img src={img} alt="" width="100%" /></a>
                </div>
                </div>
            ))}
            </Slider> */}
               
            </div>
			);
    }
}
