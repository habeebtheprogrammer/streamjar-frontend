import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config.js"
export default class Search extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.typing = this.typing.bind(this)
    }

    typing(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
<div className="main-search-container dark-overlay">
	<div className="main-search-inner">

		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2>Find Nearby Attractions</h2>
					<h4>Expolore top-rated attractions, activities and more</h4>

					<div className="main-search-input">

						

						<div className="main-search-input-item location">
							<div id="autocomplete-container">
								<input id="autocomplete-input" type="text" placeholder="Search" />
							</div>
							{/* <a href="#"><i className="fa fa-map-marker"></i></a> */}
						</div>

						<button className="button" onclick="window.location.href='listings-half-screen-map-list.html'">Search</button>

					</div>
				</div>
			</div>
		</div>

	</div>
	
	<div className="video-container">
		<video poster="images/search.jpeg" loop autoPlay muted>
			<source src="images/project1.mp4" type="video/mp4" />
		</video>
	</div>

</div>
        );
    }
}
