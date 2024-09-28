import MovieList from './MovieList';
// import Navbar from './Navbar';
import NavbarModule from './NavbarModule';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavbarModule/>
      <MovieList/>
      {/* <MovieCard/> */}
    </div>
  );
}

export default App;
