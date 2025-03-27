import React, { useContext, useEffect, useState } from "react";
import { watchListContext } from "../context/watchListProvider";

const genreIds = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const WatchListPage = () => {
  const { watchList } = useContext(watchListContext);
  const [list, setList] = useState([]);

  const handleSearch = (e) => {
    const searchterm = e.target.value.toLowerCase();
    const filteredList = Object.values(watchList).filter((movie) =>
      movie.title.toLowerCase().includes(searchterm)
    );
    setList(filteredList);
  };

  const handleSort = (type) => {
    const SortedList = Object.values(watchList).sort((a, b) =>
      type === "DESC"
        ? a.popularity - b.popularity
        : b.popularity - a.popularity
    );
    setList(SortedList);
  };

  const selectedGenres = () => {
    let genreList = [];
    Object.values(watchList).forEach((movie) => {
      genreList = genreList.concat(movie.genre_ids);
    });
    return [...new Set(genreList)];
  };

  const handleGenreSelection = (id) => {
    const newList = Object.values(watchList).filter((movie) =>
      id ? movie.genre_ids.includes(id) : true
    );
    setList(newList);
  };

  useEffect(() => {
    setList(Object.values(watchList));
  }, [watchList]);
  return (
    <div>
      <h3>WatchList</h3>
      <div className="container">
        <div className="left-section">
          <div className="genre-list">
            {selectedGenres().length > 0 && (
              <div className="genre" onClick={() => handleGenreSelection("")}>
                All
              </div>
            )}
            {selectedGenres().map((id) => (
              <div
                key={id}
                className="genre"
                onClick={() => handleGenreSelection(id)}
              >
                {genreIds[id]}
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <input type="text" placeholder="search" onChange={handleSearch} />
          <table border={2}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Poster</th>
                <th>Movie</th>
                <th>Genres</th>
                <th>
                  Popularity
                  <span onClick={() => handleSort("DESC")}>^</span>
                  <span onClick={() => handleSort("ASC")}>v</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={`100px`}
                    />
                  </td>
                  <td>{movie.title}</td>
                  <td>
                    {movie.genre_ids.map((id) => genreIds[id]).join(", ")}
                  </td>
                  <td>{movie.popularity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WatchListPage;
