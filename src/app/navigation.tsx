'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavItemProps {
  content: string;
  imageSrc: string;
  link: string;
}

const tempNavItems: NavItemProps[] = [
  {content: 'Dev News', imageSrc: '/icons/menu/devnews.svg', link: '/devnews'},
  {content: 'Project Log', imageSrc: '/icons/menu/projectlog.svg', link: '/projectlog'},
  {content: 'Study Note', imageSrc: '/icons/menu/studynote.svg', link: '/studynote'},
  {content: 'Troubleshooting', imageSrc: '/icons/menu/troubleshooting.svg', link: '/troubleshooting'},
]

const Navbar = () => {
  return (
    <>
      <div className={"h-full absolute py-5 bg-mylightblack border-r-1 border-gray-500/30 group"}>
        <NavContainer navItems={tempNavItems}/>
      </div>
    </>
  );
}

const NavContainer = ({navItems}: { navItems: NavItemProps[] }) => {
  return (
    <>
      <ul className={"p-3 [&>li]:py-1"}>
        {navItems.map((navItem: NavItemProps) => (
          <NavItem key={navItem.content} imageSrc={navItem.imageSrc} content={navItem.content} link={navItem.link}/>
        ))}
      </ul>
    </>
  );
}

const NavItem = (props: NavItemProps) => {
  const router = useRouter();

  return (
    <li
      className="flex items-center h-[40px] my-3 overflow-hidden group-hover:w-auto w-[48px] group-hover:overflow-visible
             hover:bg-neutral-700/90 hover:border-[#a29bfe]
             px-2 border border-transparent rounded-lg transition-[border-color] duration-300 ease-in-out cursor-pointer"
      onClick={() => router.push(props.link)}
    >
      <div className="min-w-[30px] flex justify-center">
        <Image src={props.imageSrc} alt="nav icon" width={30} height={30}/>
      </div>
      <div
        className="ml-2 text-sm whitespace-nowrap leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <strong>{props.content}</strong>
      </div>
    </li>
  );
};

export default Navbar;