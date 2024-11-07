
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

function Comp1({count}) {
  // console.log('props', props);
  // const { count } = props;
  // console.log('count', count);
  return (
    <>
    <h2>This is Comp1</h2>
    <Comp2 count={count}></Comp2>
    
    </>

  );
}

function Comp2({count}) {
  return (
    <>
    <h2>Comp2</h2>
    <Comp3 count={count}></Comp3>
    
    </>

  );
}
function Comp3({count}) {
  return (
    <>
    <h2>Comp3</h2>
    <Comp4 count={count}></Comp4>
    
    </>

  );
}
function Comp4({count}) {
  return (
    <>
    <h2>Comp4</h2>
    <Comp5 count={count}></Comp5>
    
    </>

  );
}
function Comp5() {
  const countValue = useContext(countContext);
  console.log('countValue', countValue)
  return (
    <>
    <h2>Comp5</h2>
    <p>Count is: {countValue}</p>
    </>

  );
}

export default App;
