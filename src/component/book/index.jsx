import React,{Component} from "react"
import Navbar from "../navbar";
import $ from  "jquery"
import Footer from "../footer"
export default class Book extends Component{
    componentWillMount() {
        $(document).scrollTop(0)
    }
    render(){
        return(
            <div>
                <Navbar match={this.props.match}/>
                <div className="xleft">
            
<div className="bgwhite" >
<div className="container  padding-top-80 ">
	<div className="row ">

		<div className="col-lg-8 col-md-8 padding-right-30 ">

			<h3 className="margin-top-0 margin-bottom-30">Personal Details</h3>

			<div className="row">

				<div className="col-md-6">
					<label>First Name</label>
					<input type="text" value="" />
				</div>

				<div className="col-md-6">
					<label>Last Name</label>
					<input type="text" value="" />
				</div>

				<div className="col-md-6">
					<div className="input-with-icon medium-icons">
						<label>E-Mail Address</label>
						<input type="text" value="" />
						<i className="im im-icon-Mail"></i>
					</div>
				</div>

				<div className="col-md-6">
					<div className="input-with-icon medium-icons">
						<label>Phone</label>
						<input type="text" value="" />
						<i className="im im-icon-Phone-2"></i>
					</div>
				</div>

			</div>


			<h3 className="margin-top-55 margin-bottom-30">Payment Method</h3>

			<div className="payment">

				<div className="payment-tab payment-tab-active">
					<div className="payment-tab-trigger">
						<input checked id="paypal" name="cardType" type="radio" value="paypal" />
						<label for="paypal">PayPal</label>
						<img className="payment-logo paypal" src="https://i.imgur.com/ApBxkXU.png" alt="" />
					</div>

					<div className="payment-tab-content">
						<p>You will be redirected to PayPal to complete payment.</p>
					</div>
				</div>


				<div className="payment-tab">
					<div className="payment-tab-trigger">
						<input type="radio" name="cardType" id="creditCart" value="creditCard" />
						<label for="creditCart">Credit / Debit Card</label>
						<img className="payment-logo" src="https://i.imgur.com/IHEKLgm.png" alt="" />
					</div>

					<div className="payment-tab-content">
						<div className="row">

							<div className="col-md-6">
								<div className="card-label">
									<label for="nameOnCard">Name on Card</label>
									<input id="nameOnCard" name="nameOnCard" required type="text" />
								</div>
							</div>

							<div className="col-md-6">
								<div className="card-label">
									<label for="cardNumber">Card Number</label>
									<input id="cardNumber" name="cardNumber" placeholder="1234  5678  9876  5432" required type="text" />
								</div>
							</div>

							<div className="col-md-4">
								<div className="card-label">
									<label for="expirynDate">Expiry Month</label>
									<input id="expiryDate" placeholder="MM" required type="text" />
								</div>
							</div>

							<div className="col-md-4">
								<div className="card-label">
									<label for="expiryDate">Expiry Year</label>
									<input id="expirynDate" placeholder="YY" required type="text" />
								</div>
							</div>

							<div className="col-md-4">
								<div className="card-label">
									<label for="cvv">CVV</label>
									<input id="cvv" required type="text" />
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
			<a href="pages-booking-confirmation.html" className="button booking-confirmation-btn margin-top-40 margin-bottom-65">Confirm and Pay</a>
		</div>


		<div className="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
			<div className="listing-item-container compact order-summary-widget">
				<div className="listing-item">
					<img src="../../../images/sa.jpg" alt="" />

					<div className="listing-item-content">
						<div className="numerical-rating" data-rating="5.0"></div>
						<h3>Burger House</h3>
						<span>2726 Shinn Street, New York</span>
					</div>
				</div>
			</div>
			<div className="boxed-widget opening-hours summary margin-top-0">
				<h3><i className="fa fa-calendar-check-o"></i> Booking Summary</h3>
				<ul>
					<li>Date <span>10/20/2017</span></li>
					<li>Hour <span>5:30 PM</span></li>
					<li>Guests <span>2 Adults</span></li>
					<li className="total-costs">Total Cost <span>$9.00</span></li>
				</ul>

			</div>

		</div>

	</div>
</div>
</div>
                <Footer />
            </div>
            </div>
        )
    }
}