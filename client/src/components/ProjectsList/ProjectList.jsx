import { useState, useEffect } from "react";
import { fetchProjects } from "../../ApiService.js";
import "./ProjectList.css";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import { ProjectListItem } from "../ProjectListItem/ProjectListItem.jsx";
import { AddProject } from "../AddProjectForm/AddProjectForm.jsx";

export function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [formVisibilty, setFormVisibilty] = useState(false);

  useEffect(() => {
    async function fetchAndSet() {
      const data = await fetchProjects();
      setProjects(data);
    }
    fetchAndSet();
  }, []);

  const showForm = () => {
    if (!formVisibilty) {
      setFormVisibilty(true);
    }
  };

  /* create function to randomise thumb image, not same as last */

  return (
    <div className="wrapper">
      <PageTitle page="Projects" />
      {formVisibilty ? (
        <AddProject
          visiblity={(formVisibilty, setFormVisibilty)}
          setProjects={setProjects}
        />
      ) : null}

      <div className="filter-addproject">
        <select name="pets" className="selected">
          <option value="">Filter</option>
          <option value="dog">Start date</option>
          <option value="cat">End date</option>
        </select>

        <button className="add-project" onClick={showForm}>
          Add project
        </button>
      </div>

      <ul className="list projects-thumbs">
        {projects.map((project, i) => {
          return <ProjectListItem key={i} project={project} />;
        })}
      </ul>
    </div>
  );
}
