import "./ProjectDetailsItem.css";

export function ProjectDetailsItem({ artist }) {



  return (
    <div className="projectItemWrap">
      <p>{artist.name}</p>
      <div className="project-collaborators">
        <img src=""/>
      </div>
      <div className="votes">
       <p>0</p> <button>up</button>
       <p>0</p> <button>down</button>
      </div>
    </div>
  );
}
