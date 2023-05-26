import React from "react";
import CvBtn from "../DownloadBtn/CVBtn";
import useLocalStorage from "use-local-storage";
import "./navBar__dark.css";

function NavBar() {
  //use state for dark/light theme
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  //switch function, with even listener in toggle icon html tag
  //click event triggers this function
  const switchTheme = () => {
    // creates a variable that checks the current theme and then swithes state
    const newTheme = theme === "dark" ? "light" : "dark";
    //the new state is saved as the current theme
    setTheme(newTheme);
  };
  return (
    <div className="nav-bar">
      {/*button not yet functioning*/}
      <button className="themeBtn" onClick={switchTheme}>
        Change Theme
      </button>

      <div className="nav-items">
        <a className="nav-link" href="#about">
          about
        </a>
        <a className="nav-link" href="#projects">
          projects
        </a>
        <a className="nav-link" href="#contact">
          contact
        </a>
        <CvBtn className="nav-link" />
      </div>
    </div>
  );
}
export default NavBar;
