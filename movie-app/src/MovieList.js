import { Component } from "react";
import MovieCard from "./Moviecard";
import Student from "./Student";

export default class MovieList extends Component {

  render() {
    const {
      onIncreaseStars,
      onDecreaseStars,
      onClickFavourite,
      onClickAddToCart,
    } = this.props;
    return (
      <>
        {this.props.movies.map((movie) => {
          return <MovieCard 
						key = {movie.id}
						movie={movie}
						handleIncreaseStars = {onIncreaseStars}
						handleDecreaseStars = {onDecreaseStars}
						handleFavourite={onClickFavourite}
            handleCart={onClickAddToCart}
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
