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
			<div className="col-lg-10 col-md-4">
				<div className="dashboard-list-box margin-top-0">
					<h4>Profile Details</h4>
		        <div class = "container"> 
				<div className="col-lg-6 col-md-6">
				<div className="dashboard-list-box margin-top-0">
			
					<div className="dashboard-list-box-static">
						
						<div className="edit-profile-photo margin-top-10">
							<img src={`${process.env.PUBLIC_URL}/images/sightseeing.jpg`} alt="" />
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
				
						</div>
	
						<button className="button margin-top-15">Save Changes</button>

					</div>
				</div>
			</div>

			

			
		</div>
    </div>
    </div>
	</div>
</div>
       )}

       }