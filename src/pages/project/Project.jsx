/* eslint-disable react/prop-types */
import Nav from "../../component/Nav";
import "./project.css";
import Link from "../../component/Link";
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

const TechStack = ({ title, description, link, stack }) => {
  return (
    <div className="project-card">
      <div className="project-title">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="project-name">{title}</div>
          <Link />
        </a>
      </div>
      <div className="project-desc">{description}</div>
      <div className="tech-stack">
        {stack.map((item, index) => {
          return (
            <div key={index} className="tech-stack-name">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="main-project">
      <Nav />
      <p className="heading-project">Projects</p>
      {ITEMS.map((item, index) => (
        <TechStack
          title={item.title}
          description={item.description}
          link={item.link}
          stack={item.techStack}
          key={index}
        />
      ))}
    </div>
  );
};

export default Project;
