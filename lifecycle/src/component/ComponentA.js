import { Component } from 'react'
import ComponentB from './ComponentB';

export default class ComponentA extends Component {
    constructor() {
        super();
        this.state = {
            name: "Learning Lifecycle methods",
            users: []
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
        // using fetch for side-effect
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({users: json}, () => {console.log(this.state.users)}));
        // .then(json => console.log(json));
    }

    render() {
        console.log(this.state.users)
        console.log("Render method,ComponentA")
        return (
            <>
                <h1>ComponentA: {this.state.name}</h1>
                <ol>
                    {this.state.users.map(user => <li>{user.username}</li>)}
                </ol>
                <ComponentB/>
            </>
        )
    }
}
