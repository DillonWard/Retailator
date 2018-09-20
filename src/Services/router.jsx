import React from 'react';
import { Router, Route } from 'react-router';
import App from '../App';
import HomeCards from '../Components/HomeCards/homeCards';

const Routes = (props) => {

    <Router {...props}>
        <Route path = "/" component={App}>
            <Route path="/home" component={HomeCards}/>
        </Route>
    </Router>
};

export default Routes;