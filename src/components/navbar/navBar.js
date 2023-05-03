import React from 'react';
import CvBtn from '../downloadBtn/CvBtn';
import useLocalStorage from 'use-local-storage';
import '../navbar/navBar__dark.css';

 function NavBar(){
    //use state for dark/light theme
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark':'light')
    //switch function, with even listener in toggle icon html tag
    //click event triggers this function
    const switchTheme = ()=>{
        // creates a variable that checks the current theme and then swithes state
        const newTheme = theme === 'dark' ? 'light':'dark';
        //the new state is saved as the current theme
        setTheme(newTheme)

    }
    return (<div className="navBar">
        {/*button not yet functioning*/}
        <button className="themeBtn"onClick={switchTheme}>Change Theme</button>

        <div className="navItems">
            <a className="navLink" href="#about">About</a>
            <a className="navLink" href="#projects">Projects</a>
            <a className="navLink" href="#contact">Contact</a>
            <CvBtn className="navLink"/>
        </div>
    </div>)
}
export default NavBar;