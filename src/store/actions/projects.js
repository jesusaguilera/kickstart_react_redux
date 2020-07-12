const updateProject = (project) => {
  return {
    type: "ADD_PROJECT",
    payload: project,
  };
};

export { updateProject };
