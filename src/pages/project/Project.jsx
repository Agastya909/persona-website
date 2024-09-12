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
    techStack: ["Typescript", "React Native", "Redux", "Firebase"],
  },
  {
    id: 1,
    title: "Coffee Shop UI",
    description: "A UI only application for a shop selling drinks and coffee.",
    link: "https://github.com/Agastya909/coffeeHouse",
    techStack: ["Typescript", "React Native", "Redux"],
  },
  {
    id: 2,
    title: "Video Streaming over web",
    description:
      "A web app for video streaming with upload video functionality. Also supports searching for content.",
    link: "https://github.com/Agastya909/natflux-web",
    techStack: ["Typescript", "NextJS"],
    language: "Typescript",
  },
  {
    id: 3,
    title: "Short format video streaming app",
    description: `A Mobile video streaming application. Mobile version of the above project.`,
    link: "https://github.com/Agastya909/natflux-android",
    techStack: ["Typescript", "React Native", "Redux"],
    language: "Typescript",
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
        <div className="project-info">
          <p className="project-name">{item.title}</p>
          <p className="project-desc">{item.description}</p>
          <div className="tech-stack">
            {item.techStack.map((tech, index) => (
              <span key={index} className="tech-stack-name">
                {tech}
              </span>
            ))}
          </div>
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
