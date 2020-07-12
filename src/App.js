// Dependencies
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Store
import configureStore from "./store/configureStore";

// Containers
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

const store = configureStore();

function App() {
  useEffect(() => {
    document.title = "jaguilera";
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
