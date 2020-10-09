const initialState = {
  projects: [],
};

const reducerProjects = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
};

export default reducerProjects;
