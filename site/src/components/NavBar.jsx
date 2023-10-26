import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

import PathContext from "../context/pathContext";
import DataContext from "../context/dataContext";
import TimerContext from "../context/timerContext";

import logoLight from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";

export const NavBar = ({ darkMode, setDarkMode }) => {
  const { pathName, updateNav } = useContext(PathContext);
  const { navLinksPresets } = useContext(DataContext);
  const { setTimer } = useContext(TimerContext);

  const switchDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="h-auto flex justify-between items-center p-2 shadow-lg">
      <div
        className="flex items-center w-[95%]"
        onClick={() => {
          updateNav(window.location.pathname);
        }}
      >
        <NavLink to="/" className="flex items-center ">
          <img
            src={darkMode ? logoLight : logoDark}
            alt="logo"
            className=" w-10 h-10 mr-1 md:mr-2 md:w-14 md:h-14"
          ></img>
          <h3 className="text-xl font-semibold md:text-2xl">Awaken Mind</h3>
        </NavLink>
        {pathName != "/" && (
          <nav className="ml-auto">
            <DesktopMenu linkPresets={navLinksPresets} setTimer={setTimer} />
            <MobileMenu linkPresets={navLinksPresets} setTimer={setTimer} />
          </nav>
        )}
      </div>
      <button>
        {darkMode ? (
          <FaRegLightbulb
            onClick={switchDarkMode}
            className="h-8 mb-2 ml-2 md:text-xl"
          />
        ) : (
          <FaLightbulb
            onClick={switchDarkMode}
            className="h-8 mb-2 ml-2 md:text-xl"
          />
        )}
      </button>
    </header>
  );
};
