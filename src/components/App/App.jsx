import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import CitiesRanked from '../CitiesRanked/CitiesRanked';
import Resources from '../Resources/Resources';
import Community from '../Community/Community';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cities" element={<CitiesRanked />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
