import React from 'react'

function Sidebar() {
  return (
    <div className='container mx-0 m-6'>
        <div>
            <ul>
                <span className='text-red-600 text-lg pt-2'>React Tutorial</span>
                <li><a href='/'>React Intro</a></li>
                <li><a href='/'>React History</a></li>
                <li><a href='/'>React Components</a></li>
                <li><a href='/'>React Props</a></li>
                <li><a href='/'>React Maps</a></li>
                <li><a href='/'>Role of Objects</a></li>
                <li><a href='/'>DOM</a></li>
                <li><a href='/'>Proper Drilling</a></li>
                <li><a href='/'>Conditional Rendering</a></li>
                <li><a href='/'>React Routing</a></li>
                <li><a href='/'>CallBack Function</a></li>
                <span className='text-red-600 text-lg pt-2'>React Hooks</span>
                <li><a href='/'>UseState</a></li>
                <li><a href='/'>UseEffect</a></li>
                <li><a href='/'>UseContext</a></li>
                <li><a href='/'>UseMemo</a></li>
                <li><a href='/'>UseRef</a></li>
                <span className='text-red-600 text-lg pt-2'>Interview Ques</span>
                <li><a href='/'>Interview Questions</a></li>
            </ul>
        </div>    
    </div>
  )
}

export default Sidebar
