import React from 'react'
import PD_example_1 from './Images/propD1.png'
import PD_example_2 from './Images/propD2.png'
import PD_example_3 from './Images/propD3.png'

function PropsDrilling() {
   return (
      <>
         <div className='container'>
            <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Props Drilling</h1>
            <div className='row flex justify-center items-center pt-6'>
               <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
                  <p><span>✅</span> Props drilling in React refers to the process of passing data from a parent component down to its child components through a chain of intermediate components</p>
                  <p><span>✅</span> This is necessary when a child component needs access to certain data that is initially available in a higher-level parent component. </p>
                  <p className='pl-5 py-2'> Example of Props Drilling :</p>
                  <div className='pics md:flex gap-4 py-2 items-center'>
                     <p className='py-3'>
                        <img className='hover:scale-110' src={PD_example_1} alt='Not Found..'></img></p>
                     <p className='py-3'>
                        <img className='hover:scale-110' src={PD_example_2} alt='Not Found..'></img></p>
                     <p className='py-3'>
                        <img className='hover:scale-110' src={PD_example_3} alt='Not Found..'></img></p>
                  </div>
                  <p className='pl-5'>✔️ In this example, the data flows from App to ParentComponent and finally to ChildComponent through props drilling. Keep in mind that in larger applications, using tools like React Context or state management libraries may be more appropriate to avoid excessive props drilling.</p>
               </div>
            </div>

         </div>
      </>
   )
}

export default PropsDrilling
