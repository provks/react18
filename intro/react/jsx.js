
// console.log("This is from jsx.js");

const rootDiv = document.getElementById("root");
// LEGACY
console.log(rootDiv);

// const reactParagraph = React.createElement('p',{ className: 'text', id: "this-is-id" },'Welcome to your first React session');
// const reactHeading = React.createElement('h1',{ className: 'heading' },'Hello React');
// const reactBtn = React.createElement('button',{ className: 'btn' },'Learn more..');
// const containerDiv = React.createElement('div',{ className: 'container' },'', reactHeading, reactParagraph, reactBtn);
// console.log(reactHeading);  // this element is not DOM node/element, its an object created by react
// ReactDOM.createRoot(rootDiv).render(containerDiv);

// const content = <div>
// <h1 className="heading">Hello React</h1>
// <p className="text">Welcome to your first React session!</p>
// <button className="btn">Learn more..</button>
// </div>;
const course = "React Course";

const jsxContent = <>
        <h1>Hello {course}</h1>
        <p>This is the ssecond React Session</p>
    </>

// React Component
function App() {
    return  <>
                <h1>Hello {course}</h1>
                <p>This is the ssecond React Session</p>
            </>
}

// Components with arrow functions
const Name = () => <h5>Coding Ninjas</h5>

// ReactDOM.createRoot(rootDiv).render(App());
ReactDOM.createRoot(rootDiv).render(<><App/> <Name/></>);        // check in component tab (react developer tools) in dev tools