import React,{Component} from "react"
import { Button, Grid, Card,  Icon, Image,  Loader, Input, Form, Label} from 'semantic-ui-react'
import apiUrl from "../../config"
import Axios from "axios";
import moment from "moment";
export default class Profilecard extends Component{
    constructor(props){
        super(props)
        this.state={
            defaultDesc:"",
            editDesc:false,
            description:"",
            error:"",
            success:"",
            loading:false
        }
        this.editDesc =this.editDesc.bind(this)
        this.typing =this.typing.bind(this)
        this.submit =this.submit.bind(this)
    }
    editDesc = ()=>this.setState({editDesc:!this.state.editDesc,error:"",success:""})
    typing = (e)=>this.setState({description:e.target.value})
    submit(e){
        e.preventDefault();
        this.setState({error:"",success:"",loading:true})
        Axios.post(`${apiUrl}/api/updateProfile`,{description:this.state.description}).then((res) => {
            if(res.data.success) this.setState({success:res.data.success,loading:false,editDesc:false,defaultDesc:this.state.description})
            else this.setState({error:res.data.error,loading:false})
            setTimeout(() => {
                this.setState({error:"",success:""})
            }, 3000);
        }).catch((error)=>this.setState({error:"An error has occured",loading:false}))
    }
    render(){
        return(
            <Card fluid className="profile-card" >
            <Card.Content >
            <div style={{textAlign:"center"}}>
            <Image src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} size='small' circular/>
            </div>
            <Card.Header style={{marginTop:"5px"}} textAlign="center" style={{textTransform:"capitalize",marginTop:"5px"}}>
                {this.props.user.firstName} {this.props.user.lastName}
            </Card.Header>
            {this.state.editDesc?<Card.Description className="edit-profile">
                <Form onSubmit={this.submit}>
                    <Input loading={this.state.loading}  fluid  name="description" placeholder='About me' onChange={this.typing} />
                </Form>
                <div style={{textAlign:"center"}}>
                {this.state.error?
                <Label basic color='red' pointing>
                    {this.state.error}
                </Label>:null}
                </div>
            </Card.Description>:
            <Card.Description textAlign="center">
                {this.state.defaultDesc||this.props.user.description} <Icon name="pencil" className="xcursor" onClick={this.editDesc}/></Card.Description>}
                 <div style={{textAlign:"center"}}>
                {this.state.success?
                <Label  basic color='green' pointing>
                  {this.state.success}
                </Label>:null}
                </div>
            <Button content="Send a Request" fluid  basic style={{margin:"15px 0px"}} onClick={()=>this.props.history.push("/request")}/>
            <Grid  columns="equal" className="lato" >
                    <Grid.Row style={{paddingBottom:"0px"}} >
                        <Grid.Column width="1" className="">
                        <Icon name="map marker alternate" />
                        </Grid.Column>
                        <Grid.Column width="10">
                         From
                        </Grid.Column>
                        <Grid.Column width="4" textAlign="right">
                         Nigeria
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row  style={{paddingBottom:"0px"}}>
                        <Grid.Column width="1" className="">
                        <Icon name="user" />
                        </Grid.Column>
                        <Grid.Column width="10">
                         Company
                        </Grid.Column>
                        <Grid.Column width="4" textAlign="right">
                         Nil
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row  style={{paddingBottom:"0px"}}>
                        <Grid.Column width="1" className="">
                        <Icon name="user" />
                        </Grid.Column>
                        <Grid.Column width="10">
                         Member since
                        </Grid.Column>
                        <Grid.Column width="4" textAlign="right">
                        {moment(this.props.user.regDate).fromNow()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingBottom:"30px"}} >
                        <Grid.Column width="1" className="">
                        <Icon name="location arrow" />
                        </Grid.Column>
                        <Grid.Column width="7">
                         Recent Delivery
                        </Grid.Column>
                        <Grid.Column width="7" textAlign="right">
                        Not available
                        </Grid.Column>
                    </Grid.Row>
                </Grid>    
            </Card.Content>
        </Card>
            
        )
    }
}


 