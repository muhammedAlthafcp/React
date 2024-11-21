import { URL_LOGO } from "../utils/constants";
import { useState } from "react";


const Header = () => {
  const [loignReact,SetloginReact] = useState("login")
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
          <button className="Login" onClick={()=>{
            SetloginReact("logout") 
          }}>{loignReact}</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header