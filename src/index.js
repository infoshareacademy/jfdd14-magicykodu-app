import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Topbar from '../src/components/Topbar/Topbar';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Home from '../src/pages/Home/Home';
import EventList from '../src/pages/EventList/EventList';
import Default from '../src/pages/Default/Default'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Topbar/>
        <Sidebar/>
        <Switch>      
            <Route exact path='/' component={Home} />
            <Route path='/lista-wydarzen' component={EventList} />
            <Route component={Default} />
        </Switch>  
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
