import React from 'react'

import Main from './Main'
import Intro from './Intro'
import History from './History';
import Components from './Components';
import DOM from './DOM';
import Props from './Props';
import PropsDrilling from './PropsDrilling';
import CallbackFn from './CallbackFn';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import Usecontext from './Usecontext';
import Usememo from './Usememo';
import Useref from './Useref';
import Interview from './Interview';

function Home() {
  return (
    <>
    <Main />
    <Intro/>
    <History/>
    <DOM/>
    <Components/>
    <Props/>
    <PropsDrilling />
    <CallbackFn />
    <Usestate/>
    <Useeffect/>
    <Usecontext/>
    <Usememo/>
    <Useref />
    <Interview/>
    </>
  )
}

export default Home
