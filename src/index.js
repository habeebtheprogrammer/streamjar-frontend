import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';
import { Provider } from "react-redux";
import  allReducer  from "./reducer/index"
import { createStore } from "redux";
import jwt from "jsonwebtoken";
import { setCurrentUser } from "./actions/index"
import setAuthorizationToken from "./component/auth"
import socketIOClient from "socket.io-client"
import apiUrl from "./config"
var store = createStore(allReducer);

if (window.localStorage.kaytoken) {
    setAuthorizationToken(window.localStorage.kaytoken);
    var socket = socketIOClient(apiUrl);
    var decodedToken = jwt.decode(window.localStorage.kaytoken);
    socket.emit("initialize", decodedToken.id, decodedToken.fullName, decodedToken.department,decodedToken.username)
    store.dispatch(setCurrentUser(decodedToken))
    console.log(decodedToken)
}

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App socket={socket}/>
    </Provider >
</BrowserRouter>, document.getElementById('root'));