import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./component/home"
import AOS from "aos"
import 'aos/dist/aos.css';
import Request from './component/request';
import Contact from './component/contact';
import Aboutus from './component/about';
import Signin from './component/signin';
import Signup from './component/signup';
import Dashboard from './component/dashboard';
import {Sidebar,Segment,Icon,Menu} from "semantic-ui-react"
import Reviews from './component/reviews';
import Privateroute from './container/privateroute';
import Chat from './component/chat';
import Commingsoon from './component/commingsoon';
import Priviledge from './container/Priviledge';
import Checkpriviledges from './container/checkpriviledges';
import Requestid from './component/requestid';
import Privacy from './component/privacy';
import Tos from './component/tos';
import Affiliates from './component/affiliates';
import Howitworks from './component/howitworks';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentWillMount() {
        AOS.init();
    }
  
    render() {
        return (
            <div>
          <Switch>
                   
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Priviledge exact path="/request" component={Request} />
                    <Priviledge exact path="/request/:id" component={Requestid} />
                    <Priviledge exact path="/reviews" component={Reviews} />
                    <Checkpriviledges exact path="/affiliates" component={Affiliates} />
                    <Checkpriviledges exact path="/about" component={Aboutus} />
                    <Checkpriviledges exact path="/privacy_policy" component={Privacy} />
                    <Checkpriviledges exact path="/terms_of_service" component={Tos} />
                    <Checkpriviledges exact path="/contact" component={Contact} />
                    <Checkpriviledges exact path="/messages" component={Chat} />
                    <Checkpriviledges exact path="/how_it_works" component={Howitworks} />
                    <Route exact path="/commingsoon" component={Commingsoon} />
                    <Privateroute exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/" component={Home} />
                    <Route  path="*" component={Commingsoon} />
                    
                </Switch>
          
            </div>
        );
    }
}

export default App;