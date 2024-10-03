import { Component } from 'react'

export default class ComponentB extends Component {
    constructor() {
        super();
        this.state = {
            name: "Learning Lifecycle methods"
        }

        console.log("constructor method, ComponentB")
    }
    
    static getDerivedStateFromProps() {
        
        console.log("getDerivedStateFromProps method, ComponentB");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount method,ComponentB");
        // this.setState({
        //     name: "Varun"
        // })
    }

    render() {
        console.log("Render method,ComponentB")
        return (
            <h3>ComponentB: {this.state.name}</h3>
        )
    }
}
