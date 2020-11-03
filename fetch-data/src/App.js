import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Gnb from './components/Gnb';
import Header from './components/Header';
import Login from './Routes/Login';
import Main from './Routes/Main';

function App() {
  return (
    <>
      <Gnb></Gnb>
      <Header></Header>

      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Redirect path="*" to="/"/>
      </Switch>
    </>
  );
}

export default App;
