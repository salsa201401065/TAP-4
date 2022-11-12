import React from 'react'

function Skills() {
  return (
    <>
   <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Frontend Web</h5>
        <p className="card-text">Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://images.pexels.com/photos/7988113/pexels-photo-7988113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Backend Web</h5>
        <p className="card-text">Back-end Web development is working on server-side software, ensure the website performs correctly, focusing on databases, back-end logic, API, architecture, and servers. </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">UI/UX Design</h5>
        <p className="card-text">The design of user interfaces for machines and software, such as computers, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.</p>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Skills