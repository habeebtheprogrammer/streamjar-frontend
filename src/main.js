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
                    <Route exact path="/request" component={Request} />
                    <Route exact path="/about" component={Aboutus} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Privateroute exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/" component={Home} />
                    
                </Switch>
          
            </div>
        );
    }
}

export default App;