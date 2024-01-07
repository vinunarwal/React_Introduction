import React from 'react'

function Usememo() {
  return (
    <>
    <div className='container'>
    <h1 className='intro_heading text-center text-5xl font-bold'>UseMemo Hook</h1>
        <div className='row flex justify-center items-center pt-6'>
            <div className='col-md-11 text-lg bg-slate-100 py-4'>
                <p><span>✅</span> It  is used to memoize the result of a computation, so that the computation is only executed when necessary. </p>
                <p><span>✅</span> This can help optimize performance by avoiding unnecessary calculations or expensive operations.</p>                   
                <p className='pl-7 py-2'>Example of UseMemo :</p>
              
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Usememo
