import React,{Component} from  "react"
import {Button, Grid,Icon, Input} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import Newsletter from "./forms/newsletter";
import $ from "jquery"
export default class Footer extends Component{

    scrolltop(){
        $(window).scrollTop(0)
    }
    render(){
        return(
                <footer  >
                    <div >
                    <Grid  columns="equal" className="top-footer">
                    <Grid.Row>
                    <Grid.Column width="5" mobile="16" tablet="5" computer="5">
                    <div style={{padding:"10px 0px",textAlign:"center"}}>
                            <Link to="/contact"><Icon name="react" size="big"/></Link>
                            <Link to="/contact"><Icon name="vuejs" size="big"/></Link>
                            <Link to="/contact"><Icon name="js" size="big"/></Link>
                            <Link to="/contact"><Icon name="git" size="big"/></Link>
                            <Link to="/contact"><Icon name="slack" size="big"/></Link>
                            <Link to="/contact"><Icon name="free code camp" size="big"/></Link>
                            <Link to="/contact"><Icon name="bitbucket" size="big"/></Link>
                            <Link to="/contact"><Icon name="aws" size="big"/></Link>
                            <Link to="/contact"><Icon name="codepen" size="big"/></Link>
                            <Link to="/contact"><Icon name="laravel" size="big"/></Link>
                            <Link to="/contact"><Icon name="linux" size="big"/></Link>
                            <Link to="/contact"><Icon name="cloud" size="big"/></Link>
                            <Link to="/contact"><Icon name="medium m" size="big"/></Link>
                            <Link to="/contact"><Icon name="node js" size="big"/></Link>
                            <Link to="/contact"><Icon name="html5" size="big"/></Link>
                    
                    </div>
                    </Grid.Column>
                    <Grid.Column textAlign="center" >
                        <div style={{padding:"10px 0px"}}>
                        <div style={{color:"#fff"}}>Development discounts up to 40% off for returning buyers</div>
                        <p><small>By clicking Subscribe, you have agreed to our Terms & Conditions and Privacy Policy</small>
                        </p>
                        </div>
                    </Grid.Column >
                        <Grid.Column width="5"  mobile="16" tablet="5" computer="5" >
                        <div style={{padding:"10px 0px"}}>
                        <Newsletter />
                        </div>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    <Grid  columns="equal" className="main-footer" >
                 
                    <Grid.Row className="first-row">
                        <Grid.Column width="5">
                        <Grid >
                            <Grid.Row >
                            <Grid.Column>
                            <h2><Icon name="cube" /> Reactangle</h2>
                            <p >We are a programming company that have the skills, grit, and passion to build world-class products. We build clean, interactive, secure and responsive web/mobile app and thats what makes us a professional's choice</p>
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
                        <Grid.Column>
                        {/* <p><Button  content='Send a request' className="ask"  fluid onClick={()=>this.props.history.push('/request')}/></p> */}
                        <p>
                            <Link to="/contact"><Icon name="cc mastercard" size="big"/></Link>
                            <Link to="/contact"><Icon name="cc  paypal" size="big"/></Link>
                            <Link to="/contact"><Icon name="cc visa" size="big"/></Link>
                            <Link to="/contact"><Icon name="cc paypal" size="big"/></Link>
                            <Link to="/contact"><Icon name="cc apple pay" size="big"/></Link>
                        </p>

                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    <div className="side-widget "  data-aos="zoom-in-right">
                   <div class='ui computer vertically reversed grid'>
                        <div class='row'>
                            <div class='column'><Button size="huge" color='facebook' icon='facebook' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button size="huge" color='twitter' icon='twitter' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button size="huge" color='google plus' icon='google plus' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button size="huge" color='linkedin' icon='linkedin' /></div>
                        </div>
                        </div>
                   </div>
                   <div className="bottom-chatbox">
                        <Button color="orange"  icon="comments" circular size="massive" onClick={()=>this.props.history.push('/messages')}/>
                        <p className="hide-xs" style={{color:"#eee"}}>Chat with us</p>
                   </div>
                   <div className="scroll-top">
                        <Button color="orange"  icon="angle up" onClick={this.scrolltop}/>
                   </div>
                   <div >
                    <div style={{textAlign:"center"}} className="container ui" >
                    <div className="copyright"><small >© 2018 React Angle, all rights reserved. Made with React for a better web.</small>
                    </div>
                    </div>
                    </div>
                   
                  
                   </div>
                </footer>
        )
    }
}