import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Intro from './components/Intro'
import History from './components/History';
import Components from './components/Components';
import DOM from './components/DOM';
import Props from './components/Props';
import PropsDrilling from './components/PropsDrilling';
import CallbackFn from './components/CallbackFn';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Usecontext from './components/Usecontext';
import Usememo from './components/Usememo';
import Useref from './components/Useref';
import Interview from './components/Interview';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route index element={ <Home/> } />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/History" element={<History />} />
        <Route path='/Props' element={<Props />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/DOM" element={<DOM />} />
        <Route path='/PropsDrilling' element={<PropsDrilling />} />
        <Route path="/Usecontext" element={<Usecontext />} />
        <Route path="/Useeffect" element={<Useeffect />} />
        <Route path='/Usememo' element={<Usememo />} />
        <Route path="/Useref" element={<Useref />} />
        <Route path="/Usestate" element={<Usestate />} />
        <Route path='/CallbackFn' element={<CallbackFn />} />
        <Route path='/Interview' element={<Interview />} />
      </Routes>
    </Router>
  );
}

export default App;
