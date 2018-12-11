import React,{Component} from  "react"
import { Popup ,Button, Grid, Card, Rating, Comment, Icon, Image, Form, Loader, Divider, Label} from 'semantic-ui-react'
import Footer from "./footer";
import Navbar from "./navbar";
import Bottomsection from "./ui/bottomsection";
import {connect} from "react-redux"
import Reviewform from "./forms/review";
import apiUrl from "../config"
import Axios from "axios";
import moment from "moment";
import Profilecard from "./ui/profilecard";
function mapStateToProps(state){
    return {auth: state.auth}
}
 class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{},
            editDesc:false,
            description:""
        }
        this.editDesc =this.editDesc.bind(this)
        this.typing =this.typing.bind(this)
    }
    componentWillMount(){
        Axios.get(`${apiUrl}/api/getProfile`).then((res)=>{if(res.data.user)this.setState({user:res.data.user})})
    }
    editDesc = ()=>this.setState({editDesc:!this.state.editDesc})
    typing = ()=>this.setState({editDesc:!this.state.editDesc})
    render(){
        return(
            <div className="light dashboard">
                <Navbar {...this.props} />
                <section style={{padding:"100px 0px 20px"}}>
                <Grid  columns="equal"  container>
                            <Grid.Column width="5" mobile="16" tablet="5" computer="5" className="no-xspad">
                          <Profilecard {...this.props} user={this.state.user}/>
                          <Card fluid> 
                        <Card.Content>
                            
                            <p className="lato"><b>Language </b></p>
                            <Card.Description>English</Card.Description>
                            
                        </Card.Content>
                        </Card>
                            </Grid.Column>
                            <Grid.Column width="11"  mobile="16" tablet="11" computer="11" className="no-xspad">
                                <Grid  columns="equal" >
                                    <Grid.Row  >
                                        <Grid.Column width="16" className="">
                                        <Card fluid={true}>
                                            <Card.Content>
                                                <Card.Header>Active Orders</Card.Header>
                                            </Card.Content>
                                        </Card>
                                       
                                        </Grid.Column>
                                        <Grid.Column >
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row  >
                                        <Grid.Column width="16" className="">
                                        <Card fluid={true}>
                                            <Card.Content>
                                                <Card.Header>Delivered Orders <span style={{float:"right",color:"grey"}}>$0.00</span></Card.Header>
                                            </Card.Content>
                                        </Card>
                                        <Card>
                                                    <Image src={`${process.env.PUBLIC_URL}/images/home-parrot-main-react.png`} />
                                                    <Card.Content>
                                                    <Label as='a' color='blue' ribbon>
                                                    Sample Order
                                                    </Label>
                                                    {/* <Card.Header>Sample order</Card.Header> */}
                                                    <Card.Meta>
                                                    
                                                        <span className='date'>Puchased Nov 12 2018</span>
                                                    </Card.Meta>
                                                    <Card.Description>React Angle Development</Card.Description>
                                                    </Card.Content>
                                                    <Card.Content extra textAlign="right">
                                                        <Icon name='clock' />
                                                         Delivered yesterday
                                                    </Card.Content>
                                                </Card>
                                        </Grid.Column>
                                        <Grid.Column >
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>     
                            </Grid.Column>
                        </Grid>   
                </section>
                <Bottomsection {...this.props}/>
                
               <Footer history={this.props.history}/>
               <style>{`
           
           .xnav{
            background: #fff;
            color:#000;
            border-bottom:1px solid #ddd;

            }
        .xnav  a{
                color: #000 !important
            }
            .xnav .navmodal a{
                color: #f7f7f7 !important
            }
           `}</style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Dashboard)