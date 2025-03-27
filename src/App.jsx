import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import MovieListPage from "./pages/MovieListPage";
import WatchListPage from "./pages/WatchListPage";
import Header from "./components/Header";
import "./App.css";
import WatchListProvider from "./context/watchListProvider";

function App() {
  return (
    <Router>
      <WatchListProvider>
        <StrictMode>
          <Header />
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/details" element={<MovieDetails />} />
            <Route path="/watchlist" element={<WatchListPage />} />
            <Route path="*" element={<h2>Page not found!</h2>} />
          </Routes>
        </StrictMode>
      </WatchListProvider>
    </Router>
  );
}

export default App;
