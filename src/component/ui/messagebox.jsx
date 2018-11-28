import React,{Component} from "react"
import { Button, Grid, Card,  Icon, Image,  Loader, Input, Form, Label} from 'semantic-ui-react'
import apiUrl from "../../config"
import Axios from "axios";
import moment from "moment";
export default class Messagebox extends Component{
    constructor(props){
        super(props)
        this.state={
            error:"",
            success:"",
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
        Axios.post(`${apiUrl}/api/updateChat`,{message:this.state.message,conversationID:this.props.conversationID}).then((res) => {
            if(res.data.data) {
                this.props.updateChat(res.data.conversationID,res.data.data);
                this.setState({message:""})
        }
        }).catch((error)=>this.setState({error:"An error has occured",loading:false}))
    }
      
    render(){
        return(
           <div>
               <div className="message-box" style={{paddingBottom:"10px",borderTop:"1px solide #ddd"}}>
               <Form fluid onSubmit={this.submit}>
                    <Form.TextArea onChange={this.typing} value={this.state.message} name="message" placeholder='Tell us more about your idea/platform or project...' style={{height:"50px"}}/>
                    <Form.Button compact color="orange" floated="right" type="submit">Send</Form.Button>
                </Form>
               </div>
           </div>
            
        )
    }
}


 