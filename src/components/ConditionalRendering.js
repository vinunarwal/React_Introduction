import React from 'react'

function ConditionalRendering() {
  return (
    <>
    <div className='container-fluid'>
      <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Conditional Rendering</h1>
      <div className='row flex justify-center items-center pt-6'>
        <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
          <p><span>✅</span> It is used for side effects in functional components.</p>
          <p><span>✅</span> Side effects can include data fetching, subscriptions, manual DOM manipulations, and other operations that are not part of the component's rendering logic.</p>
          <p className='pl-7 py-2'>Example of Conditional Rendering :</p>
          <p className='flex justify-center items-center py-3'>
            <img className='example' src={Example_useffect} alt='Not Found..'></img></p>
        </div>
      </div>
    </div>
  </>
  )
}

export default ConditionalRendering
