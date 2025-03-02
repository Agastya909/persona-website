import Chip from "../components/chip";
import Nav from "../components/nav";

const LANG = [
  { name: "Golang", src: "/golang.png", invert: false },
  { name: "Typescript", src: "/typescript.png", invert: false },
  { name: "Python", src: "/python.png", invert: false },
];

const FRAMEWORKS = [
  { name: "Express", src: "/express.png", invert: true },
  { name: "Django", src: "/django.png", invert: false },
];

const WEB = [
  { name: "React Native", src: "/react-native.png", invert: false },
  { name: "Next.js", src: "/nextjs.png", invert: true },
  { name: "HTML", src: "/html.png", invert: false },
  { name: "Tailwind", src: "/tailwind-css.png", invert: false },
];

const DATABASES = [
  { name: "Postgres", src: "/postgres.png", invert: false },
  { name: "MySQL", src: "/mysql.png", invert: false },
  { name: "Redis", src: "/redis.png", invert: false },
];

const CLOUD = [
  { name: "AWS", src: "/aws.png", invert: false },
  { name: "Firebase", src: "/firebase.png", invert: false },
  { name: "Docker", src: "/docker.png", invert: false },
];

export default function Skills() {
  return (
    <div className="my-0 zero:max-pc:my-4 zero:max-pc:mx-2">
      <Nav />
      <p>Languages</p>
      <div className="flex flex-row flex-wrap my-2">
        {LANG.map((src, index) => {
          return (
            <Chip
              key={index}
              src={src.src}
              name={src.name}
              invert={src.invert}
            />
          );
        })}
      </div>
      <p>Frameworks</p>
      <div className="flex flex-row flex-wrap my-2">
        {FRAMEWORKS.map((src, index) => {
          return (
            <Chip
              key={index}
              src={src.src}
              name={src.name}
              invert={src.invert}
            />
          );
        })}
      </div>
      <p>Web & Mobile</p>
      <div className="flex flex-row flex-wrap my-2">
        {WEB.map((src, index) => {
          return (
            <Chip
              key={index}
              src={src.src}
              name={src.name}
              invert={src.invert}
            />
          );
        })}
      </div>
      <p>Databases</p>
      <div className="flex flex-row flex-wrap my-2">
        {DATABASES.map((src, index) => {
          return (
            <Chip
              key={index}
              src={src.src}
              name={src.name}
              invert={src.invert}
            />
          );
        })}
      </div>
      <p>Cloud & Infra</p>
      <div className="flex flex-row flex-wrap my-2">
        {CLOUD.map((src, index) => {
          return (
            <Chip
              key={index}
              src={src.src}
              name={src.name}
              invert={src.invert}
            />
          );
        })}
      </div>
    </div>
  );
}
