import React from 'react'
import GrandChild from './GrandChild'

function Child(props) {
  return (
    <div
    style={{
      border: `10px solid #fff`,
      margin: "15px",
      padding: "10px"
    }}
  >
    <GrandChild color={props.color} />
  </div>
  )
}

export default Child