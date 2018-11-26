import React,{Component} from  "react"
import {Button, Segment,Header,Message, Icon,} from 'semantic-ui-react'
import { countries } from "./countries";
export default class Confirmorder extends Component{
    constructor(props){
        super(props)
        this.state ={
            loading:false
        }
    }
    render(){
        return(
            <Segment placeholder style={{padding:"30px 0px",margin:"30px 0px"}}>
            <Header icon>
            <Icon name='check circle outline' color="green" />
            Your order has been created successfully <br />
            Your delivery will arrived before
            </Header>
            <center> <h2 className="open-sans2">30 DAYS 0 MONTH 0 HOURS </h2></center>
        </Segment>   
        )
    }
}
