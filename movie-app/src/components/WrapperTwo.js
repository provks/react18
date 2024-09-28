import React, { Component } from 'react'
import "./wrapperTwo.css"

export default class WrapperTwo extends Component {
  render() {
    return (
        <div className="wrapper">
        <div>
            <h1>This is my heading</h1>
        </div>
        <div>
            <button className='btn'>Click me</button>
        </div>
      </div>
    )
  }
}
