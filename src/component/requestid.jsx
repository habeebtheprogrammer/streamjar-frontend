import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header,Message, Icon, Step ,Segment, Form, TextArea, Grid, GridColumn} from 'semantic-ui-react'
import Navbar from "./navbar";
import Footer from "./footer";
import {connect} from "react-redux"
import Requestform from "./forms/request"
import Shipping from "./forms/shipping";
import Confirmorder from "./forms/confirmorder";
import Bottomsection from "./ui/bottomsection";
import Particles from "react-particles-js";
// function mapStateToProps(state){
//     return { auth: state.auth}
// }
export default class Requestid extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false,
            step: 1
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

    render(){
        return(
              <div className="request light" >
                  <Navbar {...this.props} />
                 
                <section className="ui container "  style={{paddingTop:'70px'}}>
                    <Grid columns="equal">
                        <Grid.Row only="tablet computer" style={{paddingTop:"50px"}}>
                            <GridColumn width="16" >
                            <div className="step">
                        <Step.Group>
                            <Step   onClick={()=>this.handleStep(1)} active={this.state.step==1?true:false}>
                            <Icon name=' edit outline' />
                            <Step.Content>
                                <Step.Title>Buyers Request</Step.Title>
                                <Step.Description>Upload requirements</Step.Description>
                            </Step.Content>
                            </Step >
                            <Step disabled onClick={()=>this.handleStep(2)} active={this.state.step==2?true:false}>
                            <Icon name='truck' />
                            <Step.Content>
                                <Step.Title>Shipping</Step.Title>
                                <Step.Description>Choose your shipping options</Step.Description>
                            </Step.Content>
                            </Step >
                            <Step disabled onClick={()=>this.handleStep(3)} active={this.state.step==3?true:false}>
                            <Icon name='payment' />
                            <Step.Content>
                                <Step.Title>Billing</Step.Title>
                                <Step.Description>Enter billing information</Step.Description>
                            </Step.Content>
                            </Step>
                            <Step disabled onClick={()=>this.handleStep(4)} active={this.state.step==4?true:false}>
                            <Icon name='info' />
                            <Step.Content>
                                <Step.Title>Confirm Order</Step.Title>
                            </Step.Content>
                            </Step>
                        </Step.Group>
                        </div>
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                    <Grid columns="equal">
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
                                <Requestform auth={this.props.auth}/>
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
