import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <div className="main">
    <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/clicky-game"><img src='./images/doo3.png' alt=""/><span className="doo">Click-a-Daisy</span></a>
      </li>
      <li className="score">
      <h4 className="">
					{props.message}
					</h4>
      </li>
    </ul>
    </nav>


      <h4 className="message">Score: {props.score} &nbsp;|&nbsp; Top Score: {props.topScore}</h4>

    </div>
  );
}

export default Nav;
