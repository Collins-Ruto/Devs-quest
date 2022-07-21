import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/devsq1.svg";
import logo2 from "../../images/devsq2.png";
import "../../styles/Home/HomeNav.css";
import SideBar from "../../components/SideBar";
import "../../styles/Home/HomeSide.css";
import {Dropdown} from "flowbite-react";

function MainNavigation() {
  const [burger, setBurger] = React.useState(false);
  function switchBurger() {
    setBurger(!burger);
  }
  return (
    <div className="navigation tsp">
      <div className="homeStick-nav">
        <div className="nav-info tsp">
          <div onClick={switchBurger} className="nav-burger tsp">
            {!burger ? (
              <i
                id="hamburger"
                className="fa fa-bars tsp"
                aria-hidden="true"
              ></i>
            ) : (
              <i className="fa-solid fa-xmark tsp"></i>
            )}
          </div>
          <div className="logo tsp">
            <img src={logo} alt=""></img>
          </div>
          <div className="logo2 tsp">
            <img src={logo2} alt=""></img>
          </div>
          <div className="nav-items tsp">
            <ul className="tsp">
              <li>
                <Link className="link tsp" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="link tsp" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link tsp" to="/collabs">
                  Collabs
                </Link>
              </li>
              <li>
                <Dropdown label="More" className="tsp border-0 text-white">
                  <Dropdown.Item>
                    <Link to="">GitHub</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="">Hackathons</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="">Games</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="">Settings</Link>
                  </Dropdown.Item>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-box tsp">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="search-in"
          />
          <i className="fa fa-search tsp" aria-hidden="true"></i>
        </div>
        <nav className="navBar tsp">
          <ul className="navList tsp">
            <li>
              <Link className="ls tsp" to="/card">
                sign in
              </Link>
            </li>
            <li>
              <Link className="ls tsp" to="/card">
                sign up
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
