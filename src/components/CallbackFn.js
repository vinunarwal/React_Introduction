import React from 'react'
import Callback_eg_1 from './Images/callback1.png'
import Callback_eg_2 from './Images/callback2.png'

function CallbackFn() {
   return (
      <>
         <div className='container'>
            <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Callback Function</h1>
            <div className='row flex justify-center items-center pt-6'>
               <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
                  <p>✅ A callback function is a function that is passed as a parameter to another function or component.</p>
                  <p>✅ Callback functions are commonly used in React to handle events, asynchronous operations, and to communicate between parent and child components.</p>
                  <p className='pl-4 py-1'>Here are a few scenarios where callback functions are commonly used in React :</p>
                  <h2 className='py-2 pl-2 text-red-500 font-semibold text-xl'>1. Event Handling:</h2>
                  <p>✅ Callback functions are often used to handle events in React components. For example, in a button component, you might define an onClick callback function to handle the button click event.</p>
                  <p className='flex justify-center items-center py-3'>
                     <img className='example' src={Callback_eg_1} alt='Not Found..'></img></p>
                  <h2 className='py-2 pl-2 text-red-500 font-semibold text-xl'>2. Parent-Child Communication:</h2>
                  <p>✅ Callback functions are often used for communication between parent and child components. The parent component can pass a callback to the child component, allowing the child to communicate back to the parent.</p>
                  <p className='flex justify-center items-center py-3'>
                     <img className='example' src={Callback_eg_2} alt='Not Found..'></img></p>
               </div>
            </div>
         </div>
      </>
   )
}

export default CallbackFn
