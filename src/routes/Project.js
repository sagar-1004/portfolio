import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjWork from '../components/ProjWork'
import HeroImg2 from '../components/HeroImg2'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent works" />
      <ProjWork />
      <Footer />
    </div>
  )
}

export default Project