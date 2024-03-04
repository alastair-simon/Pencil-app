import React, { useState, useEffect } from "react";
import "./DropDownList.css";
import { fetchProjects } from "../../ApiService.js";

export function DropDownList({ onSelectProject }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function fetchAndSet() {
      const data = await fetchProjects();
      setProjects(data);
    }
    fetchAndSet();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    onSelectProject(projectId); // Pass selected project ID to parent component
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        +
      </button>
      {isDropdownOpen ? (
        <ul className="dropdown-content">
          {projects.map((project, i) => {
            return (
              <li key={i} onClick={() => handleProjectSelect(project._id)}>
                <a>{project.projectName}</a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
