import React from 'react'
import Example_1 from './Images/fn.png'
import Example_2 from './Images/fn.eg.png'
import Example_3 from './Images/cls.png'
import Example_4 from './Images/cls_eg.png'

function Components() {
  return (
    <>
      <div className='container'>
        <h1 className='intro_heading text-center text-5xl font-bold'>React Components</h1>
        <div className='row justify-center items-center mt-3'>
          <div className='col-md-11 text-lg p-4 bg-blue-100 mb-4 history_box'>

            <p><span>✅</span> Components in React are the code blocks representing the UI elements.</p>
            <p><span>✅</span> These blocks are reusable and independent like functions in JS and are responsible for representing the elements on the Web Page.</p>
            <p><span>✅</span> Components in React basically return a piece of JSX code that tells what should be rendered on the screen.</p>

            <h2 className='py-4 text-2xl text-red-500'>Types of Components :</h2>

            <h3>1. Functional Components</h3>
            <h3>2. Class Components</h3>

            <h2 className='pt-4 pb-2 text-2xl text-green-600'>Functional Components:</h2>

            <p><span>✅</span> Functional components are simply javascript functions. </p>
            <p><span>✅</span> These functions may or may not receive data as parameters. </p>
            <p className='p-2'>Simplest way to write a Function component:</p>
            <p className='flex justify-center items-center py-3'><img src={Example_1} alt='Not Found'></img></p>
            <br />           
            <p className='p-2'>Example :</p>
            <p className='flex justify-center items-center py-3'><img src={Example_2} alt='Not Found'></img></p>

            <h2 className='pt-4 pb-2 text-2xl text-green-600'>Class Components:</h2>

            <p><span>✅</span> The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other.</p>
            <p><span>✅</span> We can pass data from one class component to another class component. We can use JavaScript ES6 classes to create class-based components in React.</p>
            <p><span>✅</span> The component has to include the <span className='text-red-500'>extends React.Component</span> statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
            <p><span>✅</span> The component also requires a <span className='text-red-500'>render()</span> method, this method returns HTML.</p>
            <p className='p-2'>Simplest way to write a Class component:</p>
            <p className='flex justify-center items-center py-3'><img src={Example_3} alt='Not Found'></img></p>
            <br />
            <p className='p-2'>Example :</p>
            <p className='flex justify-center items-center py-3'><img src={Example_4} alt='Not Found'></img></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Components
