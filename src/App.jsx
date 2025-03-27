import { StrictMode, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import MovieListPage from "./pages/MovieListPage";
import WatchListPage from "./pages/WatchListPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [watchList, setWatchList] = useState({});
  return (
    <Router>
      <StrictMode>
          <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MovieListPage
                watchList={watchList}
                setWatchList={setWatchList}
              />
            }
          />
          <Route path="/details" element={<MovieDetails />} />
          <Route
            path="/watchlist"
            element={
              <WatchListPage
                watchList={watchList}
                setWatchList={setWatchList}
              />
            }
          />
          <Route path="*" element={<h2>Page not found!</h2>} />
        </Routes>
      </StrictMode>
    </Router>
  );
}

export default App;
