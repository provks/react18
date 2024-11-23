import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h3>
          {/* <a href="/">Home</a> */}
          <Link to="/root">Home</Link>
          {/* Home */}
        </h3>
        <h3>
          {/* <a href="/about">About</a> */}
          <Link to="about">About</Link>
          {/* About */}
        </h3>
        <h3>
        {/* <a href="/products">Products</a> */}
        <Link to="products">Products</Link>
        {/* Products */}
        </h3>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar