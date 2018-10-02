import React, { Component } from 'react';
import { Link } from "react-router-dom"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import auth from "../../reducer/index"
import $ from "jquery"
import Signinmodal from '../extra/signinmodal';
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Navbar extends Component {

    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        window.location.assign("/")
    }

    render() {
        return (
<header id="header-container">
	<div id="header">
		<div id="nav-container" className="container">
			<div className="left-side" style={{paddingLeft:"20px"}}>
				<div id="logo">
					<a href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" /></a>
				</div>
				<div className="mmenu-trigger">
					<button className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</div>
			</div>
			<div className="right-side">
						<nav id="navigation" className="style-1">
					<ul id="responsive">
						<li><a href="javascript:;">USD</a>
							<div className="mega-menu mobile-styles three-columns">
									<div className="mega-menu-section">
										<ul>
											<li className="mega-menu-headline">Suggested Currencies</li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>

											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
										</ul>
									</div>
		
									<div className="mega-menu-section">
										<ul>
											<li className="mega-menu-headline">Other Currencies</li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											
										</ul>
									</div>

									<div className="mega-menu-section">
										<ul>
											<li className="mega-menu-headline"> &nbsp;&nbsp;</li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											<li><a className="f_h_main t12" dataValue="SGD" href="javascript:;"><span className="white">SGD</span> Singapore Dollar</a></li>
											
										</ul>
									</div>
									
							</div>
						</li>
						
						<li>
								<Link to="/download">Download App</Link>	
			                 </li>
			                 <li>
								<Link to="/help"> Help</Link>	
			                 </li>
							<li>
								<Link to="/cart" ><i className="sl sl-icon-basket"></i> Cart </Link>	
			                 </li>

						{this.props.match.path==="/dashboard"?
								<li><Link to="/dashboard" style={{"padding":"0px 10px"}}><span  className="pull-left"><img src="../../../images/sonu.jpg" width="30px" alt="" style={{"borderRadius":"100%"}}/></span><span className="pull-left" style={{padding:"3px 10px 0px"}}>profile</span> </Link></li>
						:
						
				          <li>
						
					         <a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login"></i> Sign In</a>
			             </li>
						}
					</ul>
                                  
					</nav>
				
			</div>
            <Signinmodal />
		</div>
	</div>
</header>

        );
    }
}

export default connect(mapStateToProps)(Navbar);