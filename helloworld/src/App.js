import logo from './logo.svg';
import './App.css';

//  2 ways to export
// 1. Named Export
// 2. Default Export

// 1. NAMED EXPORT (individual)
 let a = 10;
 let c = 30;
export  let flag = false;
 const arr = [1,2,3,4,5]
 const obj = {name: "React", age: 11}
 function sayHelloReact() {
  console.log("Hello React!")
}
// 1. NAMED EXPORT (at bottom export OR all at once export)
// export {a, c, arr, obj, sayHelloReact as helloReact}
// export default a;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Coding Ninjas!
        </a>
      </header>
    </div>
  );
}

export default App;
