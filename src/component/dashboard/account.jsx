import React, { Component } from 'react';
import { Link } from "react-router-dom"
import $ from "jquery"
export default class Account extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            error: "",
            success: "",
        }
    }


  
    render() {
        return (
			<div className="dashboard-content">
			
	
			<div className="row">
	
				<div className="col-lg-6 col-md-12">
					<div className="dashboard-list-box margin-top-0">
						<h4 className="gray">Profile Details</h4>
						<div className="dashboard-list-box-static">
							
							<div className="edit-profile-photo">
								<img src={`${process.env.PUBLIC_URL}/images/sonu.jpg`} alt="" />
								<div className="change-photo-btn">
									<div className="photoUpload">
										<span><i className="fa fa-upload"></i> Upload Photo</span>
										<input type="file" className="upload" />
									</div>
								</div>
							</div>
							<div className="my-profile">
	
								<label>Your Name</label>
								<input value="Tom Perrin" type="text" />
	
								<label>Phone</label>
								<input value="(123) 123-456" type="text" />
	
								<label>Email</label>
								<input value="tom@example.com" type="text" />
	
								<label>Notes</label>
								<textarea name="notes" id="notes" cols="30" rows="10">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>
	
								<label><i className="fa fa-twitter"></i> Twitter</label>
								<input placeholder="https://www.twitter.com/" type="text" />
	
								<label><i className="fa fa-facebook-square"></i> Facebook</label>
								<input placeholder="https://www.facebook.com/" type="text" />
	
								<label><i className="fa fa-google-plus"></i> Google+</label>
								<input placeholder="https://www.google.com/" type="text"/>
							</div>
		
							<button className="button margin-top-15">Save Changes</button>
	
						</div>
					</div>
				</div>
	
				<div className="col-lg-6 col-md-12">
					<div className="dashboard-list-box margin-top-0">
						<h4 className="gray">Change Password</h4>
						<div className="dashboard-list-box-static">
	
							<div className="my-profile">
								<label className="margin-top-0">Current Password</label>
								<input type="password"/>
	
								<label>New Password</label>
								<input type="password"/>
	
								<label>Confirm New Password</label>
								<input type="password" />
	
								<button className="button margin-top-15">Change Password</button>
							</div>
	
						</div>
					</div>
				</div>
	
			
			</div>
	
		</div>
	   )}

       }