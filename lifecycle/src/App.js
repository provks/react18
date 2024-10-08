import { Component } from "react";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ErrorBoundary from "./component/ErrorBoundary";

class App extends Component {

  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA/>
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB/>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
