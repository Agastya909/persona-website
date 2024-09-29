import "./skills.css";
import Nav from "../../component/Nav";
const LANGUAGES = ["Javascript", "Typescript", "Golang", "Python"];
const MOBILE = ["React Native", "Zustand"];
const SERVER = ["Express", "go/http", "django"];
const WEB = ["ReactJs", "NextJs", "Redux", "Tailwind", "Bootstrap", "HTML/CSS"];
const DATABASE = ["MySQL", "PostgreSQL", "Redis", "MongoDB"];
const TOOLS = ["Firebase", "Figma", "AWS", "Docker"];

const RenderItem = ({ items }) => {
  return items.map((item, index) => {
    return (
      <p key={index} className="item">
        {item}
      </p>
    );
  });
};

const Skills = () => {
  return (
    <div>
      <Nav />
      <div className="skill-content">
        <div className="section">
          <p className="title">Languages</p>
          <div className="items">
            <RenderItem items={LANGUAGES} />
          </div>
        </div>
        <div className="section">
          <p className="title">Mobile</p>
          <div className="items">
            <RenderItem items={MOBILE} />
          </div>
        </div>
        <div className="section">
          <p className="title">Server</p>
          <div className="items">
            <RenderItem items={SERVER} />
          </div>
        </div>
        <div className="section">
          <p className="title">Web</p>
          <div className="items">
            <RenderItem items={WEB} />
          </div>
        </div>
        <div className="section">
          <p className="title">Database</p>
          <div className="items">
            <RenderItem items={DATABASE} />
          </div>
        </div>
        <div className="section">
          <p className="title">Tools & Others</p>
          <div className="items">
            <RenderItem items={TOOLS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
