import React,{Component} from  "react"
import { Popup ,Button, Grid, Card, Rating, Comment, Icon, Image, Form, Loader} from 'semantic-ui-react'
import Footer from "./footer";
import Navbar from "./navbar";
import Bottomsection from "./ui/bottomsection";
import {connect} from "react-redux"
import Reviewform from "./forms/review";
import Axios from "axios";
import apiUrl from "../config"
import moment from "moment";

// function mapStateToProps(state){
//     return {auth: state.auth}
// }
export default class Reviews extends Component{
    constructor(props){
        super(props);
        this.state={
            reviews:[],success:false
        }
    }
    componentWillMount(){
        Axios.get(`${apiUrl}/api/getReviews`).then((res)=>{if(res.data.reviews)this.setState({reviews:res.data.reviews,success:true})})
    }
    render(){
        return(
            <div className="light reviews">
                <Navbar {...this.props}/>
                <section style={{padding:"100px 0px 50px"}}>
                <Grid  columns="equal"  container>
                            <Grid.Column width="6" tablet="6" computer="6" only="computer tablet" className="no-xspad">
                            <Card fluid>
                            <Card.Content textAlign="center">
                            <Icon name="cube" size="big" circular/>
                            <Card.Header style={{marginTop:"5px"}}><p>React Angle</p></Card.Header>
                            <Card.Description>We are a passionate web and mobile app developer that specializes in Building Single Page Application(SPA) with mongoDB, React with Redux,React Router, React Native and NodeJS. we also build interactive website with bootstrap and materialize css framework to promote businesses and solve problems in a creative way.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user outline' />
                                22 Customers
                            </a> <span> | </span>
                            <a>
                                <Icon name='star' color="orange"/>
                                    <span style={{color:"#f2711c"}}>5.0 </span><span> Rating </span>
                            </a>
                            </Card.Content>
                        </Card>
                            </Grid.Column>
                            <Grid.Column width="10"  mobile="16" tablet="10" computer="10" className="no-xspad">
                                <Grid  columns="equal" >
                                    <Grid.Row  >
                                        <Grid.Column width="16" className="">
                                        <Card fluid={true}>
                                            <Card.Content>
                                                <Card.Header>Reviews  <Rating defaultRating={3} disabled icon='star' /><small> 5.0 </small></Card.Header>
                                                <Card.Meta>What our customers are saying about us</Card.Meta>
                                                <Card.Description>
                                                    {/* Steve wants to add you to the group <strong>best friends</strong> */}
                                                    <Grid   >
                                                        <Grid.Row columns="3" className="lato" style={{paddingBottom:"0px"}}>
                                                            <Grid.Column >
                                                                <b>Our communication level</b>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                                <b>Service as describe</b>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                                <b>Recommend to a friend</b>
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                        <Grid.Row columns="3" className="lato" style={{color:"#f2711c "}}>
                                                            <Grid.Column >
                                                                <b> <Rating  disabled defaultRating={3} icon='star' /> 5.0</b>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                                <b> <Rating disabled defaultRating={3} icon='star' /> 5.0</b>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                                <b> <Rating disabled defaultRating={3} icon='star' /> 5.0</b>
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                        <Grid.Row columns="1">
                                                            <Grid.Column>
                                                            {this.state.success?
                                                            <Comment.Group>
                                                                {this.state.reviews.map((review,key)=>(
                                                                    <Comment style={{}}>
                                                                <Comment.Avatar as='a' src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} />
                                                                <Comment.Content>
                                                                    <Comment.Author>{review.userID.firstName} {review.userID.lastName}</Comment.Author>
                                                                    <Comment.Metadata>
                                                                    <div>{moment(review.date).fromNow()}</div>
                                                                    <div>
                                                                    <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled size="mini"/>
                                                                    </div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>
                                                                        {review.review}
                                                                    </Comment.Text>
                                                                    {this.state.reviews.length-1 == key?<Reviewform {...this.props}/>:null}

                                                                </Comment.Content>
                                                                </Comment>
                                                                ))}
                                                                {this.state.reviews.length == 0?<Reviewform {...this.props}/>:null}
                                                                </Comment.Group>:<div style={{padding:"100px 0px"}}><Loader active inline='centered' /></div>}
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                    </Grid>
                                                </Card.Description>
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
               .ui.star.rating .active.icon{
                   color:#f2711c !important;
               }
               .xnav{
                background: #fff;
                color:#000 !important;

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
