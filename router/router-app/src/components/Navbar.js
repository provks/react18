import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom';
const user = {
  id: 21,
  name: "varun",
  email: 'varun.gmail.com',
}

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h3>
          {/* <a href="/">Home</a> */}
          <NavLink style={({isActive}) => (isActive ? {color: "red", border: "1px solid black"} : undefined )} to="/">Home</NavLink>
          {/* Home */}
        </h3>
        <h3>
          {/* <a href="/about">About</a> */}
          <NavLink 
            style={({isActive}) => (isActive ? {color: "red", border: "1px solid black"} : undefined )}
            to="about"
          >About</NavLink>
          {/* About */}
        </h3>
        <h3>
          {/* <a href="/products">Products</a> */}
          <NavLink 
            style={({isActive}) => (isActive ? {color: "red", border: "1px solid black"} : undefined )}
            to="products"
          >Products</NavLink>
          {/* Products */}
        </h3>
      </div>
      <Outlet context={user} />
    </>
  );
}

export default Navbar