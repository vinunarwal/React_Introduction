import React from 'react'
import Usememo_eg from './Images/usememo1.png'

function Usememo() {
  return (
    <>
      <div className='container'>
        <h1 className='intro_heading text-center text-5xl font-bold mt-4'>UseMemo Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
          <div className='col-md-11 text-lg bg-blue-100 py-4 history_box'>
            <p><span>✅</span> It  is used to memoize the result of a computation, so that the computation is only executed when necessary. </p>
            <p><span>✅</span> This can help optimize performance by avoiding unnecessary calculations or expensive operations.</p>
            <p className='pl-7 py-2'>Example of UseMemo :</p>
            <p className='flex justify-center items-center py-3'>
              <img className='example' src={Usememo_eg} alt='Not Found..'></img></p>
            <p className='pl-5'>By using useMemo, the expensive computation is only performed when the data array changes. This can help optimize the performance of your application by avoiding unnecessary calculations. Keep in mind that useMemo is beneficial in scenarios where the computation is expensive, and the result does not need to be recalculated on every render.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Usememo
