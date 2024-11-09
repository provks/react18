import React from 'react'
import { useState } from 'react';
import Child from './Child';

function Parent() {
    const [color, setColor] = useState('#000');
    console.log('color', color)
  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <Child color={color} />
    </>
  )
}

export default Parent