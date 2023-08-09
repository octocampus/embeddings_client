import './App.css';
import User from './user.js'
import Admin from './admin'
import Model from './model';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
        <Route path="/" exact component={Admin} />
        <Route path="/chat/:chatId" component={User} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
