import { Component } from "react";

// export default class MovieCard extends React.Component {
export default class MovieCard extends Component {

	constructor() {
		super();
		// Creating the state object
		this.state = {
			title: "The Avengers!!!!",
			plot: "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
			price: 199,
			poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
			rating: 8.5,
			star: 2
		}
		// this.addStar = this.addStar.bind(this);
	}

	// to increase the stars
	// addStar() {
	// 	console.log("Added the star");
	// 	console.log("this.state:", this.state);	// error 
	// 	// console.log("this", this)
	// }
	
	// using arrow function instead of bind method
	addStar = () => {
		console.log("Before this.state:", this.state);
		console.log("Added the star");
		// this.state.star += 0.5;
		// const {star} = this.state;
		// 1st way of updating state using setState()
		this.setState({
			star: this.state.star+0.5,
		})

		// 2nd way of update satate using setState()
		// this.setState((prevState) => {
		// 	console.log("prevState", prevState)
		// 	return {
		// 		star: prevState.star + 0.5
		// 	}
		// })
		console.log("After this.state:", this.state);
		// console.log("this", this)
	}

  render() {
		// Destructure the state
		const {price, plot, poster, star, rating} = this.state;
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
            <div className="title">{this.state.title}</div>
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
									onClick={this.addStar}
								/>
								&nbsp;
								<span className="star-count">{star}</span>
							</div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default MovieCard;
