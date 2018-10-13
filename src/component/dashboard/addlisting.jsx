import React, { Component } from 'react';
import { Link } from "react-router-dom"
import {categories,regions,cities,subcategories} from "../data"
export default class Addlisting extends Component {
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
			<div className="col-lg-12">

				<div id="add-listing">

					<div className="add-listing-section">

						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-doc"></i> Basic Informations</h3>
						</div>

						<div className="row with-forms">
							<div className="col-md-12">
								<h5>Listing Title <i className="tip" data-tip-content="Name of your business"></i></h5>
								<input className="search-field" type="text" value=""/>
							</div>
						</div>

						<div className="row with-forms">

							<div className="col-md-6">
								<h5>Category</h5>
								<select className="chosen-select-no-single" >
									<option label="blank">Select Category</option>	
									{categories.map((category)=>(
										<option>{category.title}</option>
									))}
								</select>
							</div>
							<div className="col-md-6">
								<h5>Sub Category</h5>
								<select className="chosen-select-no-single" >
									<option label="blank">Select Category</option>	
									{subcategories.map((category)=>(
										<option>{category.title}</option>
									))}
								</select>
							</div>
						

						</div>

					</div>

					<div className="add-listing-section margin-top-45">

						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-location"></i> Location</h3>
						</div>

						<div className="submit-section">

							<div className="row with-forms">

								<div className="col-md-6">
									<h5>City</h5>
									<select className="chosen-select-no-single" >
										<option label="blank">Select City</option>	
										<option>New York</option>
										<option>Los Angeles</option>
										<option>Chicago</option>
										<option>Houston</option>
										<option>Phoenix</option>
										<option>San Diego</option>
										<option>Austin</option>
									</select>
								</div>

								<div className="col-md-6">
									<h5>Address</h5>
									<input type="text" placeholder="e.g. 964 School Street" />
								</div>

								<div className="col-md-6">
									<h5>State</h5>
									<input type="text" />
								</div>

								<div className="col-md-6">
									<h5>Zip-Code</h5>
									<input type="text" />
								</div>

							</div>

						</div>
					</div>
					<div className="add-listing-section margin-top-45">
						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-picture"></i> What to expect</h3>
						</div>
						
						<div className="row">
							<div className="col-sm-3">
							<div className="submit-section">
							<form action="/file-upload" className="dropzone" ></form>
						</div>
							</div>
							<div className="col-sm-9">
							<textarea className="WYSIWYG" name="summary" cols="20" rows="1" id="summary" spellcheck="true" style={{minHeight:"156px"}}></textarea>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-3">
							<div className="submit-section">
							<form action="/file-upload" className="dropzone" ></form>
						</div>
							</div>
							<div className="col-sm-9">
							<textarea className="WYSIWYG" name="summary" cols="20" rows="1" id="summary" spellcheck="true" style={{minHeight:"156px"}}></textarea>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-3">
							<div className="submit-section">
							<form action="/file-upload" className="dropzone" ></form>
						</div>
							</div>
							<div className="col-sm-9">
							<textarea className="WYSIWYG" name="summary" cols="20" rows="1" id="summary" spellcheck="true" style={{minHeight:"156px"}}></textarea>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-3">
							<div className="submit-section">
							<form action="/file-upload" className="dropzone" ></form>
						</div>
							</div>
							<div className="col-sm-9">
							<textarea className="WYSIWYG" name="summary" cols="20" rows="1" id="summary" spellcheck="true" style={{minHeight:"156px"}}></textarea>
							</div>
						</div>
						

					</div>
					<div className="add-listing-section margin-top-45">

						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-docs"></i> Activity information</h3>
						</div>

						<div className="form">
							<h5>Description</h5>
							<textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
						</div>

						
						<h5 className="margin-top-30 margin-bottom-10">Amenities <span>(optional)</span></h5>
						<div className="checkboxes in-row margin-bottom-20">
					
							<input id="check-a" type="checkbox" name="check"  />
							<label for="check-a">No cancellation</label>

							<input id="check-b" type="checkbox" name="check" />
							<label for="check-b">1 Day(s) Duration</label>

							<input id="check-c" type="checkbox" name="check" />
							<label for="check-c"> Enter Directly With Voucher </label>

							<input id="check-d" type="checkbox" name="check" />
							<label for="check-d">Show Mobile or Printed Voucher</label>

							<input id="check-e" type="checkbox" name="check"/ >
							<label for="check-e">Open Date Ticket</label>

					
						</div>

					</div>
					<div className="add-listing-section margin-top-45">

						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-docs"></i> Additional information</h3>
						</div>

						<div className="form">
							<h5>Description</h5>
							<textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
						</div>


					</div>
					{/* <div className="add-listing-section margin-top-45">
						
						<div className="add-listing-headline">
							<h3><i className="fa fa-calendar-check-o"></i> Availability</h3>
							<label className="switch"><input type="checkbox" checked /><span className="slider round"></span></label>
						</div>
						
						<div className="switcher-content">
								
								<div className="availability-slots" data-clock-type="12hr">

									<div className="day-slots">
										<div className="day-slot-headline">
											Monday
										</div>
										
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		

										<div className="no-slots">No slots added</div>

										<div className="slots-container">

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">8:30 <i className="am-pm">am</i> - 9:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:00 <i className="am-pm">am</i> - 9:30 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:30 <i className="am-pm">am</i> - 10:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" /> 
														<button></button> 
													</div>
												</div>
											</div>
											
										</div>
										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>

									<div className="day-slots">
										<div className="day-slot-headline">
											Tuesday
										</div>
										
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		


										<div className="no-slots">No slots added</div>

										<div className="slots-container">

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">8:30 <i className="am-pm">am</i> - 9:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:00 <i className="am-pm">am</i> - 9:30 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:30 <i className="am-pm">am</i> - 10:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>
											
										</div>
										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>
									<div className="day-slots">
										<div className="day-slot-headline">
											Wednesday
										</div>
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		

										<div className="no-slots">No slots added</div>

										<div className="slots-container">

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">8:30 <i className="am-pm">am</i> - 9:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>
											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:00 <i className="am-pm">am</i> - 9:30 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>
											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:30 <i className="am-pm">am</i> - 10:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>
											
										</div>
										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>
									<div className="day-slots">
										<div className="day-slot-headline">
											Thursday
										</div>
										
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		

										<div className="no-slots">No slots added</div>

										<div className="slots-container">

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">8:30 <i className="am-pm">am</i> - 9:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:00 <i className="am-pm">am</i> - 9:30 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:30 <i className="am-pm">am</i> - 10:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>
											
										</div>


										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>

									<div className="day-slots">
										<div className="day-slot-headline">
											Friday
										</div>
										
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		

										<div className="no-slots">No slots added</div>

										<div className="slots-container">

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">8:30 <i className="am-pm">am</i> - 9:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:00 <i className="am-pm">am</i> - 9:30 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>

											<div className="single-slot">
												<div className="single-slot-left">
													<div className="single-slot-time">9:30 <i className="am-pm">am</i> - 10:00 <i className="am-pm">am</i></div>
													<button className="remove-slot"><i className="fa fa-close"></i></button>
												</div>

												<div className="single-slot-right">
													<strong>Slots:</strong>
													<div className="plusminus horiz">
														<button></button>
														<input type="number" name="slot-qty" value="1" min="1" max="99" />
														<button></button> 
													</div>
												</div>
											</div>
											
										</div>
										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>
									<div className="day-slots">
										<div className="day-slot-headline">
											Saturday
										</div>
										
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		

										<div className="no-slots">No slots added</div>
										<div className="slots-container">
											
										</div>
										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>
									<div className="day-slots">
										<div className="day-slot-headline">
											Sunday
										</div>
										
										<div className="single-slot cloned">
											<div className="single-slot-left">
												<div className="single-slot-time"></div>
												<button className="remove-slot"><i className="fa fa-close"></i></button>
											</div>

											<div className="single-slot-right">
												<strong>Slots:</strong>
												<div className="plusminus horiz">
													<button></button>
													<input type="number" name="slot-qty" value="1" min="1" max="99" />
													<button></button> 
												</div>
											</div>
										</div>		


										<div className="no-slots">No slots added</div>

										<div className="slots-container">
											
										</div>
										<div className="add-slot">
											<div className="add-slot-inputs">
        										<input type="time" className="time-slot-start" min="00:00" max="12:00"/>
												<select className="time-slot-start twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
        										<span>-</span>

   												<input type="time" className="time-slot-end" min="00:00" max="12:00"/>
												<select className="time-slot-end twelve-hr" id="">
													<option>am</option>
													<option>pm</option>
												</select>
											</div>
											<div className="add-slot-btn">
												<button>Add</button>
											</div>
										</div>

									</div>
								</div>

						</div>

					</div> */}

					<div className="add-listing-section margin-top-45">
						
						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-clock"></i> Opening Hours</h3>
							<label className="switch"><input type="checkbox"  /><span className="slider round"></span></label>
						</div>
						
						<div className="switcher-content">

							<div className="row opening-day">
								<div className="col-md-2"><h5>Monday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
										<option label="Opening Time"></option>
										<option>Closed</option>
										<option>1 AM</option>
										<option>2 AM</option>
										<option>3 AM</option>
										<option>4 AM</option>
										<option>5 AM</option>
										<option>6 AM</option>
										<option>7 AM</option>
										<option>8 AM</option>
										<option>9 AM</option>
										<option>10 AM</option>
										<option>11 AM</option>
										<option>12 AM</option>	
										<option>1 PM</option>
										<option>2 PM</option>
										<option>3 PM</option>
										<option>4 PM</option>
										<option>5 PM</option>
										<option>6 PM</option>
										<option>7 PM</option>
										<option>8 PM</option>
										<option>9 PM</option>
										<option>10 PM</option>
										<option>11 PM</option>
										<option>12 PM</option>
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
										<option label="Closing Time"></option>
										<option>Closed</option>
										<option>1 AM</option>
										<option>2 AM</option>
										<option>3 AM</option>
										<option>4 AM</option>
										<option>5 AM</option>
										<option>6 AM</option>
										<option>7 AM</option>
										<option>8 AM</option>
										<option>9 AM</option>
										<option>10 AM</option>
										<option>11 AM</option>
										<option>12 AM</option>	
										<option>1 PM</option>
										<option>2 PM</option>
										<option>3 PM</option>
										<option>4 PM</option>
										<option>5 PM</option>
										<option>6 PM</option>
										<option>7 PM</option>
										<option>8 PM</option>
										<option>9 PM</option>
										<option>10 PM</option>
										<option>11 PM</option>
										<option>12 PM</option>
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
							<div className="row opening-day js-demo-hours">
								<div className="col-md-2"><h5>Tuesday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
							<div className="row opening-day js-demo-hours">
								<div className="col-md-2"><h5>Wednesday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
							<div className="row opening-day js-demo-hours">
								<div className="col-md-2"><h5>Thursday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
							<div className="row opening-day js-demo-hours">
								<div className="col-md-2"><h5>Friday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
							<div className="row opening-day js-demo-hours">
								<div className="col-md-2"><h5>Saturday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
							<div className="row opening-day js-demo-hours">
								<div className="col-md-2"><h5>Sunday</h5></div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Opening Time">
									</select>
								</div>
								<div className="col-md-5">
									<select className="chosen-select" data-placeholder="Closing Time">
									</select>
								</div>
								<div className="col-md-2"><h5>Tickets available</h5></div>
								<div className="col-md-5">
									<input className="form-control" type="number"/>
								</div>
								
							</div>
						</div>
					</div>


					<div className="add-listing-section margin-top-45">
						<div className="add-listing-headline">
							<h3><i className="sl sl-icon-book-open"></i> Pricing</h3>
							<label className="switch"><input type="checkbox" checked /><span className="slider round"></span></label>
						</div>

						<div className="switcher-content">

							<div className="row">
								<div className="col-md-12">
									<table id="pricing-list-container">
										<tr className="pricing-list-item pattern">
											<td>
												<div className="fm-move"><i className="sl sl-icon-cursor-move"></i></div>
												<div className="fm-input pricing-name"><input type="text" placeholder="Title" /></div>
												<div className="fm-input pricing-ingredients"><input type="text" placeholder="Description" /></div>
												<div className="fm-input pricing-price"><input type="text" placeholder="Price" data-unit="USD" /></div>
												<div className="fm-close"><a className="delete" href="#"><i className="fa fa-remove"></i></a></div>
											</td>
										</tr>
									</table>
									<a href="#" className="button add-pricing-list-item">Add Item</a>
									<a href="#" className="button add-pricing-submenu">Add Category</a>
								</div>
							</div>

						</div>
					</div>

					<a href="#" className="button preview">Preview <i className="fa fa-arrow-circle-right"></i></a>

				</div>
			</div>

		</div>

	</div>
		)}

       }