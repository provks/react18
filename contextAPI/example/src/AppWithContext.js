
import './App.css';
import {useContext, useState} from 'react';
import {countContext} from './context';

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
    <h2>This is my app</h2>
    <button
      onClick={() => setCount(count+1)}
    >Increase Count</button>
    {/* Step-2: Provide context */}
    <countContext.Provider value={count}>
      <Comp1></Comp1>
    </countContext.Provider>
    </>

  );
}

function Comp1() {
  // console.log('props', props);
  // const { count } = props;
  // console.log('count', count);
  return (
    <>
    <h2>This is Comp1</h2>
    <Comp2></Comp2>
    
    </>

  );
}

function Comp2() {
  return (
    <>
    <h2>Comp2</h2>
    <Comp3></Comp3>
    
    </>

  );
}
function Comp3() {
  return (
    <>
    <h2>Comp3</h2>
    <Comp4></Comp4>
    
    </>

  );
}
function Comp4() {
  return (
    <>
    <h2>Comp4</h2>
    <Comp5></Comp5>
    
    </>

  );
}
function Comp5() {
  const countValue = useContext(countContext);  // using useContext hook
  console.log('countValue', countValue)
  return (
    <>
    <h2>Comp5</h2>
    {/* <p>Count is: {countValue}</p> */}
    {/* Using context.Consumer */}
    <countContext.Consumer>     
        {(value) => (<p>Count is: {countValue}</p>)}
    </countContext.Consumer>
    </>

  );
}

export default App;
