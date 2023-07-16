import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkContent from '../components/WorkContent'

const Work = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="WORK/EXPERIENCE" text="Here's my experience working in an industrial project" />
      <WorkContent />
    <Footer />
    </div>
  )
}

export default Work