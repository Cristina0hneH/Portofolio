import "./projects__dark.css";
import Item from "./Item";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>&lt; projects / &gt; </h2>
      <p>small lorem ipsum lorem ipsuma and again lorem lorem lorem</p>
      <div className="project-items">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}
