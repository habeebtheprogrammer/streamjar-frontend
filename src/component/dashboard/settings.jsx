import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Settings extends Component {
    constructor() {
        super();
        this.state = {
      
        }
    }


   
    render() {
        return (
			<div className="dashboard-content">
	<div className="col-lg-12 col-md-8">
				<div className="dashboard-list-box margin-top-0">
					<h4>Settings</h4>
					<ul>

						<li>
							<div className="list-box-listing">

		<div className = "container">

		<div className="row">

			<div className="col-lg-6">
				<div className="dashboard-list-box margin-top-0">
					<div className="dashboard-list-box-static">

						<div className="my-profile">
							<label className="margin-top-0">Current Password</label>
							<input type="password" />

							<label>New Password</label>
							<input type="password" name="passwordcheck" id="passwordcheck" />
							<div>
                             <div className="figure" id="strength_human"></div>    
                             <div className="figure" id="strength_score"></div>
                            </div>
							   

							<label>Confirm New Password
							<input type="password"  name="confirm_password"  id="confirm_password" />
							 <span id='message'></span>
							 </label>






							<button className="button margin-top-15">Save</button>
						</div>

					</div>
				</div>
			</div>
            <div className="col-lg-6">
            <div className="dashboard-list-box margin-top-0">
					<div className="dashboard-list-box-static">



<div id="add-listing">

    <div className="add-listing-section">

        <div className="row with-forms">

            <div className="col-md-12 gtranslate">
                <h5>Default Language</h5>
						<div id="google_translate_element"></div>
                {/* <select className="chosen-select-no-single" >
                    <option label="blank">English</option>	
                    <option>Bahasa Indonesia</option>
                </select> */}
            </div>


        </div>
        <div className="row with-forms">

            <div className="col-md-12">
                <h5>Default Currency</h5>
                <select className="chosen-select-no-single" >
                    <option label="blank">INR</option>	
                    <option>USD</option>
                </select>
            </div>
            

        </div>
							<button className="button margin-top-15">Save</button>

    </div></div></div>

</div>

</div>
</div>

		<div className="row">
			
		</div>
        </div>
        </div>
        </li>
        </ul>
        </div>
        </div>
        </div>
	   )}

       }