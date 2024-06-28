import { Link } from 'react-router-dom';
import './NavBar.css';

export default function App() {
  return (
    <nav className="navbar dark-shade">
      <ul className="nav-links">
        <li>
          <Link to="/ ">Home</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </li>
        <li>
          <Link to="/cities">Cities Ranked</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
}
