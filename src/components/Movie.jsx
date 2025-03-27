import { useContext } from "react";
import { watchListContext } from "../context/watchListProvider";

const Movie = ({ movie }) => {
  const { watchList, setWatchList } = useContext(watchListContext);

  const handleWatchList = () => {
    setWatchList({ ...watchList, [movie.id]: movie });
  };

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <button onClick={handleWatchList}>
          {watchList[movie.id] ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default Movie;
