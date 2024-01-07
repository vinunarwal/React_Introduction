import React from 'react'
import Example_usestate from './Images/usestate_eg.png'

function UseEffect() {
  return (
    <>
    <div className='container'>
    <h1 className='intro_heading text-center text-5xl font-bold'>UseEffect Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
            <div className='col-md-11 text-lg bg-slate-100 py-4'>
                <p><span>✅</span> It is used for side effects in functional components.</p>
                <p><span>✅</span> Side effects can include data fetching, subscriptions, manual DOM manipulations, and other operations that are not part of the component's rendering logic.</p>                   
                <p className='pl-7 py-2'>Example of UseState :</p>
                <p className='flex justify-center items-center py-3'><img src={Example_usestate} alt='Not Found..'></img></p>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default UseEffect
