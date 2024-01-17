import React from 'react'
import Usecontext_eg_1 from './Images/usecontxt1.png'
import Usecontext_eg_2 from './Images/usecontxt2.png'
import Usecontext_eg_3 from './Images/usecontxt3.png'

function Usecontext() {
  return (
    <>
      <div className='container'>
        <h1 className='intro_heading text-center text-5xl font-bold mt-4'>UseContext Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
          <div className='col-md-11 text-lg bg-blue-100 py-4 history_box'>
            <p>✅ It is used to consume values from a React context.</p>
            <p>✅ It allows functional components to subscribe to a context and read its current value.</p>
            <p>✅ This hook is particularly useful when you have a global state or configuration that you want to share across multiple components without passing props through the entire component tree.</p>
            <p className='pl-7 py-2'>Example of UseContext :</p>
            <div className='pics md:flex gap-4 py-2'>
              <p className='flex justify-center items-center py-3'>
                <img className='hover:scale-110' src={Usecontext_eg_1} alt='Not Found..'></img></p>
              <p className='flex justify-center items-center py-3'>
                <img className='hover:scale-110' src={Usecontext_eg_2} alt='Not Found..'></img></p>
              <p className='flex justify-center items-center py-3'>
                <img className='hover:scale-110' src={Usecontext_eg_3} alt='Not Found..'></img></p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Usecontext
