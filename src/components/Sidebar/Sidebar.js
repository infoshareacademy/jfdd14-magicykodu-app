import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component{
    render(){
        return (
            <nav>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/lista-wydarzen">Lista wydarzeń</Link>
                <br></br>
                <Link to="/stworz-wlasne-wydarzenie">Stwórz własne wydarzenie</Link>
                <br></br>
                <Link to="/ulubione">Ulubione</Link>
            </nav>
        )
    }
}

export default Sidebar;