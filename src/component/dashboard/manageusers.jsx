import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Footer from './footer';

export default class Manageusers extends Component {
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
				
	
<div className="col-lg-12 col-md-12">
<div className="dashboard-list-box margin-top-0">
    <h4>Manage Users</h4>
    <ul>

        <li>
            <div className="list-box-listing">
                <div className="list-box-listing-img"><a href="#"><img src={`${process.env.PUBLIC_URL}/images/sonu.jpg`}alt="" /></a></div>
                <div className="list-box-listing-content">
                    <div className="inner">
                        <h3><a href="#">John Doe</a></h3>
                        <span>964 School Street, New York</span>
                     
                    </div>
                </div>
            </div>
            <div className="buttons-to-right">
            <Link to="/dashboard/account"  className="button gray"><i className="sl sl-icon-note"></i> Edit</Link>
                <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
            </div>
        </li>

        <li>
            <div className="list-box-listing">
                <div className="list-box-listing-img"><a href="#"><img src={`${process.env.PUBLIC_URL}/images/pawandeep.jpg`} alt="" /></a></div>
                <div className="list-box-listing-content">
                    <div className="inner">
                        <h3>Steave Jobs</h3>
                        <span>Bishop Avenue, New York</span>
                       
                    </div>
                </div>
            </div>
            <div className="buttons-to-right">
            <Link to="/dashboard/account"  className="button gray"><i className="sl sl-icon-note"></i> Edit</Link>
                <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
            </div>
        </li>
        
        <li>
            <div className="list-box-listing">
                <div className="list-box-listing-img"><a href="#"><img src={`${process.env.PUBLIC_URL}/images/sonu.jpg`} alt="" /></a></div>
                <div className="list-box-listing-content">
                    <div className="inner">
                        <h3>Jeff Bezos</h3>
                        <span>778 Country Street, New York</span>
                     
                    </div>
                </div>
            </div>
            <div className="buttons-to-right">
            <Link to="/dashboard/account"  className="button gray"><i className="sl sl-icon-note"></i> Edit</Link>
                <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
            </div>
        </li>

        <li>
            <div className="list-box-listing">
                <div className="list-box-listing-img"><a href="#"><img src={`${process.env.PUBLIC_URL}/images/pawandeep.jpg`} alt="" /></a></div>
                <div className="list-box-listing-content">
                    <div className="inner">
                        <h3>Mark Zuckerberg</h3>
                        <span>2726 Shinn Street, New York</span>
                      
                    </div>
                </div>
            </div>
            <div className="buttons-to-right">
                <Link to="/dashboard/account"  className="button gray"><i className="sl sl-icon-note"></i> Edit</Link>
                <a href="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</a>
            </div>
        </li>

    </ul>
</div>
</div>
				
			</div>
	<Footer />
		</div>
	   )}

       }
