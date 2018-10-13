import React,{Component} from "react"
import $ from "jquery"
export default class Signinmodal extends Component{

	componentDidMount() {
		$("#tab2").hide();
	
	}
	toggle(value){
		if(value==="signup"){
			$("#tab1").hide();
			$("#tab2").show();
		} else{
			$("#tab2").hide();
			$("#tab1").show();
		}
	}
    render(){
        return(
			<div id="sign-in-dialog">

			<div className="small-dialog-header">
				<h3>Sign In</h3>
			</div>

			<div className="sign-in-form style-1">

				<ul className="tabs-nav">
					<li className=""><a href="#tab1" onClick={()=>this.toggle("signin")}>Log In</a></li>
					<li><a href="#tab2"  onClick={()=>this.toggle("signup")}>Register</a></li>
				</ul>

				<div className="tabs-container alt">

					<div className="tab-content" id="tab1">
						<form method="post" className="login">

							<p className="form-row form-row-wide">
								<label for="username">Username
									<i className="im im-icon-Male"></i>
									<input type="text" className="input-text" name="username" id="username" value="" />
								</label>
							</p>

							<p className="form-row form-row-wide">
								<label for="password">Password
									<i className="im im-icon-Lock-2"></i>
									<input className="input-text" type="password" name="password" id="password"/>
								</label>
								<span className="lost_password">
									<a href="#" >Lost Your Password?</a>
								</span>
							</p>

							<div className="form-row">
								<input type="submit" className="button border margin-top-5" name="login" value="Login" />
								<div className="checkboxes margin-top-10">
									<input id="remember-me" type="checkbox" name="check" />
									<label for="remember-me">Remember Me</label>
								</div>
							</div>
							
						</form>
					</div>
					<div className="tab-content" id="tab2">

						<form method="post" className="register">
							
						<p className="form-row form-row-wide">
							<label for="username2">Username
								<i className="im im-icon-Male"></i>
								<input type="text" className="input-text" name="username" id="username2" value="" />
							</label>
						</p>
							
						<p className="form-row form-row-wide">
							<label for="email2">Email Address
								<i className="im im-icon-Mail"></i>
								<input type="text" className="input-text" name="email" id="email2" value="" />
							</label>
						</p>

						<p className="form-row form-row-wide">
							<label for="password1">Password
								<i className="im im-icon-Lock-2"></i>
								<input className="input-text" type="password" name="password1" id="password1"/>
							</label>
						</p>

						<p className="form-row form-row-wide">
							<label for="password2">Repeat Password
								<i className="im im-icon-Lock-2"></i>
								<input className="input-text" type="password" name="password2" id="password2"/>
							</label>
						</p>

						<input type="submit" className="button border fw margin-top-10" name="register" value="Register" />

						</form>
					</div>

				</div>
			</div>
			{/* <button title="Close (Esc)" type="button" className="mfp-close"></button> */}
		</div>
         )
    }
}