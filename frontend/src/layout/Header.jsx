import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
function Header() {
  const [username, setUsername] = useState("Max");
  return (
    <>
      <header className="flex items-center justify-between bg-gradient-to-r from-sidebar-apurwa1 to-sidebar-apurwa2 px-4 py-3 font-pizza uppercase shadow-header sm:px-6">
        <Link
          to="https://www.unc.edu/"
          target="_blank"
          className="duration-250 relative z-10 inline-block tracking-wider transition-all ease-in-out"
        >
          <span className="link-animated relative z-10 inline-block">
            UNC Chapel Hill
          </span>
        </Link>
        <Link to="/profile" className="tracking-wider">
          Welcome, {username}!
        </Link>
      </header>
    </>
  );
}

export default Header;
