import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="index-link">
            <Link to="/">Index page</Link>
          </li>
          <li className="home-link">
            <Link to="/home">Home page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
