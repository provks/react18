import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function Home() {
  const user = useOutletContext();
  console.log('user', user)
  return (
    <>
      {/* <Navbar/> */}
      <h1>Home Page for {user.name}</h1>
      <Link to="/about">Go to About page</Link>
      <Link to="/products">Go to Products page</Link>
    </>
  )
}

export default Home