import React from 'react'


const Carousel = () =>{
    return(
    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
     <div className="carousel-inner">
       <div className="carousel-item active">
         <img src='https://housemydog.com/blog/wp-content/uploads/2017/01/1-2.jpg' className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item ">
       <img src='https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item ">
       <img src='https://images.pexels.com/photos/5356424/pexels-photo-5356424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className="d-block w-100" alt="..."/>
       </div>
     </div>
     <a className="carousel-control-prev" href="carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
   </div>
    )
   }
   
   export default Carousel