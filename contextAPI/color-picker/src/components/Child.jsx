import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div
    style={{
      border: `10px solid #fff`,
      margin: "15px",
      padding: "10px"
    }}
  >
    <GrandChild />
  </div>
  )
}

export default Child