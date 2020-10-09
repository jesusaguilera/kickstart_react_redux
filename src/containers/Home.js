// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addProject } from "../store/actions/projects";

//Components
import Header from "../components/Header";


// Component
const Home = (props) => {

  // useState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useDispatch
  const dispatch = useDispatch();
  const addProjectDispatch = (project) => dispatch(addProject(project));

  // useSelector
  const projects = useSelector(state => state.projects.projects); 

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
    addProjectDispatch({
      title,
      description,
    });
  };

  return (
    <main>
      <Header />
      <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
          <textArea value={title} onChange={e => setDescription(e.currentTarget.value)} />
          <button type="submit">Add project</button>
        </form>
        {renderProjects(projects)}
      </div>
    </main>
  );
};

// PropTypes
Home.propTypes = {};

// Redux
// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects.projects,
//   };
// };

// const mapDispatchToProps = {
//   addProject,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
