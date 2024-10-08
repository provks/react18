import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        // console.log("this.props.children", this.props.children)
        console.log("getDerivedStateFromError", error)
        console.log("getDerivedStateFromError", typeof error)
        //return the state
        return {
            hasError: true,
            error: error
            // error        // both key and value are same.

        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error in componentDidCatch", error)
        console.log("errorInfo in componentDidCatch", errorInfo)
    }


    render() {
        console.log("this.props.children", this.props.children)
        if (this.state.hasError) {
            return <div>Any FAll back UI/iii for  {this.props.children.type.name}</div>
        }
        return this.props.children
  }
}
