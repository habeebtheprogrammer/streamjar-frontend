import React, { Component } from 'react';
import { connect } from "react-redux"
import {Route ,Switch} from "react-router-dom"
import axios from "axios"
import apiUrl from "../../config"
import { Link } from "react-router-dom"
import Group from "./room"
import Home from "./home"
import Create from "./create"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}
class Room extends Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    componentWillMount() {
    }
    render() { 
        return (
            <div className="row">
                <Switch>
                <Route  exact path="/community" render={(props)=><Home {...this.props}/>} />
                <Route exact path="/community/create" render={(props)=><Create {...props}  socket={this.props.socket}  auth={this.props.auth}/>} />
                <Route exact path="/community/:id" render={(props)=><Group {...props} socket={this.props.socket} auth={this.props.auth}/>} />
                </Switch>
            </div>
        );
    }
}

export default  connect(mapStateToProps)(Room)