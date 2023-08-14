import './App.css';
import User from './user.js';
import Admin from './admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {useState} from 'react'
function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/user/:chatId" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
