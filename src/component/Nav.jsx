import "./nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <a
        href="/"
        className="heading-nav"
        style={{ textDecoration: "none", color: "white" }}
      >
        ar
      </a>
      <div>
        <a href="/projects" className="nav-link">
          My Works
        </a>
        <a href="/skills" className="nav-link">
          Skills
        </a>
        <a href="/contact" className="nav-link">
          Connect
        </a>
      </div>
    </div>
  );
};

export default Nav;
