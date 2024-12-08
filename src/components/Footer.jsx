import React from 'react'
import { Typography } from "@material-tailwind/react"
import { GrCloudComputer } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-neutral-900 to-stone-900 text-white p-8">
  <div className="max-w-screen-xl mx-auto">
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <GrCloudComputer size={50} />
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-7">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#ffcf56] focus:text-[#ffcf56]"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#ffcf56] focus:text-[#ffcf56]"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#ffcf56] focus:text-[#ffcf56]"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#ffcf56] focus:text-[#ffcf56]"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </div>
    <hr className="my-8 border-blue-gray-50" />
    <Typography color="blue-gray" className="text-center font-normal">
      &copy; 2024 Softnetel
    </Typography>
  </div>
</footer>

  )
}

export default Footer