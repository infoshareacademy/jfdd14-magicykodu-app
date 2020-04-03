import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/MySidebar/MySidebar'
import Home from './pages/Home/Home'
import EventList from './pages/EventList/EventList'
import Default from './pages/Default/Default'


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

ReactDOM.render( <App/>, document.getElementById('root'));
