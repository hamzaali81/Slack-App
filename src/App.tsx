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
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Components/Screens/Login/Login';
import { auth } from './firebase';

// npm i react-spinkit

function App() {
  const [user, loading] = useAuthState(auth);
  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
             <img src="" alt="" />

             <Spinner 
             name="ball-spin-fade-loader"
             color="purple"
             fadeIn="none"
             />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  
  return (
    <div className="app">
    <Router>
     {!user ? (
       <Login />
     ): (  
     <>
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
    </>
     )}
  </Router>

    </div>
  )
}

export default App;


const AppLoading = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
const AppLoadingContents = styled.div``;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;