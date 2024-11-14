import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../../utilities/auth";

import styles from "./NavBar.module.scss";

export default function NavBar({ setUser, user }) {
  const navigate = useNavigate();

  function handleSignOut() {
    removeToken();
    setUser(null);
    navigate("/");
  }

  return (
    <nav className={styles.container}>
      {user ? (
        <ul>
          <Link to="/">
            <h1>REPOTTED.</h1>
          </Link>
          <li>
            <Link to="/rooms/">Rooms</Link>
          </li>
          <li>
            <Link to="/plants/">Plants</Link>
          </li>
          <li>
            <Link to="" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <Link to="/">
            <h1>REPOTTED.</h1>
          </Link>
          <li>
            <Link to="/signup/">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin/">Sign In</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
