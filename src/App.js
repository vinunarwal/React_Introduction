import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro'
import History from './components/History';
import Components from './components/Components';
import Props from './components/Props';
import DOM from './components/DOM';
import UseState from './components/Usestate';
import Example from './components/Example';
import UseEffect from './components/Useeffect';
import UseMemo from './components/Usememo';
import Interview from './components/Interview';
import { quesAns } from './components/data/Ques';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/*<Sidebar/>*/}
        <Intro/>
        <History/>
        <Components/>
        <Props/>
        <DOM/>
        <UseState/>
        <UseEffect/>
        <UseMemo/>
        <Interview data={quesAns} />
        {/*<Example/>*/}
      
      </header>
    </div>
  );
}

export default App;