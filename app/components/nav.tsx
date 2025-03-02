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
      className={`relative py-1.5 px-6 font-medium text-gray-400 flex row-auto items-center ${
        currentPath === path ? "font-bold text-lg text-white" : ""
      }`}
    >
      {name}
    </a>
  );
}

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-center align-baseline max-w-screen-sm my-4">
      <NavItem path="/" name="Home" currentPath={pathname} />
      <NavItem path="/projects" name="Projects" currentPath={pathname} />
      <NavItem path="/skills" name="Skills" currentPath={pathname} />
    </nav>
  );
}
