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
        <a href="mailto:agastyarajawat909@gmail.com" className="nav-link">
          Email
        </a>
        <a href="/projects" className="nav-link">
          My Works
        </a>
      </div>
    </div>
  );
};

export default Nav;
