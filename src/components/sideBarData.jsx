import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {MdClose} from 'react-icons/md'
import { GiFilmProjector } from "react-icons/gi";

export const SideBarData = [
  {
    title: "Close",
    path: "#",
    icon: <MdClose />,
    cName: "nav-text close",
  },
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <GiFilmProjector />,
    cName: "nav-text",
  },
]