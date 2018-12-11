import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header, Icon, Step ,Input, Form, TextArea, Grid, Divider} from 'semantic-ui-react'
import Navbar from "./navbar";
import {Link} from "react-router-dom"
import Footer from "./footer";
import Requestform from "./forms/request"
import Contactus from "./forms/contact";
import Bottomsection from "./ui/bottomsection";
import Particles from "react-particles-js";
import {connect} from "react-redux"

export default  class Tos extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
    }
 
    render(){
        return(
              <div className="privacy misc">
                  <Navbar {...this.props} />
                  <section  className="first-section"  style={{}}>
                  <Particles  params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                    
	            }} style={{position:"absolute",width:"100%"}} />
                    <div className="ui container  ">
                    <div  className="content">
                    <Grid columns="2" textAlign="center">
                        <Grid.Column mobile="16" tablet="6" computer="6">
                        <h1 className="open-sans2" data-aos="zoom-in-right" style={{letterSpacing:"2px"}}>Terms of Service</h1>
                        <p style={{fontSize:"1.3em"}}>
                        
                        {/* We want to involve you in the process of bringing our products to a bigger audience. */}
                        </p>
                        </Grid.Column>
                    </Grid>
                     </div>
                     </div>
                   </section>
                <section className="ui container second" style={{padding:"80px 0px",fontSize:"1.1em"}}>
                    <Grid columns="equal">
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                            <p className="lato"><b>Terms & Condition</b></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/privacy_policy')}>Privacy policy</span></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/terms_of_service')}>Terms of service</span></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/support')}>Support</span></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/how_it_works')}>How it works</span></p>
                        </Grid.Column>
                        <Grid.Column width="12" mobile="16" tablet="12" computer="12">
                          <h1>Terms of Service <Icon name="keyboard" style={{float:"right"}}/></h1>
                          <Divider />
                          <p>Please review our terms of use</p>
                          <p className="lato"><b>General use</b></p>
                          <p>
                          By accessing and placing an order with React Angle, you confirm that you are in agreement with and bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply to the entire website and any email or other type of communication between you and React Angle. 
                            Under no circumstances shall React Angle team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if React Angle team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof. 
                            React Angle will not be responsible for any outcome that may occur during the course of usage of our resources.We reserve the rights to change prices and revise the resources usage policy in any moment.
                          </p>
                          <p className="lato" style={{paddingTop:"30px"}}><b>Product</b></p> 
                          <p>
                          All products and services are delivered by React Angle electronically. You can access your download from the your dashboard.
                          </p>      
                          <p className="lato" style={{paddingTop:"30px"}}><b>Security</b></p> 
                          <p>
                          React Angle does not process any order payments through the website. All payments are processed securely through Avangate, a third party online payment provider. Feel free to contact us about our security policies.
                          </p>  
                          <p className="lato" style={{paddingTop:"30px"}}><b>Cookie policy</b></p> 
                          <p>
                          A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.
                            We use session cookies to personalise the website for each user. We use persistent cookies to keep tracks of referrals coming from our affiliate network.
                            <br />
                            <br />
                            We use Google Analytics to analyse the use of our website. Our analytics service provider generates statistical and other information about website use by means of cookies. Our analytics service provider's privacy policy is available at: http://www.google.com/policies/privacy/.
                            <br />
                            <br />

                            Deleting cookies will have a negative impact on the usability of the site. If you block cookies, you will not be able to use all the features on our website.
                          </p>             
                          <p className="lato" style={{paddingTop:"30px"}}><b>Refunds</b></p> 
                          <p>
                          You have 24 hours to inspect your purchase and to determine if it does not meet with the expectations laid forth by the seller. In the event that you wish to receive a refund, React Angle will issue you a refund and ask you to specify how the product failed to live up to expectations.
                          </p>   
                          <p className="lato" style={{paddingTop:"30px"}}><b>Ownership</b></p> 
                          <p>
                          Ownership of the product is governed by the usage license selected by the seller.
                          </p>   
                          <p className="lato" style={{paddingTop:"30px"}}><b>Changes of term</b></p> 
                          <p>
                          If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use.
                          </p>  
                        </Grid.Column>
                    </Grid>
                </section>
                <Bottomsection {...this.props}/>
                <Footer history={this.props.history}/>
              </div>
        )
    }
}
