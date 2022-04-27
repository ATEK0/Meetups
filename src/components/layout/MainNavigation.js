import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">React Meetups</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetups</Link>
          </li>
          <li>
            <Link to="/new-meets">NewMeetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
