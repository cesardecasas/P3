import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'


const Nav = (authenticated, currentUser)=>{


    return authenticated && currentUser ? (
        <header >

            

            <nav className='navbar navbar-light'>

            <NavLink className="btn btn-outline-primary" to='/home' >
                    Home
                </NavLink>
                <NavLink className="btn btn-outline-primary" onClick={() => localStorage.clear()} 
                    exact to='/'>
                        Sign Out
                </NavLink>
              

                

            </nav>
        </header>
    ) : (
        <header>

            <nav className='navbar navbar-light'>
                <NavLink className="btn btn-outline-primary" exact to='/signup'>

                    Sign Up
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/login'>
                    Log In
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/' >
                     About Us
                </NavLink>
                

              

            </nav>
        </header>
    )
}

export default Nav