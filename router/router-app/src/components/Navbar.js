import React from 'react'

function Navbar({setPage}) {
  return (
    <div className="navbar">
      <h3 onClick={() => setPage('home')}>Home</h3>
      <h3 onClick={() => setPage('about')}>About</h3>
      <h3 onClick={() => setPage('product')}>Products</h3>
    </div>
  );
}

export default Navbar