import React from 'react'
import Props_Example_1 from './Images/props_eg.png'

function Props() {
  return (
    <>
    <div className='container'>
    <h1 className='intro_heading text-center text-5xl font-bold mt-4'>Props</h1>
        <div className='row justify-center items-center mt-4'>
            <div className='col-md-11 text-lg p-4 bg-blue-100 mb-4 history_box'>
                <p>✅ "props" is short for properties.</p>
                <p>✅ Props are a mechanism for passing data from a parent component to a child component. </p>
                <p>✅ Props are a way to communicate and share information between different parts of your React application.</p>
                <p className='md:p-4 sm:py-2'>An example of using props in React Components:</p>
                <p className='flex justify-center items-center py-3'><img className='pl-4' src={Props_Example_1} alt='Not Found'></img></p>
                <p className='pt-4'>✅ Props are read-only, meaning that a component cannot modify the props it receives.</p>
                <p className='pb-4'>✅ They are meant to be passed down from parent components to child components to allow for a top-down data flow.</p>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Props
