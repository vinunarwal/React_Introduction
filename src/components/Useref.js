import React from 'react'
import UseRef_eg from './Images/useref1.png'

function Useref() {
    return (
        <>
            <div className='container'>
                <h1 className='intro_heading text-center text-5xl font-bold mt-4'>UseRef Hook</h1>
                <div className='row flex justify-center items-center pt-6'>
                    <div className='col-md-11 text-lg bg-blue-100 py-4 history_box mb-4'>
                        <p><span>✅</span> It is used to create mutable object references.</p>
                        <p><span>✅</span> It's commonly used for accessing and interacting with the DOM, managing focus, and persisting values across renders without causing re-renders. </p>
                        <p className='pl-6 py-2'>Example of UseRef :</p>
                        <p className='flex justify-center items-center py-3'>
                        <img className='example' src={UseRef_eg} alt='Not Found..'></img>
                        </p>
                        <p className='pl-5'>By using useRef, we can easily access and manipulate the DOM elements without causing unnecessary re-renders. Keep in mind that the current property of a useRef object always points to the latest value, even if the component re-renders.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Useref
