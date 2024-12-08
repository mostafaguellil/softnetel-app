import React from 'react'
import { FaLaptopCode } from "react-icons/fa"
import { FaNetworkWired } from "react-icons/fa6"
import { IoMdCloud } from "react-icons/io"
import AboutCard from './AboutCard'

const Services = () => {
    return (
        <div className='w-full bg-gradient-to-r from-neutral-900 to-stone-900 text-white text-center'>
            <div className='grid max-w-screen-xl mx-auto px-4 sm:px-6'>
                <div>
                    <h1 className='py-4 text-4xl font-bold bg-gradient-to-r from-[#f6e3bd] via-[#ffcf56] to-[#bbb6a5] text-transparent bg-clip-text'>Smart IT strategies for a connected future</h1>
                    <p className='py-4 text-xl mb-5'>Softnetel delivers smart IT solutions to keep your business agile, secure, and ready for a connected future.</p>
                    {/* Card Container */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {/* Card */}
                        <AboutCard
                            icon={<FaLaptopCode size={40} />}
                            heading="Coding"
                            text="Tailored software development for your business, creating efficient and scalable applications—from web and mobile solutions to enterprise systems—ensuring smooth operations with high-quality code."
                        />
                        <AboutCard
                            icon={<FaNetworkWired size={40} />}
                            heading="System and Network Services"
                            text="Complete system and network management for a secure and reliable IT infrastructure. We handle setup, monitoring, troubleshooting, and maintenance, ensuring seamless daily operations."
                        />
                        <AboutCard
                            icon={<IoMdCloud size={40} />}
                            heading="Cloud and Automation"
                            text="Cloud computing and automation services that optimize your business. We facilitate your transition to the cloud for flexibility and scalability while automating processes to boost efficiency and reduce costs."
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services