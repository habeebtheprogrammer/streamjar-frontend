import React,{Component} from  "react"
import {Button,Embed, Rating, Dimmer, Header, Icon, Step ,Input, Form, TextArea} from 'semantic-ui-react'
import Axios from "axios";
import apiUrl from "../../config"
export default class Reviewform extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false,
            rating:"",
            review:"",
            error:"",
            loading:false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.rating =this.rating.bind(this)
        this.typing =this.typing.bind(this)
        this.submit =this.submit.bind(this)
    }
    rating(e,data){this.setState({rating:data.rating})}
    typing(e){this.setState({review:e.target.value})}
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false,loading:false,error:"Please sign in to continue" })}
    submit(e){
        this.setState({loading:true,success:"",error:""})
        e.preventDefault();
         this.state.rating ===""?  this.setState({error:"Please add a rating",loading:false}):null;
        if(this.state.rating==="") return false
        if(!this.props.auth.isAuthenticated) this.handleOpen(

        ); else{
            Axios.post(`${apiUrl}/api/submitReview`,this.state).then((res)=>{
                if(res.data.succ) this.setState({success:res.data.succ,loading:false,review:"",rating:""})
                else this.setState({error:res.data.error,loading:false})
            }).catch((error)=>this.setState({error,loading:false}))
        }
    }
    render(){
        console.log(this.state)
        return(
                        <Form onSubmit={this.submit} reply warning success loading={this.state.loading}>
                       
                            <Form.TextArea placeholder="Say something" name="review" value={this.state.review} required onChange={this.typing} />
                                        <p>How do you rate our service</p>
                                                    <p><Rating icon='star' defaultRating={this.state.rating} maxRating={5}  size="" onRate={this.rating}/></p>
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
                                        <Button  content='Submit Review'  color="orange" labelPosition='left' icon='edit'  />
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
