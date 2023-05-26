import "./projects__dark.css";

export default function Item() {
  return (
    <div className="project-item">
      <img src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg" alt="placeholder" className="project-item__img" />
      <div className="project-item__text">
        <h4>Project title</h4>
        <h5>Tech Stack</h5>
        <p>Insert project description lorm lorem ipsum</p>
        <i className="devicon-github-original"></i>
      </div>
    </div>
  );
}
