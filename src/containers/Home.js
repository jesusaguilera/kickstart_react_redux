// Dependencies
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getProjects, addProject } from "../store/actions/projects";

//Components
import Header from "../components/Header";

const Home = (props) => {
  
  // useState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useSelector
  const projects = useSelector((state) => state.projects.projects);

  // useDispatch
  const dispatch = useDispatch();
  const addProjectDispatch = (project) => dispatch(addProject(project));

  // useEffects
  useEffect(() => {
    const getProjectsDispatch = () => dispatch(getProjects());
    getProjectsDispatch();
    console.log("ho", projects);
  }, []);

  // Render projects
  const renderProjects = (projects) => {
    return projects.map((project, index) => {
      return (
        <div className="c-projects__wrapper" key={index}>
          <p>{project.title}</p>
          <p>{project.description}</p>
        </div>
      );
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if(title.trim() === "" || description.trim() === "") {
      alert("Debe rellenar todos los campos")
      return;
    }

    // Send new project
    addProjectDispatch({
      title,
      description,
    });

    // Clean form
    cleanForm();
  };

  // Clean form
  const cleanForm = () => {
    setTitle("");
    setDescription("");
  }

  return (
    <main>
      <Header />
      <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <button type="submit">Add project</button>
        </form>
        {renderProjects(projects)}
      </div>
    </main>
  );
};

export default Home;
