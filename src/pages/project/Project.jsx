/* eslint-disable react/prop-types */
import Nav from "../../component/Nav";
import "./project.css";
import Link from "../../component/Link";
import Spacer from "../../component/Spacer";
const ITEMS = [
  {
    title: "Personal Website",
    description:
      "Personal website written in react. Feel free to use it directly or customize it. A star would be appreciated if you like it.",
    link: "https://github.com/Agastya909/personal-website",
    techStack: ["Javascript", "React"],
    is_pinned: true,
    cover_img: "/portfolio.png",
  },
  {
    title: "Workout Tracker",
    description:
      "A simple workout app built using React native to store workout logs.",
    link: "https://github.com/Agastya909/workoutTracker",
    techStack: ["Typescript", "React Native", "Redux", "Firebase"],
    is_pinned: false,
    cover_img: "/workoutracker.png",
  },
  {
    title: "Coffee Shop UI",
    description: "A UI only application for a shop selling drinks and coffee.",
    link: "https://github.com/Agastya909/coffeeHouse",
    techStack: ["Typescript", "React Native", "Redux"],
    is_pinned: false,
    cover_img: "/coffeeui.png",
  },
  {
    title: "Video Streaming over web",
    description:
      "A web app for video streaming with upload video functionality. Uses express, mysql for backend and system storage for storing videos.",
    link: "https://github.com/Agastya909/natflux-web",
    techStack: ["Typescript", "NextJS"],
    is_pinned: false,
    cover_img: "/natfluxweb.png",
  },
  {
    title: "Short format video streaming app",
    description:
      "Video streaming application for mobile to view short format videos.",
    link: "https://github.com/Agastya909/natflux-android",
    techStack: ["Typescript", "React Native", "Redux"],
    is_pinned: false,
    cover_img: "/natfluxmobile.png",
  },
];

const TechStack = ({ title, description, link, stack, cover_img }) => {
  return (
    <div className="project-card">
      <img src={cover_img} alt={cover_img} className="cover" />
      <div style={{ padding: "5px 10px" }}>
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
    </div>
  );
};

const Project = () => {
  return (
    <div className="main-project">
      <Nav />
      <Spacer />
      <div className="project-grid">
        {ITEMS.map((item, index) => (
          <TechStack
            title={item.title}
            description={item.description}
            link={item.link}
            stack={item.techStack}
            key={index}
            cover_img={item.cover_img}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
