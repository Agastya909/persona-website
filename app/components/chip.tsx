import Image from "next/image";

export default function Chip({
  src,
  name,
  invert,
}: {
  src: string;
  name: string;
  invert?: boolean;
}) {
  return (
    <div className="flex flex-row py-2 px-3 w-fit mr-2 my-1 place-items-center shadow-[0_0_1px_0_#ffffff4d] rounded-full">
      <Image
        src={src}
        alt={name}
        width={24}
        height={24}
        className={invert ? "invert" : ""}
      />
      <p className="text-sm text-neutral-400 ml-1">{name}</p>
    </div>
  );
}
