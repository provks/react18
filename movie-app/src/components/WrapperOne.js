import React, { Component } from 'react'
import "./wrapperOne.css"
import updatedStyle from "./wrapperOne.module.css"
import styled from  "styled-components";

const Button = styled.button`
    color: white;
    padding: 10px;
    height: 40px;
    width: 100px;
    border-radius: 10%;
    background: red;
    `;

export default class WrapperOne extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
            <h1>This is my heading</h1>
        </div>
        <div>
            {/* <button className={updatedStyle.btn}>Click me</button> */}
            <Button>Click me</Button>
        </div>
      </div>
    )
  }
}
