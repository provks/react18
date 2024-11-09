import React from 'react'
import styles from '../styles/Navbar.module.css'
import { useContext } from 'react';
import { itemContext } from '../itemContext';

function Navbar() {
  const value = useContext(itemContext);
  console.log('value', value);
  return (
    <div className={styles.container}>
      <h1>Total : &#8377; {value.total}</h1>
      <h1>Items: 10</h1>
    </div>
  )
}

export default Navbar;