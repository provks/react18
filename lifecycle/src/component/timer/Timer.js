import React, { Component } from 'react'

export default class Timer extends Component {

    constructor() {
        super();
        this.state = {
            time: 99
        }
        console.log("Constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("--------------------------")
        console.log("getDerivedStateFromProps");
        return null;
    }

    // ------ updating phase start ------
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
        console.log("--------------------------")
    }
    // ------ updating phase end ------

    componentDidMount() {
        console.log("componentDidMount");
        setInterval(() => {
            this.setState((prevState) => {
                return {time: prevState.time +1};
            });
        }, 1000)
    }

    render() {
        console.log("Render")
        return (
            <>
                <h1>Timer-App</h1>
                <h2>{new Date(this.state.time * 1000).toISOString().slice(11,19)}</h2>
            </>
        )
    }
}
