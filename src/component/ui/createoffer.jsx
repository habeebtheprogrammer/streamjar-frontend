import React,{Component} from "react"
import { Button, Grid, Card,  Icon, Modal,  Header, Input, Form, Label} from 'semantic-ui-react'
import apiUrl from "../../config"
import Axios from "axios";
import moment from "moment";
export default class Createoffer extends Component{
    constructor(props){
        super(props)
        this.state={
            error:"",
            success:"",
            offerDesc:"",
            offerTitle:"",
            offerBudget:"",
            offerDeadline:"",
            loading:false,
            message:""
        }
        this.typing =this.typing.bind(this)
        this.submit =this.submit.bind(this)
    }
    typing = (e)=>this.setState({[e.target.name]:e.target.value})
    submit(e){
        e.preventDefault();
        this.setState({error:"",success:"",loading:true})
        Axios.post(`${apiUrl}/api/createOffer`,{...this.state,conversationID:this.props.conversationID}).then((res) => {
            if(res.data.data) {
                this.props.updateChat(res.data.conversationID,res.data.data);
                this.setState({message:""})
        }
        }).catch((error)=>this.setState({error:"An error has occured",loading:false}))
    }
      
    render(){
        return(
            <Modal trigger={<Button content="Create offer" color="green" />} basic size='small'>
                <Header icon='edit outline' content='Create an offer' />
               <Form fluid onSubmit={this.submit} style={{background:"#f8f8f8",padding:"20px"}}>
                <Modal.Content>
                <div>
                    <Form.Input type="text" placeholder="Title" name="offerTitle"  onChange={this.typing} required/>
                    <Form.TextArea onChange={this.typing}  name="offerDesc" placeholder='Description' required/>
                    <Input
                        name="offerDeadline"
                        type="date"
                        icon='calendar'
                        iconPosition='left'
                        style={{margin:"10px 0px"}}
                        onChange={this.typing}
                        label={{ tag: true, content: 'Deadline' }}
                        labelPosition='right'
                        required

                    /><br />
                    <Input
                        required
                        name="offerBudget"
                        icon='chart line'
                        iconPosition='left'
                        label={{ tag: true, content: 'Budget ($)' }}
                        labelPosition='right'
                        placeholder='Enter Price'
                        type="number"
                        style={{margin:"10px 0px"}}
                        onChange={this.typing}
                    />
                     
                </div>
                </Modal.Content>
                <Modal.Actions>
                
                <Button color='orange' type="submit">
                    <Icon name='checkmark' /> Submit
                </Button>
                </Modal.Actions>
                </Form>
            </Modal>
            
        )
    }
}


 