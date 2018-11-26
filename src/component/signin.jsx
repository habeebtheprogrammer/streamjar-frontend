import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import setAuthorizationToken from "./auth"
import apiUrl from "../config.js"
import jwt from "jsonwebtoken"
import { Button,Form,Checkbox,Select,Message, Grid } from 'semantic-ui-react';
import { countries } from './forms/countries';
import Fblogin from './facebookauth';
export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoading: false,
            error: "",
            success: ""
        }
        this.login = this.login.bind(this)
        this.typing = this.typing.bind(this)
    }
    componentWillMount() {
       var token= window.localStorage.getItem("kaytoken")
       if(token) this.props.history.push("/dashboard")
    }
    login(e) {
        e.preventDefault();
        this.setState({ isLoading: true, error:"" })
        axios.post(`${apiUrl}/api/login`,this.state).then((res) => {
                if (res.data.error) {
                    this.setState({ ...this.state, error: res.data.error });
                } else if (res.data.token) {
                    var userData = jwt.verify(res.data.token, "1864")
                    if (userData) {
                        var data = jwt.decode(res.data.token,"1864");
                        localStorage.setItem("kaytoken", res.data.token);
                        localStorage.setItem("username", data.username);
                        setAuthorizationToken(res.data.token);
                        window.location.assign(`/dashboard`)
                    }
                }
                this.setState({ isLoading: false }) 
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
                            
                            <Fblogin />
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
                                    <Form onSubmit={this.login} loading={this.state.isLoading} warning >
                                    <h3 style={{color:"#555",marginBottom:"15px"}}>Sign in</h3>
                                    {this.state.error?
                                    <div class='ui warning message'>
                                    <small>{this.state.error}</small>
                                    </div>
                                    :null}
                                    <Form.Group widths='equal'>
                                    
                                        </Form.Group>
                                        
                                        <Form.Field>
                                        <Form.Input
                                            fluid
                                            id='form-subcomponent-shorthand-input-first-name'
                                            label='Username'
                                            name="username"
                                            onChange={this.typing}
                                            required
                                        />
                                        <Form.Input
                                            id='form-subcomponent-shorthand-input-password'
                                            label='Password'
                                            name="password"
                                            onChange={this.typing}
                                            required
                                        />
                                        </Form.Field>

                                        <Form.Field>
                                        <Checkbox  label='Remember me'   
                                            name="tos"
                                            onChange={this.typing}
                                            required/>
                                        </Form.Field>
                                    <Button type='submit' color="orange">Submit</Button>
                                    <div className="bottom-text">
                                    Not a member? <Link to="/signup">Create an account</Link>
                                </div>
                                </Form>
                                </Grid.Column>
                                <Grid.Column >
                                
                                </Grid.Column>
                            </Grid>
                        
                        </div>
                    </Grid.Column>
                </Grid>
           </div>
        );
    }
}

