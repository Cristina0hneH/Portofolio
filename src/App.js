import React from 'react';
import NavBar from "./components/navbar/navBar";
import CvBtn from './components/downloadBtn/CvBtn';
import Hero from './components/hero/hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
export default App;
