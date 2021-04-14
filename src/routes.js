import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Home' component={Home}/>
    </Switch>
);