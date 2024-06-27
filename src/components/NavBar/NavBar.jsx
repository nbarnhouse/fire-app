import './NavBar.css';

export default function App() {
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <a href="#home">Home</a>
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
          <a href="#about">About</a>
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
          <a href="#cities">Cities Ranked</a>
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
          <a href="#resources">Resources</a>
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
          <a href="#community">Community</a>
        </li>
      </ul>
    </nav>
  );
}
