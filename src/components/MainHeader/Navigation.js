import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../Store/auto-context";

// Instead of using Authcontext.Consumer we user useContext() hook , caz with Consumer we have to return function .
// using context this look more cleaner and looks more readable .

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
