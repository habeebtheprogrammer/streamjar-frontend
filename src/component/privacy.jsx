import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header, Icon, Rail ,Segment, Placeholder,Image, Sticky, Grid, Divider} from 'semantic-ui-react'
import Navbar from "./navbar";
import {Link} from "react-router-dom"
import Footer from "./footer";
import Requestform from "./forms/request"
import Contactus from "./forms/contact";
import Bottomsection from "./ui/bottomsection";
import Particles from "react-particles-js";
import {connect} from "react-redux"
import $ from "jquery"
export default  class Privacy extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
    }
   componentDidMount() {

    // $(window).on("scroll",()=>{
    //     console.log($(window).scrollTop(), $('footer').innerHeight()+$(".bottom-section").innerHeight())
    //     if($(window).scrollTop() >1300 && $(window).innerWidth() > 1000 && $(window).scrollTop() ){
    //         $('.booking-widget').addClass("fix")
    //     }else $('.booking-widget').removeClass("fix")
    // })
   }
   handleContextRef = contextRef => this.setState({ contextRef })
    render(){
        const { contextRef } = this.state
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
                        <h1 className="open-sans2" data-aos="zoom-in-right" style={{letterSpacing:"2px"}}>Privacy Policy</h1>
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
                           <div>
                            <p className="lato"><b>Terms & Condition</b></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/privacy_policy')}>Privacy policy</span></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/terms_of_service')}>Terms of service</span></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/support')}>Support</span></p>
                            <p ><span className="xcursor" onClick={()=>this.props.history.push('/how_it_works')}>How it works</span></p>
                        </div>
                        </Grid.Column>
                        <Grid.Column width="12" mobile="16" tablet="12" computer="12">
                          <h1>Privacy Policy <Icon name="pin" style={{float:"right"}}/></h1>
                          <Divider />
                          <p>Please review our privacy policy</p>
                          <p className="lato"><b>General use</b></p>
                          <p>React Angle does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party. We do not sell, rent or provide outside access to our mailing list or any data we store. Any data that a user stores via our facilities is wholly owned by that user or business. At any time a user or business is free to take their data and leave, or to simply delete their data from our facilities.
                            React Angle only collects such personal information that is necessary for you to access and use our services. This personal information includes, but is not limited to, first and last name, email address.
                            React Angle may release personal information if React Angle is required to by law, search warrant, subpoena, court order or fraud investigation. We may also use personal information in a manner that does not identify you specifically nor allow you to be contacted but does identify certain criteria about our Site's users in general (such as we may inform third parties about the number of registered users, number of unique visitors, and the pages most frequently browsed).
                          </p>
                          <p className="lato" style={{paddingTop:"30px"}}><b>Changes about privacy</b></p> 
                          <p>If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use.</p>                   
                        </Grid.Column>
                    </Grid>
                </section>
                <Bottomsection {...this.props}/>
                <Footer history={this.props.history}/>
              </div>
        )
    }
}
