const addProject = (project) => {
  return {
    type: "ADD_PROJECT",
    payload: project,
  };
};

export { addProject };
