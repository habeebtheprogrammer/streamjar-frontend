import React,{Component} from  "react"
import {Button, Grid, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom"
export default class Navmodal extends Component{
    constructor(props){
        super(props)
    }


    render(){
     
        return(
                <div className="navmodal" data-aos="fade-in">
                    <div >
                    <Grid columns="equal" container >
                    <Grid.Row >
                        <Grid.Column>
                        <div style={{}} >
                        <h2> <Icon color="orange" name="cube" /> <span  className="open-sans2" >REACTANGLE</span> <Icon name="cancel" style={{float:"right"}} className="xcursor" onClick={()=>this.props.handleClose()}/></h2>
                        </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="modal-links">
                        <Grid.Column>
                        {/* <h3> Support </h3> */}
                            <Grid >
                            {this.props.auth.isAuthenticated?
                                 <Grid.Row >
                                 <Grid.Column>
                                 <Button inverted color="orange" icon="sign-out" circular size="big" floated="left"/>
                                     <Link to="#" onClick={this.props.logout}>Sign out</Link>
                                 </Grid.Column>
                                 </Grid.Row>
                               :
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted color="orange" icon="sign-in" circular size="big" floated="left"/>
                                    <Link to="/signin">Sign in</Link>
                                </Grid.Column>
                                </Grid.Row>
                                }
                                {this.props.auth.isAuthenticated?
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted color="orange" icon="dashboard " circular size="big" floated="left"/>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Grid.Column>
                                </Grid.Row>
                                :
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted color="orange" icon="add user " circular size="big" floated="left"/>
                                    <Link to="/signup">Sign up</Link>
                                </Grid.Column>
                                </Grid.Row>}
                                <Grid.Row >
                                <Grid.Column>
                                    <Button inverted  icon="comments outline" circular size="big" floated="left"/>
                                    <Link to="/messages">Chat with us</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="envelope outline" circular size="big" floated="left"/>
                                    <Link to="/request">Send a request</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="idea" circular size="big" floated="left"/>
                                    <Link to="/how_it_works">How it works</Link>
                                </Grid.Column>
                                </Grid.Row>
                               
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid >

                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="star" circular size="big" floated="left"/>
                                    <Link to="/reviews">Reviews</Link>
                                </Grid.Column>
                                </Grid.Row>
                           
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="call " circular size="big" floated="left"/>
                                    <Link to="/contact">Contact us</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                    <Button inverted  icon="help " circular size="big" floated="left"/>
                                    <Link to="/about">Learn about us</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="shield" circular size="big" floated="left"/>
                                    <Link to="/trust_and_safety">Trust and Safety</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="thumbtack" circular size="big" floated="left"/>
                                    <Link to="/privacy_policy">Privacy policy</Link>
                                </Grid.Column>
                                </Grid.Row>
                               
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                        <Grid >
                        <Grid.Row >
                                <Grid.Column>
                                    <Button inverted  icon="envira gallery" circular size="big" floated="left"/>
                                    <Link to="/our_work">Our work</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="diamond" circular size="big" floated="left"/>
                                    <Link to="/affiliates">Affiliates</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="handshake outline" circular size="big" floated="left"/>
                                    <Link to="/partnership">Partner with us</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="commenting " circular size="big" floated="left"/>
                                    <Link to="/messages">Support center</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Button inverted  icon="keyboard outline" circular size="big" floated="left"/>
                                    <Link to="/terms_of_service">Terms of service</Link>
                                </Grid.Column>
                                </Grid.Row>
                        </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                   
                  
                   </div>
                </div>
        )
    }
}