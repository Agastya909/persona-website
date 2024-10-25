import "./nav.css";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  return (
    <div className="nav">
      <a
        href="/"
        className={`nav-link${location.pathname === "/" ? "-active" : ""}`}
      >
        Home
      </a>
      <a
        href="/projects"
        className={`nav-link${
          location.pathname === "/projects" ? "-active" : ""
        }`}
      >
        Projects
      </a>
      <a
        href="/skills"
        className={`nav-link${
          location.pathname === "/skills" ? "-active" : ""
        }`}
      >
        Skills
      </a>
    </div>
  );
};

export default Nav;
