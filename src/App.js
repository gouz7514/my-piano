import React from 'react';
import Home from './pages/Home';
import Lalaland from './pages/Lalaland';
import MerryGoRound from './pages/MerryGoRound'
import HarryPotter from './pages/HarryPotter'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Lalaland' component={Lalaland}/>
        <Route path='/MerryGoRound' component={MerryGoRound}/>
        <Route path='/HarryPotter' component={HarryPotter}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App