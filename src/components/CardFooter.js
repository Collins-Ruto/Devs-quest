import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function CardFooter() {
  return (
    <div className="cardFooter">
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/collins-ruto-12803a1b8/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/collins-ruto"
          >
            <i class="fa-brands fa-github-square"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="http://twitter.com/Collins42512686"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="http://dribbble.com">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="http://stackoverflow.com/users/story/17242991"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </li>
      </ul>
      <div className="copyright">&copy;Collins Ruto, April 2022</div>
    </div>
  );
}
