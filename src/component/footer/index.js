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
            <div className="clearfix"></div>
            <div className="row " style={{background:"#fff",borderTop:"1px solid #e8e8e8"}}>
            <div className="col-xs-6 ">
            <div id="google_translate_element"></div>
            </div>
         <div className="col-xs-6" >
                            <div style={{textAlign:"right",padding: "15px 0px",fontSize:"0.9em"}}>
                                2018 © KampusKonnect developed by Habeeb <br />
                                
                            </div>
                        </div>
                        </div>
            </div>
        );
    }
}

export default Footer;