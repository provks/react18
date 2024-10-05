import React, { Component } from 'react'

export default class Timer extends Component {

    constructor() {
        super();
        this.state = {
            time: 0
        }
        this.intervalId = null;
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
        return 5;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log("componentDidUpdate: prevProps", prevProps)
        console.log("componentDidUpdate: prevState", prevState)
        console.log("componentDidUpdate: snapshot", snapshot)
        console.log("--------------------------");
        if (this.state.time == 5) {
            clearInterval(this.intervalId);
        }
    }
    // ------ updating phase end ------

    componentDidMount() {
        console.log("componentDidMount");
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {time: prevState.time +1};
            });
        }, 5000)
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
