import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/devsq1.svg";
import "../styles/Navigation.css";
import SideBar from "./SideBar";
import "../styles/SideBar.css";

function MainNavigation() {
  const [burger, setBurger] = React.useState(false);
  function switchBurger() {
    setBurger(!burger);
  }

  console.log("toogle " + burger);
  return (
    <div className="navigation tsp">
      <div className="stick-nav tsp">
        
        <div className="logo tsp">
          <img src={logo} alt=""></img>
        </div>
        <div onClick={switchBurger} className="nav-burger tsp">
          {!burger ? (
            <i id="hamburger" className="fa fa-bars tsp" aria-hidden="true"></i>
          ) : (
            <i className="fa-solid fa-xmark tsp"></i>
          )}
        </div>
        <nav className="navBar tsp">
          <ul className="navList tsp">
            <li>
              <Link className="ls tsp" to="/">
                <i className="fa fa-home" aria-hidden="true"></i>
                Home
              </Link>
            </li>
            <li>
              <Link className="ls tsp" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="ls tsp" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="ls tsp" to="/card">
                Creator
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <SideBar value={burger} />
    </div>
  );
}
export default MainNavigation;
