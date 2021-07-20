import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/img/logo.jpeg'

export class Header extends React.Component {

    render() {
        return (
            <header className="app-header">
                <img className="logo" src={img} alt="logo" />
                <nav>
                    <NavLink to="/">Home</NavLink> |
                    <NavLink to="/chat">chat</NavLink> |
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </header>
        )
    }
}



