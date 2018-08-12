import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
function mapStateToProps(state) {
    return { auth: state.auth }
}
class Private extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Route path={this.props.path} render={
                    (props) => {
                        if (this.props.auth.user.username === this.props.match.params.id) 
                            return <this.props.component {...this.props} socket={this.props}/>
                        
                     
                         else 
                           return <Redirect
                                to={{
                                    pathname: `/profile/${this.props.match.params.id}`,
                                    state: { from: this.props.location }
                                }}
                            />
                        

                    }
                } />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Private);
