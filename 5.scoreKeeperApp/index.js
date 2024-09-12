// Intialize variables
let score = 0;
let wicket = 0;
let ballWiseRuns = [];

// const addTwo = () => {
    //     score += 2;
    //     console.log("Hello from index.js", score);
    //     root.render(<App/>);
    // }
    // const addThree = () => {
    //     score += 3;
    //     console.log("Hello from index.js", score);
    //     root.render(<App/>);
    // }
// Using single function using arg for following DRY approach
const addScore = (num) => {
    if (wicket < 10) {
        score += num;
        console.log("Hello from index.js", score);
        ballWiseRuns.push(num)
        console.log("Arr:", ballWiseRuns);
        root.render(<App/>);
    }
}

const addWicket = () => {
    // wickets can't be more than 10
    if (wicket < 10) {
        wicket += 1;
        console.log("wicket:", wicket);
        ballWiseRuns.push("W");
        console.log("Arr:", ballWiseRuns)
        root.render(<App/>);
    }
}

// App component
function App() {
    return <>
        <h1>Score Keeper App</h1>
        <h2>Score: {score}/{wicket}</h2>
        <Buttons/>
        <hr></hr>
        <BallWiseOutput/>
    </>
}
// Button Component
const Buttons = () => <>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={() => addWicket()}>Wicket</button>
</>


// BallWiseOutput component
const BallWiseOutput = () => (<div>
    {ballWiseRuns.map((elem, i) => {
        return <React.Fragment key={i}>
            {(i%6 === 0) ? <br/> : null}
            <span key={i}>{elem === 0 ? <strong>.</strong> : elem} &ensp;</span>
        </React.Fragment>
    })}
</div>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);