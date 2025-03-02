export default function WorkHistoryCard({
  end_date,
  role,
  company,
  start_date,
  link,
  stack,
  work: work,
}: {
  start_date: string;
  end_date: string;
  role: string;
  company: string;
  link: string;
  stack: string[];
  work: string[];
}) {
  return (
    <div className="flex flex-row my-4 rounded-lg py-4 px-2 shadow-[0_0_1px_0_#ffffff4d] zero:max-pc:flex-col">
      <p className="flex flex-row flex-1 text-gray-400 text-sm ml-2">
        {start_date} — {end_date}
      </p>
      <div className="flex flex-col ml-2 flex-[2]">
        <p className="text-xl font-medium">{role}</p>
        <a href={link} className="text-sm font-thin italic text-gray-400 my-1">
          {company}
        </a>
        {work.map((item, index) => {
          return (
            <p key={index} className="text-sm font-normal text-gray-400 mr-2 my-1">
              • {item}
            </p>
          );
        })}
        <div className="flex flex-row flex-wrap">
          {stack.map((item, index) => {
            return (
              <p
                key={index}
                className="py-1 px-3 bg-neutral-800 mr-2 rounded-full text-xs my-1 font-normal"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
