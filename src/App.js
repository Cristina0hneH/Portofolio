import React from 'react';
import NavBar from "./components/navbar/navBar";
import CvBtn from './components/downloadBtn/CvBtn';
import Hero from './components/hero/hero';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}
export default App;
