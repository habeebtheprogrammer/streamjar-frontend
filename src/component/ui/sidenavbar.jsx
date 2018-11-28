import React, { Component } from 'react';
import { Link } from "react-router-dom"
import setAuthorizationToken from "../auth"
import $ from "jquery"
import { Button, Image, Grid, Icon, Dimmer } from 'semantic-ui-react';
export default class Sidenavbar extends Component {
	constructor(props){
		super(props);
		this.state={
			modal:false
		}
	}
   
	componentDidMount() {
		// $("#xleft").click(()=>{	$(".m-menu").removeClass("togglenav")})
	}
	toggle(e){
    $(".m-menu").toggleClass("togglenav")
    if($(".xdimmer").hasClass("hide")){
      setTimeout(() => {
        $(".xdimmer").toggleClass("hide")
          
        }, 200);
    }else 
    $(".xdimmer").toggleClass("hide")
  
	}
    render() {
        return (
            <div className="btn-bars">
            <Button icon="sidebar " id="xleft" onClick={this.toggle} basic/>
            <div className="m-menu " >
            <div className="xdimmer hide" data-aos="zoom-in-right" onClick={this.toggle} ></div>
            <Grid columns="2" className="x-profile row">
              <Grid.Column width="6" verticalAlign="middle">
              <Image src={`${process.env.PUBLIC_URL}/images/avatar.jpg`}  />
              {/* <span> Sign in/ Sign up</span> */}
              </Grid.Column>
              <Grid.Column width="10" className="no-padding white-links" verticalAlign="middle">
              {this.props.auth.isAuthenticated?<span><Link to="/dashboard">{this.props.auth.user.username}</Link></span>:<span> <Link to="signin">sign in</Link> / <Link to="signup">sign up</Link></span>}
              </Grid.Column>
            </Grid>
						{/* <div className="x-profile row">
							<div className="col-xs-3 zero"><Image  src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} circular/> </div>
							<div className="col-xs-9 padding-top-7 padding-left-1"> <Link to="#">Login/Signup </Link></div>
						</div> */}
						<div className="links">
						<Link to="/messages" style={{margin:"0px 0px 10px"}}>
						<Icon name="comments outline" /> Chat with us
						</Link>
            <Link to="/reviews" >
						<Icon name="edit outline" /> Leave a review
						</Link>
						<Link to="/request" >
						<Icon name="envelope open outline" /> Make a request
						</Link>
            <Link to="/contact" >
						<Icon name="tty" /> Contact us
						</Link>
            <Link to="/about" >
						<Icon name="object ungroup outline" /> Learn about us
						</Link>
            {this.props.auth.isAuthenticated?
             <Link to="/dashboard"  style={{marginTop:"10px"}}>
             <Icon name="user outline"  /> Dashboard
             </Link>:null}
            {this.props.auth.isAuthenticated?
             <Link to="#" onClick={()=>this.props.logout()}  >
             <Icon name="sign-out" /> Sign out
             </Link>:null}
             {!this.props.auth.isAuthenticated?
             <Link to="/signin"  style={{marginTop:"10px"}}>
             <Icon name="sign-in"  /> Sign in
             </Link>:null}
            {!this.props.auth.isAuthenticated?
             <Link to="signup"  >
             <Icon name="user outline" /> Sign up
             </Link>:null}
						</div>
				</div>
       
        
            </div>
        );
    }
}
