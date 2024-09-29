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
        <a href="/blogs" className="nav-link">
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Nav;
