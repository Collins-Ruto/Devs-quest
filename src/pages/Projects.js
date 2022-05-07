import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/Navigation";
import '../styles/Projects.css'

export default function Projects() {
  return (
    <div className="tsp">
      <MainNavigation />
      <div className="pro-page tsp">
        <h1 className="tsp" >My Projects</h1>
        <div className="pro-cont tsp">
          <div className="pro-card">
            <Link className="pro-link" to="/projects/boxes">
              <i className="fas fa-boxes"></i>
              <br />
              <h2>Project color boxes</h2>
              <p>
                A simple box created to test my skills on useState and ternary
                operators. The boxes switch colors to and onclick. Pink for true
                and black for false. It can be customized further for a musical
                instrument or memory test game.
              </p>
            </Link>
          </div>
          <div className="pro-card">
            <Link className="pro-link" to="/projects/wallpapers">
              <i className="fas fa-image    "></i>
              <h2>Project Wallpapers</h2>
              <p>
                This is a wallpaper repository for mobile, tablet, television
                and computer wallpapers. I am using this project to test out api
                data fetching and later on creating apis to manage the data. It
                is using MongoDB to store, source and manage the data. It will
                have the functionality of adding favorites, sharing and also
                downloading to local storage.
              </p>
            </Link>
          </div>
          <div className="pro-card">
            <Link className="pro-link" to="/projects/calculator">
              <i className="fas fa-calculator "></i>
              <h2>Project Calculator</h2>
              <p>
                This is the age old tradition of prove. A programmer must be
                able to use the Calculator his new found skill to build a
                functional calculator. I have given it a try with javascript
                react with some CSS. Hope it works fine.
              </p>
            </Link>
          </div>
          <div className="pro-card">
            <Link className="pro-link" to="/projects/pubg">
              <i className="fas fa-gamepad "></i>
              <br />
              <h2>Project useState #Pubg</h2>
              <p>
                A program using useState props, js Maps and ternary operators to
                add new profiles to an existing list and it updates immediately
                on the same page, by pushing new inputed data to an existing
                array. Working on adding memory.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
