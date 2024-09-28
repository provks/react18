import MovieList from './MovieList';
// import Navbar from './Navbar';
import NavbarModule from './NavbarModule';

import { Component } from 'react'
import {movies} from "./moviesData"

export default class App extends Component {
  constructor() {
    super();
    // Creating the state object
    this.state = {
      cartCount: 0,
      movies: movies,
    };
  };

	// handle increase star 
	addStar = (movie) => {
		const { movies } = this.state;
		const movieIndex = movies.indexOf(movie);
		if (movies[movieIndex].star < 5) {
			movies[movieIndex].star += 0.5
			this.setState({
				// star: this.state.star+0.5,
				movies: movies
			})
		}
		
		console.log("After state update star:", movies[movieIndex].star);
	}


	// handle decrease star 
	decreaseStar = (movie) => {
		const { movies } = this.state;
		const movieIndex = movies.indexOf(movie);
		if (movies[movieIndex].star > 0) {
			movies[movieIndex].star -= 0.5
			this.setState({
				movies
			})
		}
		
		console.log("After state update star:", movies[movieIndex].star);
	}

	// handle favourite movie
	handleFavourite = (movie) => {
		const { movies } = this.state;
		const movieIndex = movies.indexOf(movie);
		movies[movieIndex].isFavourite = !movies[movieIndex].isFavourite;
		this.setState({
			// movies:  movies
			// since key and value are same
			movies
		}, () => console.log("movies[movieIndex].isFavourite", movies[movieIndex].isFavourite))
	}

  // handle add movie to cart
	handleToggleCart = (movie) => {
		let { movies, cartCount } = this.state;
		const movieIndex = movies.indexOf(movie);
		movies[movieIndex].hasAddedToCart = !movies[movieIndex].hasAddedToCart;

    if (movies[movieIndex].hasAddedToCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

		this.setState({
			movies,
      cartCount,
		}, () => console.log("movies[movieIndex].isFavourite", movies[movieIndex].hasAddedToCart, cartCount))
	}
  render() {
    return (
      <>
        <NavbarModule cartCount={this.state.cartCount}/>
        <MovieList
          movies={movies}
          onIncreaseStars={this.addStar}
          onDecreaseStars={this.decreaseStar}
          onClickFavourite={this.handleFavourite}
          onClickAddToCart={this.handleToggleCart}
        />
      </>
    )
  }
}
