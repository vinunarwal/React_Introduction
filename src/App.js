import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Intro from './components/Intro';
import History from './components/History';
import Components from './components/Components';
import DOM from './components/DOM';
import Props from './components/Props';
import Usecontext from './components/Usecontext';
import Usestate from './components/Usestate';
import Usememo from './components/Usememo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/Intro' element={<Intro />}></Route>
          <Route path='/' element={<History />}></Route>
          <Route path='/' element={<Components />}></Route>
          <Route path='/' element={<DOM />}></Route>
          <Route path='/' element={<Props />}></Route>
          <Route path='/' element={<Usecontext />}></Route>
          <Route path='/' element={<Usememo />}></Route>
          <Route path='/' element={<Usestate />}></Route>
        </Route>

      </Routes>
    </Router>

  );
}

export default App;