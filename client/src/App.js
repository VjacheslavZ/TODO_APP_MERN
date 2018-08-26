import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {logoutUser, setCurrentUser} from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store'

import './App.css';

import Login from './components/auth/Login'
import Register from './components/auth/Register'

//check token
if(localStorage.jwtToken) {
	//set auth token header auth
	setAuthToken(localStorage.jwtToken);
	//Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	//Set user and isAuth
	store.dispatch(setCurrentUser(decoded));
	//Check for expire token
	const currentTime = Date.now() / 1000;
	if(decoded.exp < currentTime) {
		//Logout user
		store.dispatch(logoutUser());
		//Clear current profile
		// store.dispatch(clearCurrentProfile());
		//Redirect user
		window.location.href = '/login'
	}
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div className="content__wrap">
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/register' component={Register}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
