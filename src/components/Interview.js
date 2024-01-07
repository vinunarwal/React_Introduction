import React from 'react'

const Interview = (props) => {
  return (
    <>
      <div className='container'>
        <h1 className='history_heading text-center text-4xl font-bold'>Interview Questions</h1>
        <h2 className='text-xl text-red-400 font-semibold pb-2 pt-3'>Front-end Interview Questions: </h2>

        <div className='row mt-6 flex flex-wrap-reverse justify-center items-center gap-3 pt-6 m-1'>
          <div className='col-md-11 p-4 relative text-lg bg-blue-100 history_box'>
            {
              props.data.map((interview, index) => {
                return (

                  <div key={index} className='ques'>

                    <h3 className='font-medium'>Ques {interview.ques}</h3>
                    <p><span className='font-medium'>Ans.</span> {interview.ans}</p>

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

