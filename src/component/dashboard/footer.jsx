import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Customscript from "../extra/custom"

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: "",
            success: "",
        }
    }
	componentDidMount() {
		Customscript()
	}
	

   
    render() {
        return (
			<div className="col-md-12">
				<div className="copyrights">© 2018 Tzoor. All Rights Reserved.</div>
			</div>
			)}

       }