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
        <a href="/contact" className="nav-link">
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Nav;
