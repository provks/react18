import logo from './logo.svg';
import './App.css';
import GreetUserClass from './components/GreetUserClass';
import GreetUserFxn from './components/GreetUserFxn';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import useFetch from './components/useFetch';

function App() {
  // const [posts] = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div className="App">
      {/* <GreetUserClass/> */}
      {/* <GreetUserFxn/> */}
      <ComponentA/>
      {/* <ComponentB/> */}
      {/* {posts && posts.map((post) => {
          return <p key={post.id}>{post.title}</p>
      })}
      {posts && posts.length <= 0 && <h1>No Posts found!</h1>} */}

    </div>
  );
}

export default App;
