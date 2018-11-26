import React, { Component} from 'react';
import { FacebookProvider, Login } from 'react-facebook';
import { Button, Dimmer, Header, Icon, Loader } from 'semantic-ui-react';
import axios from "axios"
import setAuthorizationToken from "./auth"
import apiUrl from "../config.js"
import jwt from "jsonwebtoken"

export default class Fblogin extends Component {
  handleResponse = (data) => {
    console.log(data)
    axios.post(`${apiUrl}/api/login`,data).then((res) => {
      if (res.data.error) {
          this.setState({ ...this.state, error: res.data.error });
      } else if (res.data.token) {
          var userData = jwt.verify(res.data.token, "1864")
          if (userData) {
              var data = jwt.decode(res.data.token,"1864");
              localStorage.setItem("kaytoken", res.data.token);
              localStorage.setItem("username", data.username);
              setAuthorizationToken(res.data.token);
              window.location.assign(`/dashboard`)
          }
      }
      this.setState({ isLoading: false }) 
}).catch((err) => {
      this.setState({ isLoading: false, error: "Please try again later. an error has occured" })
})
  }
 
  handleError = (error) => {
    console.log(error);
    
    this.setState({ error });
  }
  
  render() {
    return (
        <FacebookProvider appId="550956518710965">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
             <button class='ui facebook button' role='button' onClick={handleClick}>
                                <i   class='facebook  icon medium' />Facebook
                            </button>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}