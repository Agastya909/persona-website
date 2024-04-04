import "./home.css";
const Home = () => {
  return (
    <div className="main">
      <div className="nav">
        {/* replace with vercel url */}
        <p className="heading">ar</p>
        <div>
          <a
            href="https://github.com/Agastya909"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/agastya-rajawat"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>
          <a href="mailto:agastyarajawat909@gmail.com" className="nav-link">
            Email
          </a>
        </div>
      </div>
      <div className="intro">
        <p className="intro-main">{"Hi, I'm Agastya Rajawat"}</p>
        <p className="intro-sub">{"Web & Android Developer from India."}</p>
        <p className="intro-desc">
          I have over an year of experience working with web and android.I
          usually work as a full time employee, available to work as a
          freelancer.
        </p>
      </div>
    </div>
  );
};

export default Home;
