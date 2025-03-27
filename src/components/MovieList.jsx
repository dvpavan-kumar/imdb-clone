import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, watchList, setWatchList }) => {
  return (
    <div className="movie-list">
      {movies?.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          watchList={watchList}
          setWatchList={setWatchList}
        />
      ))}
    </div>
  );
};

export default MovieList;
