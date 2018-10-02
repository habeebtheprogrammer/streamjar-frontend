import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './main';
import { Provider } from "react-redux";
import  allReducer  from "./reducer/index"
import { createStore } from "redux";
import jwt from "jsonwebtoken";
import { setCurrentUser } from "./actions/index"
import setAuthorizationToken from "./component/auth"
var store = createStore(allReducer);
if (window.localStorage.kaytoken) {
    setAuthorizationToken(window.localStorage.kaytoken);
    var decodedToken = jwt.decode(window.localStorage.kaytoken);
    store.dispatch(setCurrentUser(decodedToken))
}
ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider >
</BrowserRouter>, document.getElementById('root'));