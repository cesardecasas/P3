/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'
import Carousel from '../components/Carousel'

export default () => {
  return (
    <div className='main'>
      <div className="hero flex-col">
        <div className="hero-message">
          <h1>Welcome to the Board!</h1>
          <div className="what-is-it"></div>
          <p>The Board is an easy-to-use work load organizer</p>
          </div>
        </div>
        <div className="intro">
          <p>Start living the life you want. Get Organized and start
            accomplishing your goals today!
          <p>Make Boards with to do lists, and divide the
          task into steps.</p>
        </p>
      </div>
      <div className="hero-action">
        <Link to="/signup">Get Started</Link>
      </div>

      <div className='a'>
        <Carousel/>
      </div>
</div>

  )
}
