import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'


const Nav = (props)=>{



    return props.authenticated && props.currentUser  ? (
        <header >

            

            <nav className='navbar navbar-light'>

            <NavLink className="btn btn-outline-primary" to='/home' >
                    Home
                </NavLink >

                <NavLink className="btn btn-outline-primary" exact to='/myboards'>
                    My Boards
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/new-board'>
                    Create board
                </NavLink>

                <NavLink className="btn btn-outline-primary" onClick={() => {
                    localStorage.clear()
                    props.setAuthenticated(false)
                }} 
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