import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="hero flex-col">
      <div className="hero-message">
        <h1>About Us</h1>
        <p>The Board is an easy-to-use work load organizer!</p>
      </div>
      <div className= "intro">
        <p>We made this project to help users get organized. 
          You can make Boards with to do lists, and divide the
          task into steps.
        </p>
      </div>
      <div className="hero-action">
        <Link to="/register">Get Started</Link> 
      </div>
    </div>
  )
}
