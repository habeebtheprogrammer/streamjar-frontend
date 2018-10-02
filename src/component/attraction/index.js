import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
import Loading from "../loader"
import $ from "jquery"
import jwt from "jsonwebtoken"
import Navbar from '../navbar';
import Footer from '../footer';
import Attractioncontent from './attractioncontent';
export default class Attraction extends Component {
    constructor() {
        super();
        this.state = {
    }

    }
    componentWillMount() {
        $(document).scrollTop(0)
    }
    render() {
        return (
            <div className="attractiondiv" id="attractionDIV">
            <Navbar match={this.props.match}/>
            <Attractioncontent {...this.props}/>
            <Footer />
         </div>
        );
    }
}
