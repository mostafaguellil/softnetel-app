import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='w-full h-[70px] bg-gradient-to-r from-neutral-900 to-stone-900 sticky top-0 z-50'>
            <div className='text-white max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                    <h1>Softnetel</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex items-center'>
                        <li className='font-medium'><a href="">Home</a></li>
                        <li className='font-medium'><a href="">About</a></li>
                        <li className='font-medium'><a href="">Services</a></li>
                        <button className='m-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800' onClick={() => window.open("", "_blank")}>
                            Contact
                        </button>
                    </ul>
                </div>
                {/* Hamburger Menu */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'w-full bg-gradient-to-r from-neutral-900 to-stone-900 text-white absolute top-[70px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'} >
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <a href="https://github.com/mostafaguellil" target="_blank" rel="noopener noreferrer">
                            <button className='m-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
                                Contact
                            </button>
                        </a>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
