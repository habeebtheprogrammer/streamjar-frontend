import React,{Component} from  "react"
import { Popup ,Button, Grid} from 'semantic-ui-react'

export default class Bottomsection extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <section className="bottom-section">
                    <div>
                    <Grid  columns="equal" divided >
                            <Grid.Row>
                            <Grid.Column only="tablet computer">
                                <div className="b-box" style={{}} >
                                <h2 style={{fontFamily:"open-sans2",color:"#555"}}  data-aos="zoom-in-right" >Your Terms</h2>
                                <p>Whatever you need, simply send a request, no matter your budget.</p>
                                
                                </div>
                            </Grid.Column>
                            <Grid.Column width="6" computer="6" only="tablet computer">
                               <div className="b-box" style={{}}  >
                               <h2 style={{fontFamily:"open-sans2",color:"#555"}}  data-aos="zoom-in-up" >Your Timeline</h2>
                                <p>Request for services based on your goals and deadlines, it’s that simple.</p>
                                
                                </div>
                            </Grid.Column>
                            <Grid.Column only="tablet computer">
                                <div className="b-box" style={{}}>
                                <h2 style={{fontFamily:"open-sans2",color:"#555"}}  data-aos="zoom-in-left" >Your Safety</h2>
                                <p>Your payment is always secure, Reactangle is built to protect your peace of mind.</p>
                                
                                </div>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row only="mobile">
                                <Grid.Column  width="sixteen" className="">
                                    <div style={{padding:"20px 0px"}}>
                                    <div className="ui container">
                                    <h2 style={{fontFamily:"open-sans2",color:"#555"}}  data-aos="zoom-in-left" >Sound Exciting?</h2>
                                    <p className="fs1-2">Check out what’s included inside this great value company. we love to put a smile on our customer. </p>
                                    <p><Button content="Hire us" basic color="orange" compact  onClick={()=>this.props.history.push("/request")}/>
        {this.props.auth.isAuthenticated?null:<Button content="Sign in" basic color="orange" compact  onClick={()=>this.props.history.push("/signin")}/>}</p>
                                    </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                        <Grid columns='equal'  divided >
                     
                        </Grid>
                    </div>
                </section>
        )
    }
}