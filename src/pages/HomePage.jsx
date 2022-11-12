import React from 'react'
import Carousel from '../components/Carousel'
import Skills from '../components/Skills'

function HomePage() {
  return (
    <div>
      <Carousel />
      <div className="main">
      <p>Skills in Tech</p>
      </div>
      <Skills />
      
    </div>
  )
}

export default HomePage
