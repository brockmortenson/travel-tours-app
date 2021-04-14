import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Home' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Cart' component={Cart}/>
    </Switch>
);