import React from 'react';
import Home from './pages/Home';
import Lalaland from './pages/Lalaland';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Lalaland' component={Lalaland}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App