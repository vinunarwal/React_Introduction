import React from 'react'

function Lifecycle() {
   return (
      <>
         <div className='container'>
            <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Lifecycle of Components</h1>
            <div className='row flex justify-center items-center pt-6'>
               <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
                  <p>✅ In React, components go through several lifecycle stages from initialization to unmounting.</p>
                  <p className='p-2'> Let we disuss each stage : </p>

                  <label className='font-bold p-1'>1. Initialization:</label>
                  <p>🔹When a component is created, it goes through an initialization phase.</p>
                  <p>🔹The constructor is called, where initial state and bindings are set up.</p>

                  <label className='font-bold p-1'>2. Mounting:</label>
                  <p>🔹It  is the stage of birth of component</p>
                  <p>🔹The component is rendered for the first time and mounted to the DOM.</p>
                  <p>🔹render() method is called to generate the component's UI.</p>
                  <p>🔹componentDidMount() is invoked after the component is mounted, which is a good place to perform tasks like data fetching, setting up subscriptions, or interacting with the DOM.</p>

                  <label className='font-bold p-1'>3. Updating:</label>
                  <p>🔹Occurs when a component's state or props change.</p>
                  <p>🔹render() method is called again to reflect the updated state or props.</p>
                  <p>🔹componentDidUpdate() is invoked after the component is updated, providing an opportunity to perform side effects after a render.</p>

                  <label className='font-bold p-1'>4. Unmounting:</label>
                  <p>🔹It  is the stage of death of component</p>
                  <p>🔹Occurs when a component is removed from the DOM.</p>
                  <p>🔹componentWillUnmount() is invoked just before the component is unmounted, allowing cleanup tasks like cancelling network requests or removing event listeners.</p>

               </div>
            </div>

         </div>
      </>
   )
}

export default Lifecycle
