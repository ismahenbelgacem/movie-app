import React from "react";
import { Rating } from "react-simple-star-rating";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div>
          <div className="movie">
            <img className="poster" src={movie.posterUrl} alt="movie" />
            <div className="movie-details">
              <div className="box">
                <h2 className="title">{movie.title}</h2>
                <Rating
                  className="rating"
                  iconscount={5}
                  initialValue={movie.rating}
                  readOnly={true}
                  size="20px"
                />
              </div>
              <div className="overview">
                <h1>overview</h1>
                {movie.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
