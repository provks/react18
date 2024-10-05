import { Component } from "react";
import Timer from "./component/timer/Timer";
// import ComponentA from "./component/ComponentA";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: true,
      isTimerOn: false
    }
  }

  handleTimerMount = () => {
    this.setState({
      isMounted: !this.state.isMounted,
    })
    
  }
  
  handleToggleTimer = () => {
    this.setState({
      isTimerOn: !this.state.isTimerOn
    })
  }

  render() {
    return (
      // <ComponentA/>
      <>
        <button onClick={this.handleTimerMount}>{this.state.isMounted ? "Hide Timer" : "Show Timer"} </button>
        {this.state.isMounted ? <Timer isTimerOn={this.state.isTimerOn}/> :  null}
        <button onClick={this.handleToggleTimer}> {this.state.isTimerOn ? "Stop" : "Start"} </button>
        
      </>
    );
  }
}

export default App;
