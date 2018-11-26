import React,{Component} from  "react"
import {Button, Select,Input, Form, TextArea} from 'semantic-ui-react'
import { countries } from "./countries";
export default class Shipping extends Component{
    constructor(props){
        super(props)
        this.state ={
            loading:false
        }
        this.submit =this.submit.bind(this)
    }
    submit(e){
        e.preventDefault();
        this.setState({loading:true})
    }
    render(){
        return(
                        <Form onSubmit={this.submit} loading={this.state.loading}>
                            <div className="form-box">
                            <div className="ui grid equal width">
                                <div className="column eight wide">
                                <Input
                                placeholder='First Name'
                                style={{margin:"10px 0px",width:"100%"}}
                            />
                                </div>
                                <div className="column eight wide">
                                <Input
                                placeholder='Last Name'
                                style={{margin:"10px 0px",width:"100%"}}
                            />
                                </div>
                                <div className="column eight wide">
                                    <Select placeholder='Select your country' options={countries} />
                                </div>
                            </div>
                            
                        <p style={{padding:"10px 0px"}}><Button color="orange" type="submit" content="Next" required/></p>
                        </div>
                        </Form>
        )
    }
}
