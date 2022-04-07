import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <nav>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <span className="text-3xl font-bold">Logo</span>
        </Link>
        <button onClick={() => setDarkTheme((prev) => !prev)}>
          {darkTheme ? "dark" : "light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
