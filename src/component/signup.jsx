import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import setAuthorizationToken from "./auth"
import apiUrl from "../config.js"
import jwt from "jsonwebtoken"
import { Button,Form,Checkbox,Select,Grid } from 'semantic-ui-react';
import { countries } from './forms/countries';
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            country:"",
            tos:false,
            username: "",
            password: "",
            isLoading: false,
            error: "",
            success: ""
        }
        this.signup = this.signup.bind(this)
        this.typing = this.typing.bind(this)
    }
    componentWillMount() {
       var token= window.localStorage.getItem("tzoortoken")
       if(token) this.props.history.push("/dashboard")
    }
    signup(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error:"" ,success:""})
        axios.post(`${apiUrl}/api/signup`,this.state).then((res) => {
                if (res.data.success) {
                    this.setState({ success: res.data.success,isLoading:false, firstName:"",lastName:"",email:"",username:"",password:"",tos :""});
                }else  {
                    this.setState({ ...this.state, error: res.data.error ,isLoading:false});
                }
        }).catch((err) => {
                this.setState({ isLoading: false, error: "Please try again later. an error has occured" })
        })
    }
  
    typing(e,data) {
        var name= data.name;
        if(data.name=="tos"){
            this.setState({tos:data.checked})
        }
        else
        this.setState({
            [name]: data.value
        })
    }
    render() {
        var {firstName,lastName,email,username,password,country,tos} = this.state;
        return (
           <div className="signin" >
            <Grid columns="equal">
                    <Grid.Column width="4"  tablet="4" computer="4" only="tablet computer">
                        <div className="left-grid">
                            <div className="brand">
                                <i className="cube icon"></i>
                            <h2>REACTANGLE</h2>
                            </div>
                            <div style={{fontSize:"1em"}}>We create brand identities that clients bear jealously. When we build apps or websites, we make them visually appealing and resilient. From your ideas to product to scaling up, we’ve always got you covered.</div>
                            <div style={{padding:"20px 0px"}}>
                                <p>Sign in with</p>
                            <button class='ui google plus  button' role='button'>
                                <i   class='google plus icon medium' />Google 
                            </button> 
                            <button class='ui facebook   button' role='button'>
                                <i   class='facebook  icon medium' />Facebook
                            </button>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column width="12" mobile="16" tablet="12" computer="12">
                    <div className="right-grid">
                            <Grid columns="equal" container>
                                <Grid.Column width="4" mobile="16" only="mobile" >
                                <div className="brand " style={{textAlign:"center"}}>
                                    <i className="cube icon"></i>
                                    <h2>REACTANGLE</h2>
                                </div>
                                </Grid.Column>
                                <Grid.Column  only="tablet computer">
                                </Grid.Column>
                                <Grid.Column width="8" mobile="16" tablet="8" computer="8">
                                <Form onSubmit={this.signup} loading={this.state.isLoading} warning success  >
                                <h3 style={{color:"#555",marginBottom:"15px"}}>Create an Account</h3>
                                {this.state.error?
                                <div class='ui warning message'>
                                <small>{this.state.error}</small>
                                </div>
                                :null}
                                {this.state.success?
                                <div class='ui success message'>
                                <small>{this.state.success}</small>
                                </div>
                                :null}
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-first-name'
                                        label='First name'
                                        name="firstName"
                                        onChange={this.typing}
                                        required
                                        value={firstName}

                                    />
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-last-name'
                                        label='Last name'
                                        name="lastName"
                                        onChange={this.typing}
                                        value={lastName}
                                        required
                                    />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        id='form-subcomponent-shorthand-input-first-name'
                                        label='Username'
                                        name="username"
                                        onChange={this.typing}
                                        value={username}
                                        required
                                    />
                                    <Form.Select fluid label="Country"  placeholder='Select your country' options={countries}
                                      name="country"
                                      onChange={this.typing}
                                      />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                    <Form.Input
                                        id='form-subcomponent-shorthand-input-password'
                                        label='Email'
                                        name="email"
                                        onChange={this.typing}
                                        value={email}
                                        required
                                    />
                                    <Form.Input
                                        id='form-subcomponent-shorthand-input-password'
                                        label='Password'
                                        name="password"
                                        onChange={this.typing}
                                        value={password}
                                        required
                                    />
                                  
                                    </Form.Group>
                                 
                                    <Form.Field>
                                    <Checkbox  label='I agree to the Terms and Conditions'   
                                        name="tos"
                                        onChange={this.typing}
                                        required/>
                                    </Form.Field>
                                    <Button type='submit' color="orange">Submit</Button>
                                    <div className="bottom-text">
                                    Already a member? <Link to="/signin">Sign in</Link>
                                </div>
                                </Form>
                                </Grid.Column>
                                <Grid.Column >
                                
                                </Grid.Column>
                            </Grid>
                        
                        </div>
                    </Grid.Column>
                </Grid>
               
                <style>{`
                    body:{
                        background:#fff !important;
                    }
                `}</style>
           </div>
        );
    }
}

