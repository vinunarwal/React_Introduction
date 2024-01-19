import React from 'react'
import DOM_structure from './Images/DOM.png'
import DOM_Example from './Images/domeg1.png'

function DOM() {
   return (
      <>
         <div className='container'>
            <h1 className='dom_heading text-center text-5xl font-bold mt-4'>React DOM</h1>
            <div className='row my-3 justify-center items-center mt-4'>
               <div className='col-md-11 text-lg py-4 px-4 bg-blue-100 history_box mb-4'>
                  <p><span>✅</span> DOM stands for Document Object Model</p>
                  <p><span>✅</span> It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. </p>
                  <p className='flex justify-center items-center py-3'>
                     <img className='hover:scale-110' src={DOM_structure} alt='Not Found'></img></p>
                  <p className='pt-3'>There are two types of DOM :</p>
                  <h3 className='pt-1'>1. Real DOM</h3>
                  <h3 className=''>2. Virtual DOM</h3>
                  <h2 className='text-red-500 text-xl py-2'>Real DOM :</h2>
                  <p><span>✅</span> Real DOM is the actual structure of the webpage.</p>
                  <p><span>✅</span> React Update complete document in the Real DOM.</p>
                  <p><span>✅</span> React DOM is the actual webpage rendered on the browser any changes made directly reflect on the complete webpage.</p>
                  <p><span>✅</span> The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains objects.</p>
                  <p><span>✅</span> The changes and updates to the DOM are fast because of its tree-like structure but re-rendering whole documents makes the DOM Slow.</p>
                  <p><span>✅</span> All UI components need to be re-rendered for every DOM update.</p>
                  <p className='py-2'>Example of DOM: </p>
                  <p className='flex justify-center items-center py-3'>
                     <img className='example' src={DOM_Example} alt='Not Found'></img></p>
                  <h2 className='text-red-500 text-xl py-2'>Virtual DOM :</h2>
                  <p><span>✅</span> Virtual DOM is the virtual representation of Real DOM.</p>
                  <p><span>✅</span> React update the state changes in Virtual DOM first and then it syncs with Real DOM.</p>
                  <p><span>✅</span> Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.</p>
                  <p><span>✅</span> Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions.</p>

               </div>
            </div>

         </div>
      </>

   )
}

export default DOM
