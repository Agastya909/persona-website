/* eslint-disable react/prop-types */
import Nav from "../../component/Nav";
import "./project.css";

const ITEMS = [
  {
    id: 0,
    title: "Workout Tracker",
    description:
      "A simple workout app built using React native to store workout logs.",
    link: "https://github.com/Agastya909/workoutTracker",
  },
  {
    id: 1,
    title: "Coffee Shop UI",
    description: "A UI only application for a shop selling drinks and coffee.",
    link: "https://github.com/Agastya909/coffeeHouse",
  },
  {
    id: 2,
    title: "Video Streaming Application",
    description:
      "A Mobile video streaming application with upload video functionality. Also supports searching for content.",
    link: "https://github.com/Agastya909/natflux-android",
  },
];

const Card = ({ item }) => {
  return (
    <a
      href={item.link}
      style={{ textDecoration: "none", color: "#fff" }}
      target="_blank"
    >
      <div className="project-card">
        <div className="gradient" />
        <div className="project-info">
          <p className="project-name">{item.title}</p>
          <p className="project-desc">{item.description}</p>
        </div>
      </div>
    </a>
  );
};

const Project = () => {
  return (
    <div className="main-project">
      <Nav />
      <p className="heading-project">Projects</p>
      {ITEMS.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default Project;
