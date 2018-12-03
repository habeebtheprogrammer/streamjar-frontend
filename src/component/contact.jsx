import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header, Icon, Step ,Input, Form, TextArea, Grid} from 'semantic-ui-react'
import Navbar from "./navbar";
import Footer from "./footer";
import Requestform from "./forms/request"
import Contactus from "./forms/contact";
import Bottomsection from "./ui/bottomsection";
import Particles from "react-particles-js";
import {connect} from "react-redux"

export default  class Contact extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.submitRequest =this.submitRequest.bind(this)
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    submitRequest(e){
        e.preventDefault();
        
    }
    render(){
        return(
              <div className="contact light">
                  <Navbar {...this.props} />
                  <section  className="first-section"  style={{}}>
                  <Particles  params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
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
                        <h1 className="open-sans2" data-aos="zoom-in-right">Get in Touch With Us</h1>
                        <p style={{fontSize:"1.3em"}}>
                            We are a team of of awesome software engineers and web/mobile app developers. We provide great quality of services and timely delivery. You can reach us via our social media channels or contact us below
                        </p>
                        </Grid.Column>
                    </Grid>
                     </div>
                     </div>
                   </section>
                <section className="ui container second" >
                    <Grid columns="equal">
                        <Grid.Column width="11" mobile="16" tablet="11" computer="11">
                            <div className="large-comment">
                                    <h1>We are hiring! <i className="smile icon outline"></i></h1>
                                    <span>We're always looking for brilliant minds to join our team of awesome software engineers and designers. send your cv to hr@reactangle.com</span>
                            </div>
                        </Grid.Column>
                    </Grid>
                </section>
                <section className="container ui">
                    <Grid columns="equal">
                        <Grid.Column width="11" mobile="16" tablet="11" computer="11">
                            <Contactus />
                        </Grid.Column>
                    </Grid>
                </section>
                <Bottomsection {...this.props}/>
                <Footer />
              </div>
        )
    }
}
