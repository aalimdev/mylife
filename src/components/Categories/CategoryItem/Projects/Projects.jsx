import "./projects.css";

function Projects() {
  const blogSD = new Date("01/31/2022");
  const daySD = Math.round(
    (new Date().getTime() - blogSD.getTime()) / (1000 * 3600 * 24)
  ).toString();

  return (
    <div className="projects">
      <h3>PROJECTS</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=LelifxOrzvw&t=3999s">
            {" "}
            MERN BLOG PROJECT - LAMA DEV{" "}
          </a>
          <br />
          <span>
            Started on <b> <i>{blogSD.toDateString()}</i> </b>
            <br />
             Days studying:{" "}
            <b><u>{Math.round(daySD.toString())}</u></b>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
