import { NavLink } from "react-router-dom";
import { navItems } from "../constants/constants";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 z-50 w-full h-auto bg-violet-500 py-2.5 flex justify-evenly items-center">
      {navItems.map(({ name, link, icon }, index) => (
        <div className="has-[.active]:bg-violet-700 p-2 rounded-full">
          <NavLink to={link}>
            <img src={icon} className="w-8 selection:h-8" />
          </NavLink>
        </div>
      ))}
    </nav>
  );
}
export default NavBar;