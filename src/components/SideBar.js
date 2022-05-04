import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  const [toggleoff, setToggleoff] = React.useState(false)
  var toggle =false;
  
  function blurToggle() {
      setToggleoff(true);
  }
  if (props.value && !toggleoff) {
    toggle = true;
  }
  if (toggleoff && props.value) {
    toggle = false;
  }
  if (toggleoff && !props.value) {
    toggle = true;
  }
  React.useEffect(() => {
    if (!props.value) {
      setToggleoff(false)
    }
  }, [props.value])
  
  return (
    <div className="tsp">
      <div
        onBlur={blurToggle}
        onClick={blurToggle}
        className="bar tsp"
        id="bar"
        data-visible={toggle}
      >
        <ul>
          <Link className="sbli" to="/">
            <li>
              <i className="fas fa-home"></i> Home
            </li>
          </Link>
          <Link className="sbli" to="/projects">
            <li>
              <i className="fas fa-project-diagram"></i> Projects
            </li>
          </Link>

          <Link className="sbli" to="/chats">
            <li>
              <i className="fas fa-inbox"></i> Chats
            </li>
          </Link>
          <br />
          <Link className="sbli" to="/games">
            <li>
              <i className="fas fa-gamepad"></i> Games
            </li>
          </Link>

          <Link className="sbli" to="/collabs">
            <li>
              <i className="fa fa-handshake-o" aria-hidden="true"></i> Collabs
            </li>
          </Link>

          <Link className="sbli" to="/challenges">
            <li>
              <i className="fas fa-trophy    "></i> Challenges
            </li>
          </Link>

          <Link className="sbli" to="/resources">
            <li>
              <i className="fa fa-book" aria-hidden="true"></i> Resources
            </li>
          </Link>

          <Link className="sbli" to="/account">
            <li>
              <i className="fas fa-portrait    "></i> Account
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
