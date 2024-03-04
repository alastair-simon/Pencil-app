import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProjects, fetchArtists } from "../../ApiService.js";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.jsx";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import "./ProjectDetails.css";

export function ProjectDetails() {
  const [projects, setProjects] = useState([]);
  const [artists, setArtists] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAndSet() {
      const projects = await fetchProjects();

      const filteredProjects = projects.filter((project) =>
        project._id.includes(id)
      );

      const filteredArtists = filteredProjects.reduce((acc, project) => {
        acc.push(...project.artists);
        return acc;
      }, []);

      setProjects(filteredProjects);
      setArtists(filteredArtists);
    }
    fetchAndSet();
  }, []);

  return (
    <div className="wrapper">
      {projects.map((project, i) => {
        return <PageTitle key={i} page={project.projectName} />;
      })}

      <div className="titles">
        <p>Chosen artists</p>
        <p>team members</p>
        <p>votes</p>
      </div>
      <ul className="project-details-List">
        {artists.map((artist, i) => {
          return <ProjectDetailsItem key={i} artist={artist} />;
        })}
      </ul>
    </div>
  );
}
