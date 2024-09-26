import React, { Component } from 'react'
import "./wrapperOne.css"

export default class WrapperOne extends Component {
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
