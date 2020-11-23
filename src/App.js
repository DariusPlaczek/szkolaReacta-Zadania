import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './components/Pages/Home';
import { LeftSideBar, Content } from './components/Container'

function App() {

  return (
    <Router>
      <LeftSideBar />
      <Content>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Content>
    </Router>
  );
}

export default App;