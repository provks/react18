import { Component } from "react";
import "./moviecard.css";

// export default class MovieCard extends React.Component {
export default class MovieCard extends Component {	

  render() {
  // Destructure the state
  const {price, plot, poster, star, rating, isFavourite} = this.props.movie;
	const {handleFavourite, handleIncreaseStars} = this.props;
    return (
      <div className="main">
        <div className="movie-card">
          {/* left side of the movie card */}
          <div className="left">
            <img
              src={poster}
              alt="Poster"
            />
          </div>
          {/* Right side of the moviecard */}
          <div className="right">
            <div className="title">{this.props.movie.title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            {/* footer */}
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
								<img 
									className="star-btn" 
									src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" alt="Decreasing"
									/>
								&nbsp;
								<img className="stars" src="https://cdn-icons-png.flaticon.com/128/616/616490.png" alt="Stars" />
								&nbsp;
								<img 
									className="star-btn" 
									src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
									alt="Increasing" 
									// onClick={this.addStar.bind(this)}
									onClick={() => this.props.handleIncreaseStars(this.props.movie)}
								/>
								&nbsp;
								<span className="star-count">{star}</span>
							</div>
              {/* Conditional rendering for showing fav/unfav button */}
              
              {/* {(isFavourite) ? <button className="unfavourite-btn" onClick={this.handleFavourite}>Unfavourite</button> : <button className="favourite-btn" onClick={this.handleFavourite}>Favourite</button>
              } */}
              <button className={isFavourite ? "unfavourite-btn": "favourite-btn" } onClick={() => handleFavourite(this.props.movie)}>{}{isFavourite ? "Unfavourite": "Favourite"}</button>
              
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default MovieCard;
