import React from 'react'

function GrandChild(props) {
    const { color } = props; 
  return (
    <p style={{color}}>Some more text so that we can see the color change. Color Selected is: {color}</p>
  )
}

export default GrandChild