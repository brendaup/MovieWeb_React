import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/listMovies" className="nav-link">
            Popular Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/billBoardsList" className="nav-link">
            BillBoard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
