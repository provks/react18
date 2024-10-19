import React, { Component } from "react";

// class GreetUserClass extends React.Component {
export default class GreetUserClass extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "Varun",
            lastName: "Sharma"
        }
    }

    handleFirstName = (e) => {
        console.log(e.target.value);
        this.setState({
            firstName: e.target.value
        })
    }
    
    handleLastName = (e) => {
        console.log(e.target.value);
        this.setState({
            lastName: e.target.value
        })
    }

    // Mounting Phase
    componentDidMount() {
        console.log("document.title", document.title);
        document.title = this.state.firstName + " " +  this.state.lastName;
    }
    
    //  Updading Phase
    componentDidUpdate() {
        document.title = this.state.firstName + " " +  this.state.lastName;
    }
    
    render() {
        return (
            <>
                <div style={{marginTop: "10vh"}}>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstname" onChange={this.handleFirstName} />
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastname" onChange={this.handleLastName} />
                </div>
                <h1>Hey! {this.state.firstName} {this.state.lastName}</h1>
            </>
        );
    }
}
