import React, { Component } from 'react';
import { Link } from "react-router-dom"
export default class Footer extends Component {
    constructor() {
        super();
        this.state = {
    }
    }
    render() {
        return (
            <div>
                <div id="footer" className="light">
	<div className="container">
		<div className="row">
			<div className="col-md-5 col-sm-6">
				<img className="footer-logo" src="images/logo.png" alt="" />
				<br /> <br />
				<p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
			</div>

			<div className="col-md-4 col-sm-6 ">
				<h4>Helpful Links</h4>
				<ul className="footer-links">
					<li><a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"> Login </a></li>
					<li><a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"> Sign up</a></li>
					<li><Link to="/dashboard">My Account</Link></li>
					{/* <li><a href="/privacy">Privacy Policy</a></li> */}
					<li className="gtranslate" style={{padding:"0px 0px 0px 20px"}}>
						<div id="google_translate_element"></div>

					</li>
				</ul>

				{/* <ul className="footer-links">
					<li><Link to="/fag">FAQ</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/our_partners">Our Partners</Link></li>
					<li><Link to="/how_it_works">How It Works</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul> */}
				<div className="clearfix"></div>
			</div>

			<div className="col-md-3  col-sm-12">
				<h4>Contact Us</h4>
				<div className="text-widget">
					<span>12345 Little Lonsdale St, Melbourne</span> <br />
					Phone: <span>(123) 123-456 </span><br />
					E-Mail:<span> <a href="#">office@example.com</a> </span><br />
				</div>

				<ul className="social-icons margin-top-20">
					<li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
					<li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
					<li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
					<li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
				</ul>

			</div>

		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="copyrights">© 2018 Tzoor. All Rights Reserved.</div>
			</div>
		</div>

	</div>

</div>
<div id="backtotop"><a href="#"></a></div>
<style>{`
body{
	top:0 !important
}
.goog-te-gadget-simple{
	border: 0px !important;
}
`}</style>
         </div>
        );
    }
}
