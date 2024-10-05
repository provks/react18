import { Component } from "react";
import Timer from "./component/timer/Timer";
// import ComponentA from "./component/ComponentA";

class App extends Component {
  render() {
    return (
      // <ComponentA/>
      <Timer data={100}/>
    );
  }
}

export default App;
