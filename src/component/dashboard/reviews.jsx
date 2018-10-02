import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Reviews extends Component {
    constructor() {
        super();
        this.state = {
       
        }
    }


   
    render() {
        return (
			<div className="dashboard-content">
	<div className="row">
			
			<div className="col-lg-12">
				<div className="dashboard-list-box margin-top-0">
					<h4>Your Reviews</h4>
					<ul>

						<li>
							<div className="comments listing-reviews">
								<ul>
									<li>
										<div className="avatar"><img src={`${process.env.PUBLIC_URL}/images/sonu.jpg`} alt="" /> </div>
										<div className="comment-content"><div className="arrow-comment"></div>
											<div className="comment-by">Your review <div className="comment-by-listing own-comment">on <a href="#">Tom's Restaurant</a></div> <span className="date">May 2017</span>
												<div className="star-rating" data-rating="4.5"></div>
											</div>
											<p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
											{/* <a href="#" className="rate-review"><i className="sl sl-icon-note"></i> Edit</a> */}
										</div>

									</li>
								</ul>
							</div>
						</li>

						<li>
							<div className="comments listing-reviews">
								<ul>
									<li>
										<div className="avatar"><img src={`${process.env.PUBLIC_URL}/images/sonu.jpg`} alt="" /> </div>
										<div className="comment-content"><div className="arrow-comment"></div>
											<div className="comment-by">Your review <div className="comment-by-listing own-comment">on <a href="#">Think Coffee</a></div> <span className="date">May 2017</span>
												<div className="star-rating" data-rating="5"></div>
											</div>
											<p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
											{/* <a href="#" className="rate-review"><i className="sl sl-icon-note"></i> Edit</a> */}
										</div>

									</li>
								</ul>
							</div>
						</li>

					</ul>
				</div>
			</div>
		
		</div>
		
		</div>
	   )}

       }