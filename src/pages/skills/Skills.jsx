import "./skills.css";
import Nav from "../../component/Nav";
import Spacer from "../../component/Spacer";

const ImageItem = (data) => {
  return (
    <div className="tech-icon">
      <img
        src={data.src}
        alt={data.alt}
        height={36}
        width={36}
        style={{ filter: `invert(${data.invert ?? 0})` }}
      />
      <p style={{ color: "white" }}>{data.alt}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <Nav />
      <Spacer />
      <div className="main">
        <p className="title">Server</p>
        <div className="icons">
          <ImageItem src="/typescript.png" alt="Typescript" />
          <ImageItem src="/golang.png" alt="Golang" />
          <ImageItem src="/python.png" alt="Python" />
          <ImageItem src="/django.png" alt="Django" />
          <ImageItem src="/express.png" alt="ExpressJS" invert={1} />
        </div>
        <p className="title">Mobile and Web</p>
        <div className="icons">
          <ImageItem src="/react-native.png" alt="React" />
          <ImageItem src="/html.png" alt="Html" />
          <ImageItem src="/nextjs.png" alt="Nextjs" invert={0.3} />
          <ImageItem src="/tailwind-css.png" alt="Tailwind" />
        </div>
        <p className="title">Database</p>
        <div className="icons">
          <ImageItem src="/postgres.png" alt="PostgreSQL" />
          <ImageItem src="/mysql.png" alt="MySQL" />
          <ImageItem src="/redis.png" alt="Redis" />
        </div>
        <p className="title">Other</p>
        <div className="icons">
          <ImageItem src="/aws.png" alt="AWS" invert={0.1} />
          <ImageItem src="/firebase.png" alt="Firebase" />
          <ImageItem src="/docker.png" alt="Docker" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
