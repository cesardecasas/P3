import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'

export default () => {
  return (
    <div>
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
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' className="d-block w-100" alt="clipboard picture"/>
    </div>
    <div className="carousel-item">
      <img src= "https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="picture of a clip with plant" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/5356424/pexels-photo-5356424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="picture of a planning sign with a pencil" className="d-block w-100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>

  )
}
