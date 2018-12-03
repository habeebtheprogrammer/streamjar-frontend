import React,{Component} from  "react"
import {Button, Grid} from 'semantic-ui-react'
import {Link} from "react-router-dom"
export default class Footer extends Component{

    render(){
        return(
                <footer  >
                    <div >
                    <Grid  columns="equal" className="main-footer" >
                    {/* <Grid.Row >
                        <Grid.Column>
                        <div style={{color:"#555"}} >
                        <h1 className="open-sans2"> <i className="cube icon"></i> <span >REACTANGLE</span></h1>
                        </div>
                        </Grid.Column>
                    </Grid.Row> */}
                    <Grid.Row className="first-row">
                        <Grid.Column width="6">
                        <Grid >
                            <Grid.Row >
                            <Grid.Column>
                            <p style={{fontSize:"1.1em"}}>We are a programming company that have the skills, grit, and passion to build world-class products. We build clean, interactive, secure and responsive web/mobile app and thats what makes us a professional's choice</p>
                            </Grid.Column>
                            </Grid.Row>  
                         </Grid>
                        </Grid.Column>
                        <Grid.Column>
                        {/* <h3> Support </h3> */}
                            <Grid >
                            <Grid.Row >
                                <Grid.Column>
                                <Link to="/blog"> Our blog</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                    <Link to="/privacy_policy">Privacy policy</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                <Link to="/terms_of_service"> Terms of Service</Link>
                                </Grid.Column>
                                </Grid.Row>
                               
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid >
                            <Grid.Row >
                                <Grid.Column>
                                <Link to="/our_works">Our work</Link>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column>
                                    <Link to="/how_it_works">How it works</Link>
                                </Grid.Column>
                                </Grid.Row>
                               
                                <Grid.Row >
                                <Grid.Column>
                                <Link to="/request">Send a request</Link>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                        <Grid >
                        <Grid.Row >
                            <Grid.Column>
                            <Link to="/contact">Contact us</Link>
                            </Grid.Column>
                            </Grid.Row>
                            
                            <Grid.Row >
                            <Grid.Column>
                            <Link to="/messages">Chat with us</Link>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                            <Grid.Column>
                                <Link to="/support">Support center</Link>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    <div className="side-widget "  data-aos="zoom-in-right">
                   <div class='ui computer vertically reversed grid'>
                        <div class='row'>
                            <div class='column'><Button circular color='facebook' icon='facebook' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button circular color='twitter' icon='twitter' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button circular color='google plus' icon='google plus' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button circular color='linkedin' icon='linkedin' /></div>
                        </div>
                        </div>
                   </div>
                   <div >
                    <div style={{textAlign:"center"}} className="container ui" >
                    <div className="copyright"><small >© 2018 React Angle, all rights reserved. Made with  for a better web.</small>
                    </div>
                    </div>
                    </div>
                   
                  
                   </div>
                </footer>
        )
    }
}