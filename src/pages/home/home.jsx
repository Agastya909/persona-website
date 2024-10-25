/* eslint-disable react/prop-types */
import Link from "../../component/Link";
import Nav from "../../component/Nav";
import Spacer from "../../component/Spacer";
import "./home.css";
import { useState, useEffect } from "react";
const TIMELINE_DATA = [
  {
    title: "Product Engineer",
    company: "Shurutech",
    start_date: "JUNE 2024",
    end_date: "Present",
    link: "https://shurutech.com/",
    stack: ["Python", "Django", "Postgres", "AWS", "Airflow"],
    description:
      "Currently working with django and airflow on a B2B product for credit score calculation which will be used by various financial institutions.",
  },
  {
    title: "Software Engineer",
    company: "PickMyWork",
    start_date: "FEB 2023",
    end_date: "MAY 2024",
    link: "https://www.pickmywork.com/",
    stack: ["React Native", "ReactJS", "Node.js", "ExpressJS", "MySQL", "AWS"],
    description:
      "Created mobile app componenets such as story viewer, side nav bar, etc. Worked FCM for push notifications from scratch. Bumped up node for app from v14 to v18.",
  },
  {
    title: "Software Engineer Intern",
    company: "PickMyWork",
    start_date: "JULY 2022",
    end_date: "OCT 2022",
    link: "https://www.pickmywork.com/",
    stack: ["Node.js", "ExpressJS", "MySQL", "Redis"],
    description:
      "Worked with redis on API caching and performance optimization.",
  },
];
const words = ["Backend Developer", "Mobile Developer", "Frontend Developer"];

const TimelineCard = ({
  title,
  company,
  start_date,
  end_date,
  link,
  stack,
  description,
}) => {
  return (
    <div className="timeline-card">
      <div className="dates-div">
        <p className="dates">
          {start_date} — {end_date}
        </p>
      </div>
      <div className="work-data-div">
        <div className="job-profile">{title}</div>
        <div className="company">
          <a href={link} target="_blank" rel="noreferrer">
            {company}
          </a>
          <Link />
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#ababab",
            fontWeight: "400",
            margin: "5px 0",
          }}
        >
          {description}
        </div>
        <div className="stack">
          {stack.map((item, index) => {
            return (
              <div key={index} className="stack-item">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [speed] = useState(100);
  const [totalExp, setTotalExp] = useState(0);
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    if (!deleting && displayedText === currentWord) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && displayedText === "") {
      setDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }
    }, speed);
    calculateTotalExp();
    return () => clearTimeout(timeout);
  }, [displayedText, deleting, currentWordIndex, speed]);

  const calculateTotalExp = () => {
    let total = 0;
    TIMELINE_DATA.forEach((item) => {
      const startDate = new Date(item.start_date);
      const endDate =
        item.end_date === "Present" ? new Date() : new Date(item.end_date);
      total += (endDate - startDate) / (1000 * 60 * 60 * 24 * 365);
    });
    setTotalExp(total.toFixed(1));
  };

  return (
    <div className="main-home">
      <Nav />
      <Spacer />
      <div>
        <p className="hi" style={{ fontWeight: "lighter" }}>
          {"Hi, I'm"}
        </p>
        <p className="intro-main-home">Agastya Rajawat</p>
        <div className="location">
          <img
            src="/location.png"
            alt="location"
            height={20}
            width={20}
            style={{ filter: "invert(0.5)", marginRight: "5px" }}
          />
          Jaipur
        </div>
        <div className="intro-sub-home home-name">
          <span className="intro-sub-home-child">{displayedText}</span>
          <span className="cursor">|</span>
        </div>
        <p className="intro-desc-home">
          I like to code! <br /> With {totalExp || "over 1.5"} years of
          experience, I&#39;ve been working with JavaScript, TypeScript, Golang
          and Python, building web servers, mobile apps, and websites.
        </p>
        <div className="btn-group">
          <button
            className="social-btn"
            onClick={() => {
              window.open("https://github.com/agastya909", "_blank");
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <p className="btn-title">Github</p>
            </div>
          </button>
          <button
            className="social-btn"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/agastya-rajawat/",
                "_blank"
              );
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <p className="btn-title">LinkedIn</p>
            </div>
          </button>
          <button
            className="social-btn"
            onClick={() => {
              window.open("mailto:agastyarajawat909@gmail.com", "_blank");
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
              <p className="btn-title">Email</p>
            </div>
          </button>
        </div>
        <p style={{ marginTop: 20, marginBottom: 20, fontSize: 24 }}>
          Work History
        </p>
        <div className="timeline">
          {TIMELINE_DATA.map((item, index) => {
            return (
              <TimelineCard
                key={index}
                title={item.title}
                company={item.company}
                start_date={item.start_date}
                end_date={item.end_date}
                stack={item.stack}
                link={item.link}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
      <div style={{ margin: "50px" }} />
    </div>
  );
};

export default Home;
