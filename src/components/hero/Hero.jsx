import "./hero__dark.css";
import CvBtn from "../DownloadBtn/CVBtn";
import { SiMinutemailer } from "react-icons/si";
import Blob from "../../assets/blob.svg";
import Developer from "../../assets/developer.svg";

export default function Hero() {
  return (
    <section className="hero">
      <article className="hero-text">
        <h1>&lt; hello world / &gt;</h1>
        <p>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </p>
        <div className="hero-buttons">
          <CvBtn />
          <button className="contact-btn">
            Contact <SiMinutemailer />
          </button>
        </div>
      </article>
      <aside className="hero-img">
        <img src={Blob} className="blob" alt="blog svg"/>
        <img src={Developer} className="developer" alt="developer or programmer svg"/>
      </aside>
    </section>
  );
}
