import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import CitiesRanked from '../CitiesRanked/CitiesRanked';
import Resources from '../Resources/Resources';
import Community from '../Community/Community';

import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cities">
            <CitiesRanked />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
