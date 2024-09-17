import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Varun from './App';
// import reportWebVitals from './reportWebVitals';

// import {a as b, c as cat, helloReact, arr, flag, obj} from "./App";
// console.log("a", b);
// console.log("c", cat);
// console.log("arr", arr);
// console.log("flag", flag);
// console.log("obj", obj);
// console.log("sayHello", helloReact());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Varun />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
