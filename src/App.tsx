import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Screens/Header/Header';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/">
       <Header />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
