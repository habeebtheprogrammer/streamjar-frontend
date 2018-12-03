import React,{Component} from  "react"
import { Popup ,Button, Grid} from 'semantic-ui-react'
import Footer from "./footer";
import Navbar from "./navbar";
import Featurebox from "./ui/featurebox";
import Bottomsection from "./ui/bottomsection";
import {connect} from "react-redux"
import Particles from "react-particles-js";


export default class Aboutus extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="about light">
                <Navbar {...this.props}/>
                
                <section  className=" first-section" style={{}}>
                  
                    <div className="content">
                        <Grid columns="equal" container>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column className="no-xspad" width="8" mobile="16" tablet="8" computer="8">
                                <h1 data-aos="zoom-up" >Learn About Us</h1>
                                <p data-aos="fade-up" data-aos-delay="300" style={{fontSize:'1.3em'}}>
                                We are professionals. A team of Developers, Designers, and Devops engineers. Our main aim is to bring ideas to life and put a smile on our customers. We build interactive websites/mobile application and solve problems in a creative way. Take that bold step now and you’ll finally have a sleek & practical web app to be proud of!</p>
                                <div class='ui buttons' data-aos="fade-up" data-aos-delay="300">
                                <button class='ui button' role='button' onClick={()=>this.props.history.push('/reviews')}>
                                    Reviews
                                </button>
                                <div class='or' />
                                <button class='ui orange button' role='button' onClick={()=>this.props.history.push('/contact')}>
                                    Contact us
                                </button>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                            </Grid.Column>
                        </Grid>
                    </div>
                </section>
                
                <section className="ui  features ">
                        <Grid columns="equal" container>
                            <Grid.Column mobile="16" only="mobile" className="no-xspad">
                                <h2 className="open-sans2"> Features Overview</h2>
                                <p style={{fontSize:"1em",color:"#aaa"}}>
                                With our dedicated and briliant minds, you are rest assured that your innovative idea will see the light of the day in no time.
                                </p>
                            </Grid.Column>
                            <Grid.Column width="9" mobile="16" tablet="9" computer="9" >
                                <Grid columns="equal" >
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox icon="power off icon" content="Performance Optimize"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="300" icon="game icon" content="INTUITIVE & EASY TO USE"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="600" icon="file icon" content="UNLIMITED PAGE TEMPLATE"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="900" icon="youtube icon" content="YOUTUBE API SUPPORT"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="900" icon="youtube icon" content="YOUTUBE API SUPPORT"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="1200" icon="code off icon" content="FRONTEND FRAMEWORKS "/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="1500" icon="server off icon" content="RESTFUL API DEVELOPMENT "/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox  delay="1800" icon="desktop icon" content="RESPONSIVE DESIGN"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="2100" icon="mobile icon" content="MOBILE APP DEVELOPMENT"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="2700" icon="tablet off icon" content="USSD APP DEVELOPMENT "/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="3000" icon="cloud icon" content="CLOUD COMPUTING SERVICES"/>
                                    </Grid.Column>
                                    <Grid.Column width="4" mobile="8" tablet="4" computer="4">
                                        <Featurebox delay="3000" icon="bug icon" content="BUG FREE AND DEBUGGING"/>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column only="tablet computer">
                                <h2 className="open-sans2"> Features Overview</h2>
                                <p style={{fontSize:"1.2em",color:"#aaa"}}>
                                With our dedicated and briliant minds, you are rest assured that your innovative idea will see the light of the day in no time.
                                </p>
                            </Grid.Column>
                        </Grid>
                </section>
                <Bottomsection {...this.props} />
               <Footer />
            </div>
        )
    }
}
