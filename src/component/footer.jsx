import React,{Component} from  "react"
import {Button, Grid,Icon, Input} from 'semantic-ui-react'
import {Link} from "react-router-dom"
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
   
                    </Grid.Column>
                    <Grid.Column textAlign="center" >
                        <div style={{padding:"10px 0px"}}>
                        <div style={{color:"#fff"}}>5% Bonus for every donation you receive</div>
                        <p><small>This bonus will last a life time of you time with us</small>
                        </p>
                        </div>
                    </Grid.Column >
                        <Grid.Column width="5"  mobile="16" tablet="5" computer="5" >
                        <div style={{padding:"10px 0px"}}>
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
                            <h2><Icon name="cube" /> Streamjar</h2>
                            <p >
                            Streamjar is a service that allows viewers to tip streamers for free (aka. the viewer doesn't have to spend their hard earned money). While some viewers do donate their own money
                            </p>
                            </Grid.Column>
                            </Grid.Row>  
                         </Grid>
                        </Grid.Column>
                        <Grid.Column>
                        {/* <h3> Support </h3> */}
                            <Grid >
                            <Grid.Row >
                                <Grid.Column>
                                <Link to="/about"> About us</Link>
                                </Grid.Column>
                                </Grid.Row>
                                {/* <Grid.Row >
                                <Grid.Column>
                                    <Link to="/privacy_policy">Privacy policy</Link>
                                </Grid.Column>
                                </Grid.Row> */}
                               
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid >
                            <Grid.Row >
                                <Grid.Column>
                                    <Link to="/how_it_works">How it works</Link>
                                </Grid.Column>
                                </Grid.Row>
                             {/* <Grid.Row >
                                <Grid.Column>
                                <Link to="/affiliates">Affiliate</Link>
                                </Grid.Column>
                                </Grid.Row> */}
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                        <Grid >
                         
                        <Grid.Row >
                                <Grid.Column>
                                <Link to="/find_user">Find users</Link>
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
                   <div className="scroll-top">
                        <Button color="red"  icon="angle up" onClick={this.scrolltop}/>
                   </div>
                   <div >
                    <div style={{textAlign:"center"}} className="container ui" >
                    <div className="copyright"><small >© 2019 Streamjar, all rights reserved.</small>
                    </div>
                    </div>
                    </div>
                   
                  
                   </div>
                   <style>{`
                   @media (max-width:400px){
                .ui.container{
                   margin-left: 0.5em !important;
                   margin-right: 0.5em !important;
               }
               `}</style>
                </footer>
        )
    }
}