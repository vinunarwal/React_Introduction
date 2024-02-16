import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

function Usestate() {
   const initialCode = `  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
  
  export default Counter;
  `;

   const [code, setCode] = useState(initialCode);

   const handleCodeChange = (newCode) => {
      setCode(newCode);
   };

   return (
      <>
         <div className='container'>
            <h1 className='intro_heading text-center text-5xl font-bold mt-4'>UseState Hook</h1>
            <div className='row flex justify-center items-center pt-6'>
               <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
                  <p><span>✅</span> It is a built-in hook that allows functional components to have state variables.</p>
                  <p><span>✅</span> It is a function that takes an initial state as an argument and returns an array with two elements:</p>
                  <p className='pl-7'>1. the current state value,</p>
                  <p className='pl-7'>2. and a function that lets you update it.</p>
                  <p className='pl-7 py-2 text-green-600'>Example of UseState :</p>
                  <div className='flex justify-center items-center mb-4'>
                     <MonacoEditor
                        width="70%"
                        height="400px"
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

export default Usestate;
