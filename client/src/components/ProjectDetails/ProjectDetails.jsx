import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLikes } from "../../ApiService.js";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.jsx";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import "./ProjectDetails.css";

export function ProjectDetails() {
  const [likedArtists, setLikedArtists] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAndSet() {
      const likes = await getLikes(id);
       setLikedArtists(likes);
    }
    fetchAndSet();
  }, []);

  return (
    <div className="wrapper">
      {/* {projects.map((project, i) => {
        return <PageTitle key={i} page={project.projectName} />;
      })} */}

      <div className="titles">
        <p>Chosen artists</p>
        <p>team members</p>
        <p>votes</p>
      </div>
      <ul className="project-details-List">
        {likedArtists.map((artist, i) => {
          return (
            <ProjectDetailsItem key={i} artist={ artist} />
        )
      })}
      </ul>
    </div>
  );
}
