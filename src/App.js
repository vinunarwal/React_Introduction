import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Intro from './components/Intro'
import History from './components/History';
import DOM from './components/DOM';
import Components from './components/Components';
import Props from './components/Props';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Usecontext from './components/Usecontext';
import Usememo from './components/Usememo';
import Interview from './components/Interview';
import PropsDrilling from './components/PropsDrilling';
import Useref from './components/Useref';

function App() {
  return (
    <>
    <Navbar />
    <Main/>
    <Intro/>
    <History/>
    <DOM/>
    <Components/>
    <Props/>
    <PropsDrilling />
    <Usestate/>
    <Useeffect/>
    <Usecontext/>
    <Usememo/>
    <Useref />
    <Interview/>
    </>
  );
}

export default App;