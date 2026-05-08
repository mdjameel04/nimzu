import { Button } from '@/components/ui/button'
import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/HeroSection'
import Stats from './Components/stats'
import About from './Components/about'
import Values from './Components/values'
import CTA from './Components/cta'
import Testimonials from './Components/testinomals'
import Products from './Components/product'

const HomePage = () => {
  return (
    <div>
  <Navbar/>
  <Herosection/>
  <Stats/>
  <About/>
  <Products/>
  <Values/>
  <Testimonials/>
  <CTA/>
    </div>
  )
}

export default HomePage