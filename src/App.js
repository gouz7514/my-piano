import React from 'react';
import Home from './pages/Home';
import Lalaland from './pages/Lalaland';
import HowlsMovingCastle from './pages/HowlsMovingCastle'
import HarryPotter from './pages/HarryPotter'
import CinemaParadiso from './pages/CinemaParadiso'
import TheClassic from './pages/TheClassic';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Lalaland' component={Lalaland}/>
        <Route path='/HowlsMovingCastle' component={HowlsMovingCastle}/>
        <Route path='/HarryPotter' component={HarryPotter}/>
        <Route path='/CinemaParadiso' component={CinemaParadiso}/>
        <Route path='/TheClassic' component={TheClassic}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App