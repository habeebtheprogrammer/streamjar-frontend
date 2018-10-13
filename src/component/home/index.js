import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
import Loading from "../loader"
import $ from "jquery"
import jwt from "jsonwebtoken"
import Navbar from '../navbar';
import Search from './search';
import Hcontent from './content';
import Footer from '../footer';
import Dslider from '../extra/dslider';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remount: false
        }
    }
   

    componentWillMount() {
        $(document).scrollTop(0)
    }

    render() {
        return (
            <div >
            <Navbar match={this.props.match}/>

            <div className="xleft">
            <Search />
            <Hcontent />
            <Footer />
         </div>
         </div>
        );
    }
}