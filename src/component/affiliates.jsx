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

export default  class Affiliates extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
    }
 
    render(){
        return(
              <div className="affiliates ">
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
                    <Grid columns="2">
                        <Grid.Column mobile="16" tablet="6" computer="6">
                        <h1 className="open-sans2" data-aos="zoom-in-right">Affiliate Program</h1>
                        <p style={{fontSize:"1.3em"}}>
                        We want to involve you in the process of bringing our products to a bigger audience.
                        </p>
                        </Grid.Column>
                    </Grid>
                     </div>
                     </div>
                   </section>
                <section className="second" style={{padding:"50px 0px",fontSize:"1.1em"}}>
                    <Grid columns="equal" textAlign="center">
                        <Grid.Row>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                           <p><Button icon="bullhorn" size="big" circular inverted color="orange" style={{fontSize:"3em"}}/></p>
                            <p style={{fontSize:"1.5em"}}>Promote High-End Products</p>
                            <p>We sell high quality UI kits and Templates that help people design and code faster. Our products are loved by web designers and developers that use it to build awesome projects.</p>
                        </Grid.Column>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                           <p><Button icon="dollar sign" size="big" circular inverted color="orange" style={{fontSize:"3em"}}/></p>
                            <p style={{fontSize:"1.5em"}}>50% Commission</p>
                            <p>We sell high quality UI kits and Templates that help people design and code faster. Our products are loved by web designers and developers that use it to build awesome projects.</p>
                        </Grid.Column>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                           <p><Button icon="group" size="big" circular inverted color="orange" style={{fontSize:"3em"}}/></p>
                            <p style={{fontSize:"1.5em"}}>Open for Everybody</p>
                            <p>We sell high quality UI kits and Templates that help people design and code faster. Our products are loved by web designers and developers that use it to build awesome projects.</p>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                           <p><Button icon="gift" size="big" circular inverted color="orange" style={{fontSize:"3em"}}/></p>
                            
                            <p style={{fontSize:"1.5em"}}>Generous Discounts</p>
                            <p>You can offer up to 25% discount on our UI Kits and Templates for your current audience.</p>
                        </Grid.Column>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                           <p><Button icon="globe" size="big" circular inverted color="orange" style={{fontSize:"3em"}}/></p>
                            <p style={{fontSize:"1.5em"}}>Get Involved</p>
                            <p>You will be involved in the process of bringing awesome products to a bigger audience.</p>
                        </Grid.Column>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                           <p><Button icon="group" size="big" circular inverted color="orange" style={{fontSize:"3em"}}/></p>
                            <p style={{fontSize:"1.5em"}}>Fast Registration</p>
                            <p>It will only take a few minutes to register and then you will receive an Affiliate ID.</p>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>
                <Bottomsection {...this.props}/>
                <Footer />
              </div>
        )
    }
}
