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
        console.log("shouldComponentUdate");
        console.log("shouldComponentUdate: nextProps", nextProps);
        console.log("shouldComponentUdate: nextState", nextState);
        console.log("this.state.time", this.state.time);    // last
        return nextProps.isTimerOn !== this.props.isTimerOn || nextState.time % 5 === 0;
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return 5;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        // console.log("componentDidUpdate: prevProps", prevProps)
        // console.log("componentDidUpdate: prevState", prevState)
        // console.log("componentDidUpdate: snapshot", snapshot)
        console.log("--------------------------");
        if (prevProps.isTimerOn !== this.props.isTimerOn) {
            if (this.props.isTimerOn) {
                this.intervalId = setInterval(() => {
                    this.setState((prevState) => {
                        return {time: prevState.time +1};
                    });
                }, 500)
            } else {
                clearInterval(this.intervalId);
            }

        }

        
    }
    // ------ updating phase end ------

    componentDidMount() {
        console.log("componentDidMount");
    }
    
    // UnMounting phase
    componentWillUnmount() {
        console.log("componentWillUnmount");
        // if (this.state.time === 5) {
            clearInterval(this.intervalId);
        // }
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
