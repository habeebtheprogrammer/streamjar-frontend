import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import Messages from "../component/messages"
function mapStateToProps(state) {
    return { auth: state.auth }
}
class Checkpriviledge extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Route 
                path={this.props.path} 
                render={(props) => this.props.auth.user.role === "support" ?
                <Messages {...props} auth={this.props.auth} />:
                <this.props.component {...props} auth={this.props.auth}/>
                } />
            )}
}

export default connect(mapStateToProps)(Checkpriviledge);
