import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component {
  constructor() {
    super();
    // Creating the state object
    this.state = {
      movies: [
        {
          title: "The Avengers!!!!",
          plot: "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
          price: 199,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 8.5,
          star: 2,
          isFavourite: false,
        },
        {
          title: "Interstellar",
          plot: "plot of interstellar",
          price: 299,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 9,
          star: 4,
          isFavourite: false,
        },
        {
          title: "John Wick",
          plot: "some plot of movie john wick!",
          price: 99,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 7,
          star: 3.5,
          isFavourite: false,
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

  render() {
    return (
      <>
        {this.state.movies.map((movie) => {
          return <MovieCard 
						movie={movie}
						handleIncreaseStars = {this.addStar}
						handleFavourite={this.handleFavourite}
					/>;
        })}
      </>
    );
  }
}

// Student.defaultProps = {
// 	mark: "NA",
// 	studentName: "Student Name",
// }
