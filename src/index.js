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

var store = createStore(allReducer);

if (window.localStorage.kaytoken) {
    setAuthorizationToken(window.localStorage.kaytoken);
    console.log(jwt.decode(window.localStorage.kaytoken))
    store.dispatch(setCurrentUser(jwt.decode(window.localStorage.kaytoken)))
}

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider >
</BrowserRouter>, document.getElementById('root'));