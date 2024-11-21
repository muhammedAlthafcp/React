import { URL_LOGO } from "../utils/constants";


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={ URL_LOGO }
          alt="Header Logo"
          className="logo"
        />
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
          <button>Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header