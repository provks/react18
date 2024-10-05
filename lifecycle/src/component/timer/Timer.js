import React, { Component } from 'react'

export default class Timer extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("Constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    // ------ updating phase ------
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }
    // ------ updating phase ------

    componentDidMount() {
        console.log("componentDidMount");
    }

    // increase count handler
    handleInc = () => {
        this.setState((prevState) => {
            return {count: prevState.count+1}
        })
    }

    render() {
        console.log("Render")
        return (
            // <h1>Timer</h1>
            <>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleInc}>Increase</button>
            </>


        )
    }
}
