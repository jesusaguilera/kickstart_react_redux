// Get
const getProjects = () => {
  return (dispatch) => {
    return fetch("https://api.mocki.io/v1/0350b5d5")
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(getProjectsSuccess(responseJson))
      });
  }
};

const getProjectsSuccess = (payload) => {
  return { 
    type: "GET_PROJECTS", 
    payload 
  }
}
// @Get

// Add
const addProject = (project) => {
  return {
    type: "ADD_PROJECT",
    payload: project,
  };
};
// @Add

export {getProjectsSuccess,  getProjects, addProject };
