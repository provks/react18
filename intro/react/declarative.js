// console.log("test");
const rootDiv = document.getElementById("root");
// LEGACY
console.log(rootDiv);

// const reactParagraph = React.createElement('p',{ className: 'text', id: "this-is-id" },'Welcome to your first React session');
// const reactHeading = React.createElement('h1',{ className: 'heading' },'Hello React');
// const reactBtn = React.createElement('button',{ className: 'btn' },'Learn more..');
// const containerDiv = React.createElement('div',{ className: 'container' },'', reactHeading, reactParagraph, reactBtn);
// console.log(reactHeading);  // this element is not DOM node/element, its an object created by react
// ReactDOM.createRoot(rootDiv).render(containerDiv);

const content = <div>
<h1 className="heading">Hello React</h1>
<p className="text">Welcome to your first React session!</p>
<button className="btn">Learn more..</button>
</div>;

ReactDOM.createRoot(rootDiv).render(content);
