/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'
// import Carousel from '../components/Carousel'
import logo from '../helpers/PThreeLogo.png'

export default (props) => {
  const getStarted = () => {
    props.history.push('/signup')
  }

  return (
    <div className='main-container'>
        <div className="intro-container">
          <div className="hero-message">
            <h1>Welcome to the Board!<img className='logo-image' src={logo} /> </h1>
          </div> 
          <div className='text-container'>
           <strong><p>The Board is an easy-to-use work load organizer.</p></strong>
            <br />
            Start living the life you want. Get Organized and start
            accomplishing your goals today!<br />
            Make Boards with to do lists, and divide the task into steps.
          </div>
        </div>

      <div className="get-started-link-container">
        <button onClick={getStarted}>Get Started</button>
      </div>

      <div className='image-bottom-container'>
        {/* <Carousel/> */}
        <img className='image-bottom' src='https://manifesto.co.uk/wp-content/uploads/2014/10/scrum-task-board.png' />
        <img className='image-bottom' src='https://www.brainspores.com/wp-content/uploads/2014/07/task-management-tool.jpg' />
        <img className='image-bottom' src='https://t2informatik.de/en/wp-content/uploads/sites/2/2019/08/taskboard-smartpedia.jpg' />
      </div>
    </div>

  )
}
