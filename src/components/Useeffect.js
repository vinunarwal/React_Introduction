import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

function UseEffect() {

  const initialCode = `  import React, { useState, useEffect } from 'react';

  function ExampleComponent() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []); 
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div>
        <h2>Example Component</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExampleComponent;
  
  `;

  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };



  return (
    <>
      <div className='container'>
        <h1 className='intro_heading text-center text-5xl font-bold mt-4'>UseEffect Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
          <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
            <p><span>✅</span> It is used for side effects in functional components.</p>
            <p><span>✅</span> Side effects can include data fetching, subscriptions, manual DOM manipulations, and other operations that are not part of the component's rendering logic.</p>
            <p className='pl-7 py-2'>Example of UseState :</p>
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
  )
}

export default UseEffect
