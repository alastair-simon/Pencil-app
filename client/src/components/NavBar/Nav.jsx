import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import artists from "../../assets/artists.svg";
import projects from "../../assets/projects.svg";
import "./Nav.css";
import { useState } from "react";

export function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav
      className="nav"
      // style={{ width: isHovered ? "200px" : "50px" }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li className="logo">
          {/* <Link to="/"> */}
            <img src={logo} className="nav-icon" alt="Logo" />
          {/* </Link> */}
        </li>
        <li>
          <Link to="/artistList">
            <img src={artists} className="nav-icon" alt="Artists" />
          </Link>
        </li>
        <li>
          <Link to="/projectList">
            <img src={projects} className="nav-icon" alt="Projects" />
          </Link>
        </li>

        <li className="dark-mode">
          <div className="dark-mode-wrap">
            <button className="dark-mode-toggle"></button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
