"use client";
import { usePathname } from "next/navigation";

function NavItem({
  path,
  name,
  currentPath,
}: {
  path: string;
  name: string;
  currentPath: string;
}) {
  return (
    <a
      href={path}
      className={`text-white relative m-1.5 font-normal py-1.5 px-4  ${
        currentPath === path
          ? "bg-neutral-700 rounded-full w-full"
          : "hover:transition hover:bg-neutral-800 hover:rounded-full"
      }`}
    >
      {name}
    </a>
  );
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center align-baseline max-w-screen-sm m-6 fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-sm bg-neutral-900 rounded-full">
      <NavItem path="/" name="Home" currentPath={pathname} />
      <NavItem path="/skills" name="Skills" currentPath={pathname} />
      <NavItem path="/projects" name="Projects" currentPath={pathname} />
    </nav>
  );
}
