import Image from "next/image";
import SocialBtn from "./components/socialBtn";
import WorkHistoryCard from "./components/workHistoryCard";
import Chip from "./components/chip";
import Divider from "./components/divider";
import Btn from "./components/btn";

const TIMELINE_DATA = [
  {
    role: "Product Engineer",
    company: "Shurutech",
    start_date: "JUNE 2024",
    end_date: "Present",
    link: "https://shurutech.com/",
    stack: ["Python", "Django", "Postgres", "AWS", "Airflow"],
    description:
      "Currently working with django and airflow on a B2B product for credit score calculation which will be used by various financial institutions.",
  },
  {
    role: "Software Engineer",
    company: "PickMyWork",
    start_date: "FEB 2023",
    end_date: "MAY 2024",
    link: "https://www.pickmywork.com/",
    stack: ["React Native", "ReactJS", "Node.js", "ExpressJS", "MySQL", "AWS"],
    description:
      "Created mobile app componenets such as story viewer, side nav bar, etc. Worked FCM for push notifications from scratch. Bumped up node for app from v14 to v18.",
  },
  {
    role: "Software Engineer Intern",
    company: "PickMyWork",
    start_date: "JULY 2022",
    end_date: "OCT 2022",
    link: "https://www.pickmywork.com/",
    stack: ["Node.js", "ExpressJS", "MySQL", "Redis"],
    description:
      "Worked with redis on API caching and performance optimization.",
  },
];

const SKILLS_SRC = [
  { name: "Typescript", src: "/typescript.png", invert: false },
  { name: "Golang", src: "/golang.png", invert: false },
  { name: "Python", src: "/python.png", invert: false },
  { name: "Express", src: "/express.png", invert: true },
  { name: "Django", src: "/django.png", invert: false },
  { name: "React Native", src: "/react-native.png", invert: false },
  { name: "Next.js", src: "/nextjs.png", invert: true },
  { name: "Tailwind", src: "/tailwind-css.png", invert: false },
  { name: "HTML", src: "/html.png", invert: false },
  { name: "Postgres", src: "/postgres.png", invert: false },
  { name: "MySQL", src: "/mysql.png", invert: false },
  { name: "Redis", src: "/redis.png", invert: false },
  { name: "AWS", src: "/aws.png", invert: false },
  { name: "Firebase", src: "/firebase.png", invert: false },
  { name: "Docker", src: "/docker.png", invert: false },
];

export default function Home() {
  return (
    <div className="my-8 zero:max-pc:my-4 zero:max-pc:mx-2">
      <p className="text-sm text-gray-400 font-medium">{"Hi, I'm"}</p>
      <p className="text-4xl font-semibold mt-2">Agastya Rajawat</p>
      <div className="flex flex-row place-items-baseline mt-4">
        <Image
          src={"/location.png"}
          alt="location"
          width={20}
          height={20}
          className="invert"
        />
        <p className="text-gray-400 mx-2">Jaipur</p>
      </div>
      <p className="text-3xl my-2 animate-changeNameColor font-medium">
        Backend, Frontend and Mobile Developer
      </p>
      <p className="my-2 text-gray-300 text-sm">
        I have over 1.5 years of experience developing web apps, mobile apps and
        backend services.
      </p>
      <Divider />
      <div className="flex flex-row justify-between place-items-center my-1 zero:max-tablet:flex-col">
        <p className="text-xl font-normal">Connect with me</p>
        <div className="flex flex-row zero:max-mobile:flex-col">
          <SocialBtn
            alt="Github"
            href="https://github.com/agastya909"
            src="/github.png"
            invert={true}
          />
          <SocialBtn
            alt="LinkedIn"
            href="https://www.linkedin.com/in/agastya-rajawat/"
            src="/linkedin.png"
          />
          <SocialBtn
            alt="Email"
            href="mailto:agastyarajawat909@gmail.com"
            src="/email.png"
            invert={true}
          />
        </div>
      </div>
      <Divider />
      <p className="text-xl font-medium my-2">What I work with</p>
      <div className="flex flex-row flex-wrap mb-2 justify-center">
        {SKILLS_SRC.map((src, index) => {
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
      <Btn href="/projects" text="Have a look at my projects →" />
      <Divider />
      <p className="text-xl font-medium my-2">Work History</p>
      <div>
        {TIMELINE_DATA.map((data, index) => {
          return <WorkHistoryCard key={index} {...data} />;
        })}
      </div>
    </div>
  );
}
