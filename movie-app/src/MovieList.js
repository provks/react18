import { Component } from "react";
import MovieCard from "./Moviecard";
import Student from "./Student";

export default class MovieList extends Component {
  constructor() {
    super();
    // Creating the state object
    this.state = {
      movies: [
        {
					id: 1,
          title: "The Avengers!!!!",
          plot: "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
          price: 199,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 8.5,
          star: 2,
          isFavourite: false,
          hasAddedToCart: false
        },
        {
					id: 2,
          title: "Interstellar",
          plot: "plot of interstellar",
          price: 299,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 9,
          star: 4,
          isFavourite: false,
          hasAddedToCart: true
        },
        {
					id: 3,
          title: "John Wick",
          plot: "some plot of movie john wick!",
          price: 99,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 7,
          star: 3.5,
          isFavourite: false,
          hasAddedToCart: false
        },
      ],
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
		const { movies } = this.state;
		const movieIndex = movies.indexOf(movie);
		movies[movieIndex].hasAddedToCart = !movies[movieIndex].hasAddedToCart;
		this.setState({
			movies
		}, () => console.log("movies[movieIndex].isFavourite", movies[movieIndex].hasAddedToCart))
	}

  render() {
    return (
      <>
        {this.state.movies.map((movie) => {
          return <MovieCard 
						key = {movie.id}
						movie={movie}
						handleIncreaseStars = {this.addStar}
						handleDecreaseStars = {this.decreaseStar}
						handleFavourite={this.handleFavourite}
            handleCart={this.handleToggleCart}
					/>;
        })}
				{/* <Student name="coding ninjas"/> */}
      </>
    );
  }
}

// Student.defaultProps = {
// 	mark: "NA",
// 	studentName: "Student Name",
// }
