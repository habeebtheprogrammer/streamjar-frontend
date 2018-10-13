import React, { Component } from 'react';
import { Link } from "react-router-dom"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreator } from "redux"
import setAuthorizationToken from "../auth"
import auth from "../../reducer/index"
import $ from "jquery"
import Modal from "react-responsive-modal"
import Signinmodal from '../extra/signinmodal';
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Navbar extends Component {
	constructor(props){
		super(props);
		this.state={
			modal:false
		}
	}
    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        window.location.assign("/")
    }
	componentDidMount() {
		$(".xleft").click(()=>{	$(".m-menu").removeClass("togglenav")})
	}
	toggle(e){
		$(".m-menu").addClass("togglenav")
	}
    render() {
        return (
<header id="header-container" className="bgwhite">
 
	<div id="header">
		<div id="nav-container" className="container">
			<div className="left-side" style={{paddingLeft:"20px"}}>
				<div id="logo">
					<Link to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" /></Link>
				</div>
				<div className="mmenu-trigger">
					<button onClick={this.toggle} className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
					<div className="m-menu">
						<div className="x-profile row">
							<div className="col-xs-3 zero"> <img src="../../../../images/sonu.jpg" /> </div>
							<div className="col-xs-9 padding-top-7 padding-left-1"> <Link to="#">Login/Signup </Link></div>
						</div>
						<div className="links">
						<Link to=""  className="margin-bottom-10">
						<i className="im im-icon-Map-Marker fa-lg"></i>	Destination
						</Link>
						<Link to="" >
						<i className="im im-icon-Open-Book fa-lg"></i>		Bookings
						</Link>
						<Link to="" >
						<i className="im im-icon-Heart fa-lg"></i>	Wishlist
						</Link>
						<Link to="" >
						<i className="im im-icon-Envelope-2 fa-lg"></i> Invite friends
						</Link>
						<Link to="" className="margin-top-10">
						<i className="im im-icon-Support fa-lg"></i> Help center
						</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="right-side hidden-xs hidden-sm">
						<nav id="navigation" className="style-1">
					<ul >
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
								<li><Link to="/dashboard" style={{"padding":"0px 10px"}}><span  className="pull-left"><img src="../../../images/sonu.jpg" width="30px" alt="" style={{"borderRadius":"100%"}}/></span><span className="pull-left" style={{padding:"3px 10px 0px"}}>My account</span> </Link></li>
						:
						
				          <li>
						
					         <a href="#sign-in-dialog" className="sign-in " onClick={()=>this.setState({modal:!this.state.modal})} ><i className="sl sl-icon-login"></i> Sign In</a>
			             </li>
						}
					</ul>
                                  
					</nav>
				
			</div>
			{this.state.modal === true?
			<Modal showCloseIcon={false} open={this.state.modal} onClose={() => this.setState({ modal: false })} classNames={{ modal: "signinmodal" }} little>
				<Signinmodal />
			</Modal>:null}
		</div>
	</div>
</header>

        );
    }
}

export default connect(mapStateToProps)(Navbar);