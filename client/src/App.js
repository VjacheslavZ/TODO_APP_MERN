import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

import './App.css';

import Login from './components/auth/Login'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div className="content__wrap">
                            <Route exact path='/login' component={Login}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
