const initialState = {
  projects: [],
};

const reducerProjects = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: state.projects.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducerProjects;
