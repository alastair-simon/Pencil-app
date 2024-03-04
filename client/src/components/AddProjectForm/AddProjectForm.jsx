import { postProject } from "../../ApiService";
import "./AddProjectForm.css";
import { useState } from "react";

export function AddProject({ formVisibilty, setFormVisibilty, setProjects }) {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newContributors, setNewContributors] = useState(0);

  function handleChangeName(e) {
    setNewName(e.target.value);
  }

  function handleChangeDescription(e) {
    setNewDescription(e.target.value);
  }

  function handleChangeContributors(e) {
    setNewContributors(e.target.value);
  }

const hideForm = () => {
  if (formVisibilty) {
    setFormVisibilty(false);
  }
};

  async function handleSubmit(e) {
    e.preventDefault();

    if (newDescription && newContributors && newName) {
      const newOwner = "user";
      const project = {
        projectOwner: newOwner,
        description: newDescription,
        projectName: newName,
        numberContributors: newContributors,
      };
      await postProject(project);
      setProjects((state) => [...state, project]);

      setNewDescription("");
      setNewName("");
      setNewContributors("");
    } else {
      alert("Please complete form");
    }
  }

  return (
    <>
      <form className="form">
        <button onClick={hideForm}>x</button>
        <h2>Create new project</h2>

        <div>
          <label>ADD PROJECT NAME</label>
          <input
            value={newName}
            name="name"
            type="text"
            onChange={handleChangeName}
            placeholder="Write a project name.."
          ></input>
        </div>

        <div>
          <label>DESCRIPTION</label>
          <input
            value={newDescription}
            name="description"
            type="text"
            onChange={handleChangeDescription}
            placeholder="Add a description.."
          ></input>
        </div>

          <div>
            <label>CONTRIBUTORS</label>
            <input
              type="number"
              // value={newDescription}
              name="tentacles"
              min="10"
              max="100"
              onChange={handleChangeContributors}
            />
          </div>

        <button type="submit" onClick={handleSubmit}>Create</button>
      </form>
    </>
  );
}
