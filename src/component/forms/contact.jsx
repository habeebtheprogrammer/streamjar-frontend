import React,{Component} from  "react"
import {Button, Form, TextArea, Select} from 'semantic-ui-react'

export default class Contactus extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
        this.submit =this.submit.bind(this)
    }
    submit(e){
        e.preventDefault();
    }
    render(){
        return(
                        <Form onSubmit={this.submit}>
                            <div className="form-box">

                            <TextArea autoHeight placeholder='Contact us' style={{ minHeight: 200 }} required/>
                        <p style={{padding:"10px 0px"}}><Button color="orange" type="submit" content="Contact us" required/></p>
                      </div>
                        </Form>
        )
    }
}
