import React from 'react'
import { FaLaptopCode } from "react-icons/fa"
import { FaNetworkWired } from "react-icons/fa6"
import { IoMdCloud } from "react-icons/io"

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border rounded-2xl py-12 px-16 hover:scale-105 transition ease-out duration-130 mb-7'>
      <div>
        <div className='inline-flex'>
          {props.icon}
        </div>
        <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default AboutCard