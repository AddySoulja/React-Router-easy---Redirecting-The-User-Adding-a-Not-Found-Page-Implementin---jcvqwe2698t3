import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Index page</li>
          </Link>
          <Link to="/home">
            <li>Home page</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
