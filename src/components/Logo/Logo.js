import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './Logo.css'

function Logo(){
    return(
        <Link to="/">
            <img className="imgLogo" src={logo} alt="logo"/>
        </Link>      
    )
}

export default Logo;