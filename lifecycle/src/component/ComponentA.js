import { Component } from 'react'
import ComponentB from './ComponentB';

export default class ComponentA extends Component {
    constructor() {
        super();
        this.state = {
            name: "Learning Lifecycle methods"
        }

        console.log("constructor method, ComponentA")
    }
    
    static getDerivedStateFromProps() {
        
        console.log("getDerivedStateFromProps method, ComponentA");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount method,ComponentA");
        // this.setState({
        //     name: "Varun"
        // })
    }

    render() {
        console.log("Render method,ComponentA")
        return (
            <>
                <h1>ComponentA: {this.state.name}</h1>
                <ComponentB/>
            </>
        )
    }
}
