import Image from "next/image";
import SocialBtn from "./components/socialBtn";
import WorkHistoryCard from "./components/workHistoryCard";
import Divider from "./components/divider";
import Nav from "./components/nav";

const TIMELINE_DATA = [
  {
    role: "Product Engineer",
    company: "Shurutech",
    start_date: "JUNE 2024",
    end_date: "Present",
    link: "https://shurutech.com/",
    stack: [
      "Golang",
      "K8",
      "RabbitMQ",
      "Python",
      "Django",
      "Postgres",
      "AWS",
      "Airflow",
    ],
    work: [
      "Currently working with a payment based product using golang and K8 in a microservice architecture.",
      "Using RabbitMQ for offloading heavy tasks from main API.",
      "Previously worked with django and airflow on a B2B product for credit score calculation which will be used by various financial institutions.",
      "Worked on a data pipeline for the product using python and airflow.",
    ],
  },
  {
    role: "Software Engineer",
    company: "PickMyWork",
    start_date: "FEB 2023",
    end_date: "MAY 2024",
    link: "https://www.pickmywork.com/",
    stack: ["React Native", "ReactJS", "Node.js", "ExpressJS", "MySQL", "AWS"],
    work: [
      "Worked with FCM for push notifications from scratch.",
      "Bumped up node for app from v14 to v18.",
      "Created mobile app componenets such as story viewer, side nav bar, etc.",
      "Improved API performance by implementing redis caching, using better DB schema.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "PickMyWork",
    start_date: "JULY 2022",
    end_date: "OCT 2022",
    link: "https://www.pickmywork.com/",
    stack: ["Node.js", "ExpressJS", "MySQL", "Redis"],
    work: ["Worked with redis on API caching and performance optimization."],
  },
];

export default function Home() {
  return (
    <div className="my-0 zero:max-pc:my-4 zero:max-pc:mx-2">
      <Nav />
      <p className="text-sm text-gray-400 font-medium">{"Hi, I'm"}</p>
      <p className="text-4xl font-medium mt-2 font-playFair zero:max-tablet:text-4xl">
        Agastya Rajawat
      </p>
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
      <p className="text-2xl my-2 animate-changeNameColor font-medium zero:max-tablet:text-xl">
        Backend, Frontend and Mobile Developer
      </p>
      <p className="my-2 text-gray-300 text-sm mb-4">
        I have over 2 years of experience working and developing backend,
        frontend and mobile applications.
      </p>
      <Divider />
      <div className="flex flex-row justify-between place-items-center zero:max-tablet:flex-col my-3">
        <p className="text-xl font-medium zero:max-tablet:text-lg">
          Ping me here
        </p>
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
      <p className="text-xl font-medium my-3">Work History</p>
      <div>
        {TIMELINE_DATA.map((data, index) => {
          return <WorkHistoryCard key={index} {...data} />;
        })}
      </div>
    </div>
  );
}
