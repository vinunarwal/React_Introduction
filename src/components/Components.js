import React from 'react'
import Example_1 from './Images/funcmp1.png'
import Example_2 from './Images/fn1.png'
import Example_3 from './Images/clscmp1.png'
import Example_4 from './Images/clscmp2.png'

function Components() {
  return (
    <>
      <div className='container'>
        <h1 className='intro_heading text-center text-5xl font-bold mt-4'>React Components</h1>
        <div className='row justify-center items-center mt-3'>
          <div className='col-md-11 text-lg p-4 bg-blue-100 mb-4 history_box'>

            <p>✅ Components in React are the code blocks representing the UI elements.</p>
            <p>✅ These blocks are reusable and independent like functions in JS and are responsible for representing the elements on the Web Page.</p>
            <p>✅ Components in React basically return a piece of JSX code that tells what should be rendered on the screen.</p>

            <h2 className='py-4 text-2xl text-red-500'>Types of Components :</h2>

            <h3>1. Functional Components</h3>
            <h3>2. Class Components</h3>

            <h2 className='pt-4 pb-2 text-2xl text-green-600'>Functional Components:</h2>

            <p>✅ Functional components are simply javascript functions. </p>
            <p>✅ These functions may or may not receive data as parameters. </p>
            <p className='p-2'>Simplest way to write a Function component:</p>
            <p className='flex justify-center items-center py-3'>
              <img className='ex' src={Example_1} alt='Not Found'></img></p>
            <br />
            <p className='p-2'>Example :</p>
            <p className='flex justify-center items-center py-3'>
              <img className='example' src={Example_2} alt='Not Found'></img></p>
            <h2 className='pt-4 pb-2 text-2xl text-green-600'>Class Components:</h2>

            <p>✅ The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other.</p>
            <p>✅ We can pass data from one class component to another class component. We can use JavaScript ES6 classes to create class-based components in React.</p>
            <p>✅ The component has to include the <span className='text-red-500'>extends React.Component </span> statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
            <p>✅ The component also requires a <span className='text-red-500'>render() method </span>, this method returns HTML.</p>
            <p className='p-2'>Simplest way to write a Class component:</p>
            <p className='flex justify-center items-center py-3'>
              <img className='ex' src={Example_3} alt='Not Found'></img></p>
            <br />
            <p className='p-2'>Example :</p>
            <p className='flex justify-center items-center py-3'>
              <img className='example' src={Example_4} alt='Not Found'></img></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Components
