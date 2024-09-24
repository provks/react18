import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    this.props.mark = 100;
    return (
        <>
            <div>Student Name: {this.props.studentName}</div>
            <p>Student Marks: {this.props.mark}</p>
        </>
    )
  }
}
