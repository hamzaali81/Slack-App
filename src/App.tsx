import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/">
        <h1>This is Home Page</h1>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
