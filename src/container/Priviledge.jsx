import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
function mapStateToProps(state) {
    return { auth: state.auth }
}
class Priviledge extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Route 
                path={this.props.path} 
                render={(props) => this.props.auth.user.role === "support" ?
                <Redirect
                to={{
                pathname: "/messages",
                state: { from: props.location }
                }}
                />:
                <this.props.component {...props} auth={this.props.auth}/>
                } />
            )}
}

export default connect(mapStateToProps)(Priviledge);
