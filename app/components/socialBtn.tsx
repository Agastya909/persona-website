"use client";
import Image from "next/image";
export default function SocialBtn({
  href,
  src,
  alt,
  invert = false,
}: {
  href: string;
  src: string;
  alt: string;
  invert?: boolean;
}) {
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      className={`flex flex-row place-items-center rounded-full bg-neutral-800 px-3 py-2 mr-2 hover:bg-neutral-600`}
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className={`${invert ? "invert" : ""}`}
      />
      <p className="mx-1 text-sm">{alt}</p>
    </button>
  );
}
