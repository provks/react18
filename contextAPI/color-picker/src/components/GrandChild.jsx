import React, { useContext } from 'react'
import { colorContext } from '../context';

function GrandChild() {
    const color = useContext(colorContext);
    console.log('color', color)
    // const { color } = props; 
  return (
    <p style={{color}}>Some more text so that we can see the color change. Color Selected is: {color}</p>
  )
}

export default GrandChild