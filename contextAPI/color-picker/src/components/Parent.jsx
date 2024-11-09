import React from 'react'
import { useState } from 'react';
import Child from './Child';
import { colorContext } from '../context';

function Parent() {
    const [color, setColor] = useState('#000');
    console.log('color', color)
    // console.log('colorContext', colorContext)
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
      <colorContext.Provider value={color}>
        <Child />
      </colorContext.Provider>
    </>
  )
}

export default Parent