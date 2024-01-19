import React from 'react'
import Image_1 from './Images/react_img.png'

function Intro() {
   return (
      <div className='container'>
         <div>
            <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Introduction</h1>
            <div>
               <div className='row'>
                  <div className='mt-6 flex flex-wrap-reverse justify-center items-center gap-8 py-12 mb-8 history_box bg-blue-100'>
                     <div className='col-md-5 p-4 relative text-lg bg-slate-300 intro_box key_points'>
                        <h2 className='text-xl text-green-600 font-semibold animate-bounce'>Key Points : </h2>

                        <p>✅ React is a JavaScript library for building user interfaces.</p>

                        <p>✅ It was developed by Facebook and is often used for building single-page applications and mobile applications.</p>

                        <p>✅ It uses JSX, a syntax extension that allows you to write your UI components in a syntax that looks similar to XML or HTML.</p>

                        <p>✅ It uses a Virtual DOM to make updates more efficient. Instead of updating the entire page, it updates only the necessary parts.</p>

                        <p>✅ It follows a unidirectional data flow. Data moves in one direction, from parent to child components.</p>

                     </div>

                     <div className='col-md-6'>
                        <img src={Image_1} alt='Not Found'></img>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </div>
   )
}

export default Intro
