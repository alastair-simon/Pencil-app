import "./ProjectListItem.css";
import { Link } from "react-router-dom";

export function ProjectListItem({ project }) {
  return (
    <div className="projectThumbWrap">
      <Link to={`/projectDetails/${project._id}`}><div className="projectThumb"></div></Link>
      <div>
        <h3>{project.projectName}</h3>
        <p>{project.numberContributors} Artists</p>
      </div>
    </div>
  );
}
