import React from 'react'
import Example_usestate from './Images/useState1.png'
import Output_usestate from './Images/usestate_output.png'

function Usestate() {
  return (
    <>
      <div className='container'>
        <h1 className='intro_heading text-center text-5xl font-bold mt-4'>UseState Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
          <div className='col-md-11 text-lg bg-blue-100 py-4 history_box'>
            <p><span>✅</span> It is a built-in hook that allows functional components to have state variables.</p>
            <p><span>✅</span> It is a function that takes an initial state as an argument and returns an array with two elements: </p>
            <p className='pl-7'>1. the current state value,</p>
            <p className='pl-7'>2. and a function that lets you update it.</p>
            <p className='pl-7 py-2'>Example of UseState :</p>
            <div className=''>
              <p className='flex justify-center items-center py-3'>
                <img className='example' src={Example_usestate} alt='Not Found..'></img></p>
              <p className='flex justify-center items-center py-3'>
                <img src={Output_usestate} alt='Not Found..'></img></p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Usestate
