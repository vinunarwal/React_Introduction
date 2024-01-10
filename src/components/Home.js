import React from 'react'
import Navbar from './Navbar';
import Main from './Main'
import Intro from './Intro'
import History from './History';
import DOM from './DOM';
import Components from './Components';
import Props from './Props';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import Usecontext from './Usecontext';
import Usememo from './Usememo';
function Home() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Intro/>
    <History/>
    <DOM/>
    <Components/>
    <Props/>
    <Usestate/>
    <Useeffect/>
    <Usecontext/>
    <Usememo/>
    </>

  )
}

export default Home
