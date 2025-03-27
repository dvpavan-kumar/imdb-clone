import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>IMDB</h1>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Movies</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
