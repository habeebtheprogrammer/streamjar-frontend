import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
function mapStateToProps(state) {
    return { auth: state.auth }
}
class Privateroute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Route 
                path={this.props.path} 
                render={(props) => this.props.auth.isAuthenticated === true ?
                     <this.props.component {...props} />
                      : <Redirect
                        to={{
                        pathname: "/signin",
                        state: { from: props.location }
                        }}
                        />
                } />
            )}
}

export default connect(mapStateToProps)(Privateroute);
