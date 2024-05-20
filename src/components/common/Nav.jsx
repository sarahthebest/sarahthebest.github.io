import { useState, useEffect } from "react";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <nav className="navbar mx-auto w-5/6 sticky top-4 mt-0 rounded-full">
      <div className="container-lg text-center mx-auto flex flex-row justify-between">
        <ul className="navbar-links bg-bg/60 dark:bg-light/60 h-15 pe-4 flex flex-row mx-auto customBorder rounded-full w-50">
          <a
            className="navbar-brand ms-0 ps-0 flex items-center justify-center"
            onClick={(e) => e.preventDefault()}
            href="index.html"
          >
            <div className="bg-light dark:bg-bg w-full h-full rounded-full h-15 p-3 w-5/5 flex items-center justify-center">
              <img
                className="logo dark:invert invert-0"
                src="src\assets\img\logo.webp"
                alt="Personal logo."
              />
            </div>
          </a>
          <li className="nav-item">
            <a
              className="link dark:text-dark text-light"
              aria-current="page"
              href="index.html"
              onClick={(e) => e.preventDefault()}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="link dark:text-dark text-light"
              href="https://github.com/sarahthebest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a className="link dark:text-dark text-light" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="link dark:text-dark text-light" href="about.html">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="link dark:text-dark text-light"
              href="https://www.linkedin.com/in/sarah-emmoth-696131206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
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
              <label
                htmlFor="checkbox"
                className="toggle-label"
              ></label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
