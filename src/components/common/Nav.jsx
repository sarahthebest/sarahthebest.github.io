import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { text: "Home", link: "/" },
    { text: "Github", link: "https://github.com/sarahthebest" },
    { text: "About Me", link: "/about" },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/sarah-emmoth-696131206/",
    },
  ];

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("dark");
    setIsDarkMode(storedDarkMode === "enabled");
  }, []);

  const toggleDarkMode = () => {
    const newState = !isDarkMode;
    setIsDarkMode(newState);
    localStorage.setItem("dark", newState ? "enabled" : "disabled");
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark", "darkMode");
    } else {
      document.body.classList.remove("dark", "darkMode");
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar sticky top-3 rounded-full">
      <div className="h-15 pe-4 rounded-full navbar-links backdrop-blur-md
      customBorder bg-bg/60 dark:bg-light/60 text-center mx-auto flex flex-row justify-between">
        <Link
          className="navbar-brand ms-0 ps-0 flex items-center justify-center"
          onClick={(e) => e.preventDefault()}
          to="/"
        >
          <div className="bg-light dark:bg-bg hover:bg-gradient-to-tr to-purple from-orange w-full h-full rounded-full h-15 p-3 w-5/5 flex items-center justify-center">
            <img
              className="logo dark:invert invert-0 hover:invert"
              src="src\assets\img\logo.webp"
              alt="Personal logo."
            />
          </div>
        </Link>
        {/* PC NAV */}
        <ul className="navbar-links my-auto hidden md:flex relative">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer duration-300 nav-item">
              <Link
                className="link dark:text-dark text-light hover:underline hover:text-orange"
                to={item.link}
                rel="noopener noreferrer"
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li className="nav-item my-auto">
            <div className="toggle ms-4 my-auto">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <label
                htmlFor="checkbox"
                className="checkbox-label rounded-full flex relative dark:outline-dark outline-light outline-2 outline"
              >
                <div className="absolute" id="half-circle"></div>
                <span className="ball"></span>
              </label>
              <label htmlFor="checkbox" className="toggle-label"></label>
            </div>
          </li>
        </ul>
        {/* MOBILE NAV */}
        <div onClick={handleNav} className="block md:hidden my-auto ms-2 invert-0 dark:invert">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed top-20 place-items-center bg-bg dark:bg-light rounded ease-in-out duration-500 md:hidden flex flex-col"
              : " ease-in-out duration-500 hidden"
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer duration-300 nav-item py-2 px-4">
              <a
                className="link dark:text-dark text-light"
                href={item.link}
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
