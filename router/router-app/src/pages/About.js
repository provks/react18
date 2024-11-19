import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar/>
      <h1>About Page</h1>
      <h1><Link to="/">Go to Home page</Link></h1>
      <h1>
      <Link to="/products">Go to Products page</Link></h1>
    </>
  )
}

export default About