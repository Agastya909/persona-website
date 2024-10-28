import Btn from "../components/btn";
import Image from "next/image";

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

function ProjectCard({
  title,
  description,
  link,
  tech_stack,
  cover_img,
}: {
  title: string;
  description: string;
  link: string;
  tech_stack: string[];
  cover_img: string;
}) {
  return (
    <a
      className="flex flex-col  rounded-md hover:shadow-[-2px_2px_1px_0_#ee4266] transition duration-300 hover:translate-x-1 hover:-translate-y-1 border border-neutral-800"
      href={link}
      target="_blank"
    >
      <Image
        src={cover_img}
        alt="title"
        height={400}
        width={400}
        className="rounded-t-md"
      />
      <div className="flex flex-col m-2">
        <p className="text-xl font-medium text-neutral-200">{title}</p>
        <p className="text-sm font-thin text-neutral-400">{description}</p>
        <div className="flex flex-wrap">
          {tech_stack.map((tech, index) => {
            return (
              <p
                className="text-sm text-neutral-200 py-1 px-2 w-fit mr-2 my-1  place-items-center rounded-full bg-[#303030]"
                key={index}
              >
                {tech}
              </p>
            );
          })}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="my-8 zero:max-pc:mx-2">
      <Btn href="/" text="← Go to Home" />
      <p className="text-xl my-4 font-medium">Personal projects</p>
      <div className="grid grid-cols-2 gap-4 zero:max-tablet:grid-cols-1">
        {ITEMS.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            tech_stack={item.techStack}
            cover_img={item.cover_img}
          />
        ))}
      </div>
    </div>
  );
}
