import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'


const Nav = (authenticated, currentUser)=>{


    return !authenticated && !currentUser ? (
        <header >
            <nav className='navbar  '>
                <NavLink className="btn btn-outline-success" to='/' >
                    About Us
                </NavLink>
                <NavLink className="btn btn-outline-success" to='/signup'>
                    Sign Up
                </NavLink>
                <NavLink className="btn btn-outline-success" to='/login'>
                    Log In
                </NavLink>
            </nav>
        </header>
    ) : (
        <header>
            <nav>
                <NavLink className="btn btn-outline-success" to='/home' >
                    Home
                </NavLink>
                <NavLink className="btn btn-outline-success" onClick={() => localStorage.clear()} 
                    to='/'>
                        Sign Out
                </NavLink>
            </nav>
        </header>
    )
}

export default Nav