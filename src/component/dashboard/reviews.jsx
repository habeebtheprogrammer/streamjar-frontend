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
		{/* <div id="add-review" className="add-review-box">

<h3 className="listing-desc-headline margin-bottom-20">Add Review</h3>

<span className="leave-rating-title">Your rating for this listing</span>

<div className="row">
	<div className="col-md-6">
		<div className="clearfix"></div>
		<div className="leave-rating margin-bottom-30">
			<input type="radio" name="rating" id="rating-1" value="1"/>
			<label for="rating-1" className="fa fa-star"></label>
			<input type="radio" name="rating" id="rating-2" value="2"/>
			<label for="rating-2" className="fa fa-star"></label>
			<input type="radio" name="rating" id="rating-3" value="3"/>
			<label for="rating-3" className="fa fa-star"></label>
			<input type="radio" name="rating" id="rating-4" value="4"/>
			<label for="rating-4" className="fa fa-star"></label>
			<input type="radio" name="rating" id="rating-5" value="5"/>
			<label for="rating-5" className="fa fa-star"></label>
		</div>
		<div className="clearfix"></div>
	</div>

	<div className="col-md-6">
		<div className="add-review-photos margin-bottom-30">
			<div className="photoUpload">
				<span><i className="sl sl-icon-arrow-up-circle"></i> Upload Photos</span>
				<input type="file" className="upload" />
			</div>
		</div>
	</div>
</div>

<form id="add-comment" className="add-comment">
	<fieldset>

		<div className="row">
			<div className="col-md-6">
				<label>Name:</label>
				<input type="text" value=""/>
			</div>
				
			<div className="col-md-6">
				<label>Email:</label>
				<input type="text" value=""/>
			</div>
		</div>

		<div>
			<label>Review:</label>
			<textarea cols="40" rows="3"></textarea>
		</div>

	</fieldset>

	<button className="button">Submit Review</button>
	<div className="clearfix"></div>
</form>

</div> */}
		</div>
	   )}

       }