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
import Footer from './components/Footer';
import Redux from './components/Redux';
import Lifecycle from './components/Lifecycle';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/History" element={<History />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/DOM" element={<DOM />} />
        <Route path='/Props' element={<Props />} />
        <Route path='/PropsDrilling' element={<PropsDrilling />} />
        <Route path='/CallbackFn' element={<CallbackFn />} />
        <Route path="/Usestate" element={<Usestate />} />
        <Route path="/Useeffect" element={<Useeffect />} />
        <Route path="/Usecontext" element={<Usecontext />} />
        <Route path='/Usememo' element={<Usememo />} />
        <Route path="/Useref" element={<Useref />} />
        <Route path='/Lifecycle' element={<Lifecycle />} />
        <Route path="/Redux" element={<Redux />} />
        <Route path='/Interview' element={<Interview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
