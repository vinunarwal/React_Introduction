import React from 'react'
import { quesAns } from './data/Ques'

const Interview = () => {
  return (
    <>
      <div className='container'>
        <h1 className='history_heading text-center text-4xl font-bold mt-4'>Interview Questions</h1>
        <div className='row mt-6 flex flex-wrap-reverse justify-center items-center gap-3 pt-6'>
          <div className='col-md-11 p-4 relative text-lg bg-blue-100 history_box mb-4'>
            <h2 className='text-xl text-red-400 font-semibold'>Front-end Interview Questions: </h2>
            {
              quesAns.map((interview, index) => {
                return (
                  <div key={index} className='ques'>
                    <h3 className='font-bold pt-5'>Ques {interview.ques}</h3>
                    <p><span className=' font-bold'>Ans.</span> {interview.ans}</p>
                  </div >
                )
              })
            }
          </div>
        </div>


      </div>
    </>

  )
}

export default Interview

