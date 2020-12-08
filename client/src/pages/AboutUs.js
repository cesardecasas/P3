import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
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
      <div className="carousel">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="picture of a love your life clipboard" />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt="picture of a clip with plant" />
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/5356424/pexels-photo-5356424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="picture of a planning sign with a pencil" />
    </div>
  </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
    </div>
    </div>

  )
}
