import React,{Component} from  "react"
import { Popup ,Button, Grid,Embed,Header,Dimmer,GridColumn, Icon} from 'semantic-ui-react'
import Footer from "./footer";
import Navbar from "./navbar";
import Bottomsection from "./ui/bottomsection";
import {connect} from "react-redux"
import Particles from "react-particles-js";

function mapStateToProps(state){
    return {auth: state.auth}
}
 class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}
    render(){
        return(
            <div className="light home">
                <Navbar {...this.props}/>
                {/* <section className="first-section"   style={{}}>
                    <div>
                        <center>
                       
                        <div class='ui move up reveal' style={{float:"unset !important"}}>
                        <div class='ui visible content' style={{display:"inline-block"}}>
                            <img src='/images/devcon.jpg' class='ui small image circular' style={{border:"1px solid #fff",padding:"5px"}}/>
                        </div>
                        <div class='ui hidden content' style={{display:"inline-block"}}>
                            <img src='/images/devcon.jpg' class='ui small image circular'style={{border:"1px solid #fff",padding:"5px"}} />
                        </div>
                        </div>
                            </center>  
                            <Popup
                                trigger={<h1 style={{marginBottom:"0px",display:"inline-block"}} data-aos="zoom-in-up" data-aos-duration="600">Habeeb Abdulrahman</h1>}
                                content="Fullstack Javascript Developer"
                                size="tiny"
                            />
                        
                        <div style={{color:"#eee"}} data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="300">The C.E.O</div>
                    </div>
                </section> */}
                <section >
                <Particles  params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                    
	            }} style={{position:"absolute",width:"100%"}} />
                    <div className="first-section" >
                    <div className="ui container  ">
                    <div >
                    <Grid columns="equal">
                        <GridColumn width="8" mobile="16" tablet="8" computer="8">
                            <h1 className="open-sans2" data-aos="zoom-in-right"> Enterprise Grade solution </h1>
                            <p style={{fontSize:"1.3em"}}>
                            We are a programming company that have the skills, grit, and passion to build world-class products.
                            We build clean, interactive, secure and responsive web/mobile app and thats what makes us a professional's choice</p>
                            
                            <Button basic animated size="large"  onClick={this.handleOpen} color="grey">
                            <Button.Content visible style={{color:"#ddd"}}>How it works</Button.Content>
                            <Button.Content hidden>
                                <Icon name='play right' />  Play
                            </Button.Content>
                            </Button>
                            {/* <Button  onClick={this.handleOpen} color='orange' content={<p ><i className="play icon"  ></i> Watch video</p>} /> */}
                        </GridColumn>
                            </Grid>
                            </div>
                            <style>
                                {`
                                .ui.basic.grey.button, .ui.basic.grey.buttons .button{
                                    box-shadow: 0 0 0 1px #ccc inset!important;
                                }
                                `}
                            </style>
                            </div>
                        <Dimmer active={this.state.active} onClickOutside={this.handleClose} page>
                                
                        <Embed id='4zVKncvJimo' placeholder='../../images/code.jpg' source='youtube' />
                        <Header as='h2' icon inverted>
                            <p data-aos="fade-up">Want to discuss your product ? Contact us now!</p>
                        </Header>
                        </Dimmer>
                        </div>
                   </section>
                <section className="second-section">
                
                    <div style={{}}>
                        <div className="ui container ">
                        <h1>Hire The Best</h1>
                        <Grid  columns="equal"  >
                            <Grid.Column width="8" mobile={16} tablet={12} computer="eight">
                            <p className="fs1-2" style={{}}> We are professionals who work across borders towards a goal that is bigger than all of us. we build enterprise solutions for startups and companies spanning content management, e-commerce, health, education and financial services </p>
                            </Grid.Column>
                        </Grid>
                        <Grid  columns="equal"  >
                            <Grid.Column width="4" mobile={8} tablet={6} computer="4">
                                <p data-aos="zoom-in-left"> <i className="check icon"  ></i> Web App Development</p>
                                <p data-aos="zoom-in-left" data-aos-delay="300"> <i className="check icon"></i> Mobile App Development</p>
                                <p data-aos="zoom-in-left"  data-aos-delay="600"> <i className="check icon" ></i> Live chat and Email integration</p>
                            </Grid.Column>
                            <Grid.Column width="4" mobile={8} tablet={6} computer="4">
                            <p data-aos="zoom-in-up" data-aos-duration="300"> <i className="check icon"></i> Api server development</p>
                                <p data-aos="zoom-in-up" data-aos-delay="600"> <i className="check icon"></i> Deployment of server</p>
                                <p data-aos="zoom-in-up" data-aos-delay="900"> <i className="check icon" ></i> Semantic Framework</p>
                            </Grid.Column>
                            
                        </Grid><br />
                        <Button animated='vertical' color="orange"   onClick={()=>this.props.history.push("/about")}>
                        <Button.Content hidden>Learn more</Button.Content>
                        <Button.Content visible>Learn more <Icon name="arrow alternate circle outline right" /> </Button.Content>
                        </Button>
                    </div>
                   
                    </div>
                </section>
                <section style={{}}>
                <div className="third-section" >
                <Particles params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} style={{position:"absolute",width:"100%"}} />
                    <div className="ui container xlgicon" >
                          <Grid  columns="equal" textAlign="center" >
                            <Grid.Column width="4">
                            </Grid.Column>
                            <Grid.Column width="4"  mobile="16" tablet="8" computer="8">
                                <h1 style={{fontFamily:"open-sans2"}} data-aos="zoom-in-up">  Crazy about designs?</h1>
                                <p className="fs1-2">We've got you covered! we maintain the best practices and color structure which means that your website/mobile app is consistent and easier to modify</p>
                            </Grid.Column>
                            <Grid.Column width="4" style={{padding:"0px"}}>
                            </Grid.Column>
                        </Grid>   
                        <Grid  columns="equal" >
                            <Grid.Column textAlign="right" width="4" mobile="16" tablet="4" computer="4">
                            <div className="">
                                <div data-aos="zoom-in-right" className="pad-bottom">
                                <Icon  name="code" style={{float:"right",marginLeft:"10px"}}/>
                                <h4> Development </h4>
                                <small>Our technology stack includes Node.js, React.js, React Native, Mongodb, SQL, TypeScript and Agile methodology
                                </small>
                                </div>
                                <div  data-aos="zoom-in-right" data-aos-delay="300" className="pad-bottom">
                                {/* <img src='/images/color-calculation.png' class='ui small right floated image circular ' style={{width:"100px"}} /> */}
                                <Icon  name="cloud" style={{float:"right",marginLeft:"10px"}}/>
                                <h4>Deployment</h4>
                                <small>Let us take care of your deployment on  any cloud computing service provider of your choice
                                </small>
                                </div>
                                <div  data-aos="zoom-in-right" data-aos-delay="600" className="pad-bottom">
                                {/* <img src='/images/color-calculation.png' class='ui small right floated image circular ' style={{width:"100px"}} /> */}
                                <Icon  name="code branch" style={{float:"right",marginLeft:"10px"}}/>
                                <h4>Long term project</h4>
                                <small>We are open to long term project and we also provide one month free technical support to all our client
                                </small>
                                </div>
                            </div>
                            </Grid.Column>
                            <Grid.Column width="8"  mobile="16" tablet="8" computer="8">
                                <img src="../images/iphone.png" width="100%" alt=""/>
                            </Grid.Column>
                            <Grid.Column width="4"  mobile="16" tablet="4" computer="4">
                            <div >
                                <div  data-aos="zoom-in-left" className="pad-bottom">
                                {/* <img src='/images/light-dark-primary.png' class='ui small left floated image circular ' style={{width:"100px"}} /> */}
                                <Icon  name="bug" style={{float:"left",marginRight:"10px"}}/>
                                <h4>Bugs and Debugging</h4>
                                <small> We maintain a good coding ethic. that is what makes our application free from technical Bugs
                                </small>
                                </div>
                                <div  data-aos="zoom-in-left" data-aos-delay="300" className="pad-bottom">
                                <Icon  name="handshake outline" style={{float:"left",marginRight:"10px"}}/>
                                <h4>Quality of service</h4>
                                <small>We deliver exactly what our clients need and right on time that is why our clients are always happy
                                </small>
                                </div>
                                <div  data-aos="zoom-in-left" data-aos-delay="600" className="pad-bottom">
                                <Icon  name="mobile" style={{float:"left",marginRight:"10px"}}/>
                                <h4>Responsive Design</h4>
                                <small> 
                                As a guide for consistency, all elements are designed using a responsive css framework.
                                </small>
                                </div>
                            
                            </div>
                            </Grid.Column>
                        </Grid>                     
                        
                    </div>
                    </div>
                </section>
                <Bottomsection {...this.props}/>
                
               <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)