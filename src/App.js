import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Topbar from '../src/components/Topbar/Topbar'
import Home from './pages/Home/Home'
import EventList from '../src/pages/EventList/EventList'
import AddEvent from '../src/pages/AddEvent/AddEvent'
import Favorite from '../src/pages/Favorite/Favorite'
import Default from '../src/pages/Default/Default'

export default class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Topbar/>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/lista-wydarzen' component={EventList} />
                        <Route path='/stworz-wlasne-wydarzenie' component={AddEvent} />
                        <Route path='/ulubione' component={Favorite} />
                        <Route component={Default} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}