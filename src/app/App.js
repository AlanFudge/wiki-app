import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import '../sass/main.scss';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <h1>Hello World</h1>
                </Route>
            </Switch>
        </Router>
    )
}