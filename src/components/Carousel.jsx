import React from 'react'

function Carousel() {
  return (
    <div>
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" height="100px">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?cs=srgb&dl=pexels-olia-danilevich-4974912.jpg&fm=jpg&_gl=1*1jruixl*_ga*ODQ2MTUxMjM1LjE2NjQ5ODQxNTI.*_ga_8JE65Q40S6*MTY2ODIyNTI1Ni43LjEuMTY2ODIyNTc1My4wLjAuMA.." className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Frontend Development</h5>
        <p>Awesome</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?cs=srgb&dl=pexels-thisisengineering-3861967.jpg&fm=jpg&_gl=1*hi25d7*_ga*ODQ2MTUxMjM1LjE2NjQ5ODQxNTI.*_ga_8JE65Q40S6*MTY2ODIyNTI1Ni43LjEuMTY2ODIyNjA5MS4wLjAuMA.." className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Backend Development</h5>
        <p>Wonderful</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batini%C4%87-4164418.jpg&fm=jpg&_gl=1*1wjmom*_ga*ODQ2MTUxMjM1LjE2NjQ5ODQxNTI.*_ga_8JE65Q40S6*MTY2ODIyNTI1Ni43LjEuMTY2ODIyNTg0OS4wLjAuMA.." className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Fullstack Web Development</h5>
        <p>Best part</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel