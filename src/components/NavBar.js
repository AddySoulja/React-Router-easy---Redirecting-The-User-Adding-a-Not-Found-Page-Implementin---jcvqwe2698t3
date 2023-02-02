import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"  className="index-link">Index page</Link>
          </li>
          <li >
            <Link to="/home" className="home-link">Home page</Link>
          </li>
        </ul>
      </nav>
    </div>
    // <nav>
    //   <ul>
    //     <li >
    //       <Link to="/home" className="home-link">Home Page</Link>
    //     </li>
    //     <li>
    //       <Link to="/" className="index-link">Index Page</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};
