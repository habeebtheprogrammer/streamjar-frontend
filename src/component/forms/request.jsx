import React,{Component} from  "react"
import {Button,Embed, Dimmer, Header, Icon, Step ,Input, Form, TextArea} from 'semantic-ui-react'
export default class Requestform extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.submit =this.submit.bind(this)
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    submit(e){
        e.preventDefault();
        if(!this.props.auth.isAuthenticated) this.handleOpen();
    }
    render(){
        return(
                        <Form onSubmit={this.submit}>
                            <div className="form-box">
                            <TextArea autoHeight placeholder='Tell us about your product, requirements and specification' style={{ minHeight: 200 }} required/>
                            <Input
                                icon='chart line'
                                iconPosition='left'
                                label={{ tag: true, content: 'Your Budget ($)' }}
                                labelPosition='right'
                                placeholder='Enter Budget'
                                type="number"
                                style={{margin:"10px 0px"}}
                            />
                        <p style={{padding:"10px 0px"}}><Button color="orange" type="submit" content="Send request" required/></p>
                        </div>
                        <Dimmer active={this.state.active} onClickOutside={this.handleClose} page>
                            <Header as='h2' icon inverted>
                                <Icon name='smile outline'  data-aos="fade-up"/>
                                <p data-aos="fade-up">You are one step closer! </p>
                            </Header>
                            <p>Sign in to continue</p>
                            <p><button class='ui google plus  button' role='button'>
                                <i   class='google plus icon medium' />Google plus
                            </button> 
                            <button class='ui facebook   button' role='button'>
                                <i   class='facebook  icon medium' />Facebook
                            </button>
                            </p>
                            </Dimmer>
                        </Form>
        )
    }
}
