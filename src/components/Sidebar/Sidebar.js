import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return (
            <nav>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/lista-wydarzen">Lista wydarzeń</Link>
            </nav>
        )
    }
}

export default Sidebar;