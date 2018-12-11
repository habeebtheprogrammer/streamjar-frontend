import React,{Component} from  "react"
import {Input, Form, Dimmer, Header, Icon} from 'semantic-ui-react'
import Axios from "axios";
import apiUrl from "../../config"
export default class Newsletter extends Component{
    constructor(props){
        super(props)
        this.state ={
            loading:false,
            dimmer:false,
            email:"",
            error:"",
            success:""

        }
        this.submit =this.submit.bind(this)
        this.handleClose =this.handleClose.bind(this)
        this.typing =this.typing.bind(this)
    }
    handleClose(){this.setState({ dimmer: false })}
    typing(e){this.setState({[e.target.name]:e.target.value})}
    submit(e){
        e.preventDefault();
            this.setState({error:"",success:"",loading:true})
            Axios.post(`${apiUrl}/api/submitNewsletter`,this.state).then((res)=>{
                if(res.data.success) this.setState({success:res.data.success,loading:false,dimmer:true})
                else this.setState({error:res.data.error,loading:false,dimmer:true})
            }).catch((error)=>this.setState({error:"An error has occured. please try again later",loading:false}))
    }
    render(){
        return(
            <Form  onSubmit={this.submit} loading={this.state.loading}>
            <Input required name="email" onChange={this.typing} fluid action={{color:"orange",content:"Subscribe"}}placeholder='Enter your email' className="subscribe" size="large"/>
            <Dimmer active={this.state.dimmer} onClickOutside={this.handleClose} page>
            <Header as='h2' icon inverted>
                <Icon color={this.state.success?"green":"red"} name={this.state.success?'check circle outline':'exclamation circle'} />
                {this.state.success?"Successful!":"Oops"}
                <Header.Subheader>{this.state.success||this.state.error}</Header.Subheader>
            </Header>
            </Dimmer>
            </Form>
            )
    }
}
