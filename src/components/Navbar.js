import React from 'react'
import Logo from './Images/react-logo.png'

function Navbar() {
    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row flex justify-center items-center'>
                        <div className='col-md-3 flex gap-4'>
                            <p className='logo'><img className='animate-spin' src={Logo} alt='Not Found'></img></p>
                            <label className='text-3xl text-red-300'>React</label>
                        </div>
                        <div className='col-md-6'>
                            <ul className='topics flex gap-5 text-xl'>
                                <li><a href="/">React Tutorial 📑</a></li>
                                <li><a href='/'>React Hooks</a></li>
                                <li><a href='/'>Interview Q/A </a></li>
                            </ul>
                        </div>
                        <div className='col-md-3 mt-2'>
                            <input type='text' name='search' placeholder='🔍 Search...' className='border-2 border-green-600 rounded-3xl py-2 px-4' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
