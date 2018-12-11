import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header,Message, Icon, Step ,Segment, Form, TextArea, Grid, GridColumn, Breadcrumb} from 'semantic-ui-react'
import Navbar from "./navbar";
import Footer from "./footer";
import {connect} from "react-redux"
import Requestform from "./forms/request"
import Shipping from "./forms/shipping";
import Confirmorder from "./forms/confirmorder";
import Bottomsection from "./ui/bottomsection";
import Particles from "react-particles-js";
import Axios from "axios";
import apiUrl from "../config"
// function mapStateToProps(state){
//     return { auth: state.auth}
// }
export default class Request extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false,
            step: 1,
            offer:{}
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.handleStep =this.handleStep.bind(this)
        this.submitRequest =this.submitRequest.bind(this)
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    handleStep(step){this.setState({step})}
    submitRequest(e){
        e.preventDefault();
        
    }
    componentWillMount() {
       var query = window.location.search
       if(query)Axios.get(`${apiUrl}/api/getRequestById${query}`).then((res)=>{if(res.data.offer)this.setState({offer:res.data.offer})})

    }

    render(){
        var {offer} = this.state
        return(
              <div className="request light misc" >
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
                        <h1 className="open-sans2" data-aos="zoom-in-right" style={{letterSpacing:"2px"}}>{this.state.offer.offerTitle||"Buyers Request"}</h1>
                        <p style={{fontSize:"1.3em"}}>{this.state.offer.offerDeadline?`Deliver in the next ${ this.state.offer.offerDeadline} days`:' Tell us about your idea. we will help you build it'} </p>
                        </Grid.Column>
                    </Grid>
                     </div>
                     </div>
                   </section>
                <section className="ui container " >
                    <Grid columns="equal">
                        <Grid.Row only="tablet computer" >
                           
                            <GridColumn width="16" >
                            
                            <div className="step">
                        <Step.Group>
                            <Step   onClick={()=>this.handleStep(1)} active={this.state.step==1?true:false}>
                            <Icon name=' edit outline' />
                            <Step.Content>
                                <Step.Title> Buyers Request</Step.Title>
                                <Step.Description>Upload requirements</Step.Description>
                            </Step.Content>
                            </Step >
                            <Step disabled={this.state.offer.ticket?false:true} onClick={()=>this.handleStep(2)} active={this.state.step==2?true:false}>
                            <Icon name='payment' />
                            <Step.Content>
                                <Step.Title>Billing</Step.Title>
                                <Step.Description>Enter billing information</Step.Description>
                            </Step.Content>
                            </Step>
                            <Step disabled onClick={()=>this.handleStep(3)} active={this.state.step==3?true:false}>
                            <Icon name='truck' />
                            <Step.Content>
                                <Step.Title>Payment recipt</Step.Title>
                            </Step.Content>
                            </Step>
                        </Step.Group>
                        </div>
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                    <Grid columns="equal">
                    <Grid.Column only="mobile" style={{background:"#fff",borderBottom:"1px solid #ddd"}}>
                            <Breadcrumb size="small">
                            <Breadcrumb.Section active >Custom Request</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section  >Billing</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section >Payment receipt</Breadcrumb.Section>
                        </Breadcrumb>
                            </Grid.Column>
                        <GridColumn width="16" mobile="16" only="mobile">
                            <div style={{padding:"10px 0px 0px"}}>
                            <Message warning>
                                <Message.Header>How it works</Message.Header>
                                    <p>1. Send a Buyers Request</p>
                                    <p>We evaluate the feasibilty of every project requirements and respond with a quote. after which you will now have access to step 2,3, and 4 </p>
                            </Message>
                            </div>
                        </GridColumn>
                        <GridColumn width="12" mobile="16" tablet="12" computer="12">
                        {this.state.step ==1?
                            <div className="stepone">
                                <Requestform auth={this.props.auth} offer={this.state.offer}/>
                            </div>:null}
                            {this.state.step ==2?
                            <div className="stepone">
                                <Shipping/>
                            </div>:null}
                            {this.state.step == 4? <Confirmorder /> :null}
                        </GridColumn>
                        <GridColumn width="4" only="tablet computer" tablet="4" computer="4">
                            <div style={{padding:"30px 0px"}}>
                            <Message warning>
                                <Message.Header>How it works</Message.Header>
                                    <p>1. Send a Buyers Request</p>
                                    <p>We evaluate the feasibilty of every project using their requirements or specification and respond with a custom offer which includes the quotation. then you can now have access to step two (shipping) </p>
                            </Message>
                            </div>
                        </GridColumn>
                    </Grid>
                </section>
                <Bottomsection {...this.props}/>
                <Footer history={this.props.history}/>
              </div>
        )
    }
}
