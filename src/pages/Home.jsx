import React from 'react'
import Hero from '../components/Hero'
import Digital from '../components/Digital'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial'
import Development from '../components/Development'
import Faq from '../components/Faq'
import Company from '../components/Company'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Digital/>
      <Services/>
     
      <Development/>
       <Carousel/>
      <Company/>
      <Faq/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Home