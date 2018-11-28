import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header, Icon, Step ,Input, Form, TextArea} from 'semantic-ui-react'
import Axios from "axios";
import apiUrl from "../../config"
export default class Requestform extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false,
            message:"",
            price:"",
            loading:false,
            error:"",
            success:""
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.submit =this.submit.bind(this)
        this.typing =this.typing.bind(this)
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    typing(e){this.setState({[e.target.name]:e.target.value})}

    submit(e){
        e.preventDefault();
        if(!this.props.auth.isAuthenticated) this.handleOpen();
        else{
            this.setState({error:"",success:"",loading:true})
            Axios.post(`${apiUrl}/api/submitRequest`,this.state).then((res)=>{
                if(res.data.success) this.setState({success:res.data.success,loading:false,message:"",price:""})
                else this.setState({error:res.data.error,loading:false})
            }).catch((error)=>this.setState({error:"An error has occured. please try again later",loading:false}))
        }
    }
    render(){
        return(
                        <Form onSubmit={this.submit} loading={this.state.loading} warning success>
                            {this.state.error?
                                    <div class='ui warning message'>
                                    {this.state.error}
                                    </div>
                                    :null}
                                     {this.state.success?
                                    <div class='ui success message'>
                                    {this.state.success}
                                    </div>
                                    :null}
                            <div className="form-box">
                            <TextArea name="message" onChange={this.typing} autoHeight placeholder='Tell us about your product, requirements and specification' style={{ minHeight: 200 }} required/>
                            <Input
                                name="price"
                                icon='chart line'
                                iconPosition='left'
                                label={{ tag: true, content: 'Your Budget ($)' }}
                                labelPosition='right'
                                placeholder='Enter Budget'
                                type="number"
                                style={{margin:"10px 0px"}}
                                onChange={this.typing}
                            />
                        <p style={{padding:"10px 0px"}}><Button color="orange" type="submit" content="Send request" required/></p>
                        </div>
                        <Dimmer active={this.state.active} onClickOutside={this.handleClose} page>
                            <Header as='h2' icon inverted>
                                <Icon name='smile outline'  data-aos="fade-up"/>
                                <p data-aos="fade-up">You are one step closer! </p>
                            </Header>
                            <p>Sign in to continue</p>
                            <p>
                            <Button icon="sign-in" color="google plus" content="Sign in"  onClick={()=>this.props.history.push("/signin")}/>
                            <Button icon="user" color="instagram" content="Sign up"  onClick={()=>this.props.history.push("/signup")}/>
                            </p>
                            </Dimmer>
                        </Form>
        )
    }
}
