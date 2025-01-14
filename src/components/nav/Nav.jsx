import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="navContainer gutter">
      <div className="logo">
        <h1>GoQuest</h1>
      </div>
      <div>
        {" "}
        <div className="userProfile">
          <p>user</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
