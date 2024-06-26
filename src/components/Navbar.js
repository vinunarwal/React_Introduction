import React from 'react'
import Logo from './Images/react-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <>
         <nav className="bg-gray-300">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
               <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                     <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                     </button>

                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                     <div className="flex flex-shrink-0 items-center">
                        <img className="h-11 w-auto animate-spin" src={Logo} alt="Not Found" />
                     </div>
                     <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">

                           <Link to="/" className="text-red-500 text-center flex justify-center items-center rounded-md px-3 py-2 text-3xl font-medium">
                              React</Link>

                           <div className="dropdown relative inline-block">
                              <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                                 React Tutorial
                              </button>
                              <div className="dropdown-content">
                                 <Link to="/Intro">Introduction</Link>
                                 <Link to="/History">History</Link>
                                 <Link to="/Components">Components</Link>
                                 <Link to="/DOM">DOM</Link>
                                 <Link to="/Props">Props</Link>
                                 <Link to="/PropsDrilling">Props Drilling</Link>
                                 <Link to="/CallbackFn">Callback Function</Link>
                                 <Link to="/Lifecycle">Lifecycle of Components</Link>
                              </div>
                           </div>

                           <div className="dropdown relative inline-block">
                              <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                                 Hooks
                              </button>
                              <div className="dropdown-content">
                                 <Link to="/Usestate">UseState</Link>
                                 <Link to="/Useeffect">UseEffect</Link>
                                 <Link to="/Usecontext">UseContext</Link>
                                 <Link to="/Usememo">UseMemo</Link>
                              </div>
                           </div>
                           <div className="dropdown relative inline-block">
                              <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                                 Redux</button>
                              <div className="dropdown-content">
                                 <Link to="/Redux">Redux</Link>
                              </div>
                           </div>

                           <div className="dropdown relative inline-block">
                              <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                                 Interview</button>
                              <div className="dropdown-content">
                                 <Link to="/Interview">Interview Q/A</Link>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                     <div className='col-sm-3 mt-2'>
                        <input type='text' name='search' placeholder='🔍 Search...' className='border-gray-800 border-4 rounded-3xl py-2 px-4' />
                     </div>
                  </div>
               </div>
            </div>


            <div className="sm:hidden" id="mobile-menu">
               <div className="space-y-1 px-2 pb-3 pt-2">

                  <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">React</Link>

                  <div className="dropdown relative block">
                     <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                        React Tutorial
                     </button>
                     <div className="dropdown-content">
                        <Link to="/Intro">Introduction</Link>
                        <Link to="/History">History</Link>
                        <Link to="/Components">Components</Link>
                        <Link to="/DOM">DOM</Link>
                        <Link to="/Props">Props</Link>
                        <Link to="/PropsDrilling">Props Drilling</Link>
                        <Link to="/CallbackFn">Callback Function</Link>
                     </div>
                  </div>

                  <div className="dropdown relative block">
                     <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                        Hooks
                     </button>
                     <div className="dropdown-content">
                        <Link to="/Usestate">UseState</Link>
                        <Link to="/Useeffect">UseEffect</Link>
                        <Link to="/Usecontext">UseContext</Link>
                        <Link to="/Usememo">UseMemo</Link>
                     </div>
                  </div>

                  <div className="dropdown relative block">
                     <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                        Redux</button>
                     <div className="dropdown-content">
                        <Link to="/Interview">Redux</Link>
                     </div>
                  </div>

                  <div className="dropdown relative block">
                     <button className="dropbtn cursor-pointer text-lg text-black hover:bg-gray-400 px-3 py-2 font-medium rounded-md">
                        Interview</button>
                     <div className="dropdown-content">
                        <Link to="/Interview">Interview Q/A</Link>
                     </div>
                  </div>

               </div>
            </div>
         </nav>

      </>
   )
}

export default Navbar
