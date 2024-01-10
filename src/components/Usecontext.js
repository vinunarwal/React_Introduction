import React from 'react'

function Usecontext() {
  return (
    <>
    <div className='container'>
    <h1 className='intro_heading text-center text-5xl font-bold'>UseContext Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
            <div className='col-md-11 text-lg bg-slate-100 py-4'>
                <p>✅ It is a built-in hook that allows functional components to have state variables.</p>
                <p>✅ It is a function that takes an initial state as an argument and returns an array with two elements: </p>                   
                <p className='pl-7'>1. the current state value,</p>
                <p className='pl-7'>2. and a function that lets you update it.</p>
                <p className='pl-7 py-2'>Example of UseContext :</p>
                {/*<p className='flex justify-center items-center py-3'><img src={Example_usestate} alt='Not Found..'></img></p>*/}
                {/*<p className='flex justify-center items-center py-3'><img src={Output_usestate} alt='Not Found..'></img></p>*/}
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Usecontext
