// Dependencies
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { addProject } from "../store/actions/projects";

//Components
import Header from "../components/Header";

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

const handleAddProject = (props) => {
  props.addProject({
    title: "Second project title",
    description: "Second project description",
  });
};

// Component
const Home = (props) => {
  console.log(props.projects);
  return (
    <main>
      <Header />
      <div>
        <h1>Home</h1>
        <button onClick={() => handleAddProject(props)}>Add project</button>
        {renderProjects(props.projects)}
      </div>
    </main>
  );
};

// PropTypes
Home.propTypes = {};

// Redux
const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  };
};

const mapDispatchToProps = {
  addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
