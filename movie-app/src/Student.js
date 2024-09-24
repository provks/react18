import React, { Component } from 'react'

// export default class Student extends Component {
//   render() {
//     // this.props.mark = 100;
//     console.log("this.props", this.props);
//     return (
//         <>
//             {/* <div>Student Name: {this.props.name}</div> */}
//             <div>Student Name: {this.props.studentName}</div>
//             <p>Student Marks: {this.props.mark}</p>
//         </>
//     )
//   }
// }

function Student(props) {
  return (
    <>
    <div>Student Name: : {props.name}</div>
    <p>Student Marks: : {props.mark}</p>
    </>
  )
}

export default Student