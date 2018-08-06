import React, { Component } from 'react';
import { Link } from "react-router-dom"
import {
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
} from 'react-share';
class Footer extends Component {
    render() {
        return (

            <div className="x-footer">
         <div className="col-xs-12" style={{background:"#fff"}}>
                            <div style={{textAlign:"right",padding: "15px 0px",fontSize:"0.9em"}}>
                                2018 © KampusKonnect developed by Habeeb <br />
                                
                            </div>
                        </div>
            </div>
        );
    }
}

export default Footer;