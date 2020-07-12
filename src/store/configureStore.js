// Dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import rootReducer from "./reducers/rootReducer";

const configureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default configureStore;
