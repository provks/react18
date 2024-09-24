import { Component } from 'react';
import MovieCard from './Moviecard';
import Student from './Student';

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
					poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
					rating: 8.5,
					star: 2,
					isFavourite: false,
                },
                {
                    title: "Interstellar",
					plot: "plot of interstellar",
					price: 299,
					poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
					rating: 9,
					star: 4,
					isFavourite: false,
                },
                {
                    title: "John Wick",
					plot: "some plot of movie john wick!",
					price: 99,
					poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
					rating: 7,
					star: 3.5,
					isFavourite: false,
                }

            ]
			
		}
        this.studentData = [
            {
                name: "Chetak",
                marks: 90     
            },
            {
                name: "Saloni",
                marks: 91     
            }
        ]
	}

  render() {
    return (
        <>
            {/* <MovieCard 
                title={this.state.title}
                plot={this.state.plot}
                price={this.state.price}
                poster={this.state.poster}
                rating={this.state.rating}
                star={this.state.star}
                isFavourite={this.state.isFavourite}
            /> */}
			{/* {this.state.movies.map((movie) => {
				return <MovieCard movie={movie}/>

			})} */}

				<Student 
                    name={this.studentData[1].name}
					mark={99}
                />
            {/* {this.studentData.map((student) => {
                return <Student 
                    studentName={student.name}
                    mark={student.marks}
                />
            })} */}
            
        </>
    )
  }
}

Student.defaultProps = {
	mark: "NA",
	studentName: "Student Name"
}
