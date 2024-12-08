import React from 'react'
import { Link } from 'react-router-dom'
import { link } from 'framer-motion/client'


const About = () => {
  return (

    <div className="w-full h-[70vh] top-[90px] bg-gradient-to-r from-neutral-900 to-stone-900">

      <div className="w-full h-[70vh] flex flex-col text-white justify-center items-center text-center px-4 sm:px-8">

        <h1 className="animate-slidein300 bg-gradient-to-r from-[#f6e3bd] via-[#ffcf56] to-[#bbb6a5] text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Softnetel (Innovate Your Business Solutions)
        </h1>
        <p className="animate-slidein500 font-semibold text-sm sm:text-lg lg:text-2xl py-3">
          We drive your business forward with comprehensive IT solutions and expert insights,
          <br className="hidden sm:block" /> committed to facilitating your digital evolution and ensuring sustainable growth
        </p>
        <button onClick={() => window.open("http://localhost:3000/", "_blank")} className="animate-slidein700 m-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Softelligence
        </button>

      </div>
    </div>


  )
}

export default About