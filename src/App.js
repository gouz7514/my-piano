import React from 'react';
import Home from './pages/Home';
import Lalaland from './pages/Lalaland';
import HowlsMovingCastle from './pages/HowlsMovingCastle'
import HarryPotter from './pages/HarryPotter'
import CinemaParadiso from './pages/CinemaParadiso'
import Tiffany from './pages/Tiffany';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/my-piano/' exact component={Home}/>
        <Route path='/my-piano/Lalaland' component={Lalaland}/>
        <Route path='/my-piano/HowlsMovingCastle' component={HowlsMovingCastle}/>
        <Route path='/my-piano/HarryPotter' component={HarryPotter}/>
        <Route path='/my-piano/CinemaParadiso' component={CinemaParadiso}/>
        <Route path='/my-piano/Tiffany' component={Tiffany}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App