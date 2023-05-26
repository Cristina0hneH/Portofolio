import './App.css';
import NavBar from "./components/NavBar/NavBar";
import CVBtn from "./components/DownloadBtn/CVBtn";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import LeetCode from "./components/Challenge/LeetCode";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <LeetCode />
      <ContactForm />
    </div>
  );
}
export default App;
