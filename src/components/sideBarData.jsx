import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome, AiFillContacts  } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";

export const SideBarData = [
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
  {
    title: "Contact",
    path: "/contact",
    icon: <AiFillContacts />,
    cName: "nav-text",
  },
]