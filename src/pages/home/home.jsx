import Nav from "../../component/Nav";
import "./home.css";
const Home = () => {
  return (
    <div className="main-home">
      <Nav />
      <div>
        <p className="intro-main-home">{"Hi, I'm Agastya Rajawat"}</p>
        <p className="intro-sub-home">{"Web & Android Developer from India."}</p>
        <p className="intro-desc-home">
          I have over an year of experience working with web and android.I
          usually work as a full time employee, available to work as a
          freelancer.
        </p>
      </div>
    </div>
  );
};

export default Home;
