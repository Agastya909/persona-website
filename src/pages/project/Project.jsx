/* eslint-disable react/prop-types */
import Nav from "../../component/Nav";
import "./project.css";
import Link from "../../component/Link";
import Spacer from "../../component/Spacer";
const ITEMS = [
  {
    title: "Personal Website",
    description:
      "React based personal website. Feel free to use it directly or customize it. A star would be appreciated if you like it.",
    link: "https://github.com/Agastya909/personal-website",
    techStack: ["Javascript", "React"],
    is_pinned: true,
  },
  {
    title: "Workout Tracker",
    description:
      "A simple workout app built using React native to store workout logs.",
    link: "https://github.com/Agastya909/workoutTracker",
    techStack: ["Typescript", "React Native", "Redux", "Firebase"],
    is_pinned: false,
  },
  {
    title: "Coffee Shop UI",
    description: "A UI only application for a shop selling drinks and coffee.",
    link: "https://github.com/Agastya909/coffeeHouse",
    techStack: ["Typescript", "React Native", "Redux"],
    is_pinned: false,
  },
  {
    title: "Video Streaming over web",
    description:
      "A web app for video streaming with upload video functionality. Also supports searching for content.",
    link: "https://github.com/Agastya909/natflux-web",
    techStack: ["Typescript", "NextJS"],
    is_pinned: false,
  },
  {
    title: "Short format video streaming app",
    description:
      "Video streaming application for mobile to view short format videos.",
    link: "https://github.com/Agastya909/natflux-android",
    techStack: ["Typescript", "React Native", "Redux"],
    is_pinned: false,
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
      <Spacer />
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
