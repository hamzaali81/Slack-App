import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import Header from './Components/Screens/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import Chat from './Components/Chat/Chat';

function App() {
  return (
    <Router>
    <div>
       <Header />
       <AppBody>
       <SideBar />
      <Switch>
        <Route path="/">
          {/* Chat */}
          <Chat />
        </Route>
      </Switch>
      </AppBody>
    </div>
  </Router>
  )
}

export default App;


const AppBody = styled.div`
display: flex;
height: 100vh;
`;