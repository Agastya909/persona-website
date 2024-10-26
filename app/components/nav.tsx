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
      className={`relative m-1.5 py-1.5 px-6  ${
        currentPath === path
          ? "bg-nav_item_active rounded-full w-full text-black font-medium"
          : "hover:transition hover:bg-neutral-800 hover:rounded-full text-white font-normal"
      }`}
    >
      {name}
    </a>
  );
}

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-center align-baseline max-w-screen-sm m-6 fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-nav_bg rounded-full">
      <NavItem path="/" name="Home" currentPath={pathname} />
      <NavItem path="/projects" name="Projects" currentPath={pathname} />
    </nav>
  );
}
