import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

function Redux() {
   const initialCode = `  // actions.js
export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

// reducers.js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;

// App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

  `;

   const [code, setCode] = useState(initialCode);

   const handleCodeChange = (newCode) => {
      setCode(newCode);
   };

   return (
      <>
         <div className='container'>
            <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Redux</h1>
            <div className='row flex justify-center items-center pt-6'>
               <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
                  <p>✅ Redux is a popular state management library for JavaScript applications, particularly in the context of React applications.</p>
                  <p>✅ It provides a predictable state container that helps manage the state of an application in a more organized and scalable manner.</p>
                  <p className='p-2'>Key Concepts of Redux:</p>
                  <p className='pl-7'><span className='font-bold block'>1. Store:</span> Redux stores the state of your entire application in a single JavaScript object called the "store" or we can say that store is where your application's state lives.This state represents the current state of your application at any given point in time.</p>
                  <p className='pl-7'><span className='font-bold block'>2. Actions: </span> Actions are plain JavaScript objects that represent something that has happened in the application. They are dispatched using the store.dispatch() method. Actions must have a type property that indicates the type of action being performed. They can also have additional data attached to them.</p>
                  <p className='pl-7'><span className='font-bold block'>3. Reducers:</span> Reducers are pure functions that specify how the application's state changes in response to actions dispatched to the store. Each reducer takes the current state and an action as arguments, and returns the new state. Reducers are combined into a single root reducer using Redux's combineReducers() function.</p>
                  <p className='pl-7'><span className='font-bold block'>4. Dispatch:</span> This is the method you use to send actions to the Redux store. Actions are dispatched using the store.dispatch() method. This is typically done in React components in response to user interactions or other events.</p>
                  <p className='pl-7'><span className='font-bold block'>5. Connect: </span> This is a function provided by the react-redux library that allows React components to interact with the Redux store. It connects a component to the Redux store so it can access state and dispatch actions.</p>
                  <p className='pl-7 pt-2 pb-3 text-green-600'>Basic example of Redux :</p>
                  <div className='flex justify-center items-center mb-5'>
                     <MonacoEditor
                        width="60%"
                        height="550px"
                        language="javascript"
                        theme="vs-dark"
                        value={code}
                        options={{
                           selectOnLineNumbers: true,
                        }}
                        onChange={handleCodeChange}
                        className="py-4"
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Redux;
