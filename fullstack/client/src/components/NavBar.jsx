import { NavLink } from "react-router-dom";
import { navItems } from "../constants/constants";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 z-50 w-full h-auto bg-violet-500 py-2.5 flex justify-evenly items-center lg:fixed lg:block lg:w-52 lg:h-screen lg:pt-5 lg:px-5">
      {navItems.map(({ name, link, icon }, index) => (
        <div key={name} className="has-[.active]:bg-violet-700 p-2 rounded-full lg:mb-4">
          <NavLink to={link} className="lg:flex lg:gap-x-2 lg:items-center">
            <img src={icon} className="w-8 selection:h-8" />
            <span className="hidden lg:inline text-white">{name}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}
export default NavBar;