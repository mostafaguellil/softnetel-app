import React from 'react'
import AI from "../assets/ai.png"
import { useMotionValue, useTransform, motion } from 'framer-motion'


const Hero = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])

    return (

        <div class="w-full bg-gradient-to-r from-neutral-900 to-stone-900 text-white">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 bg-gradient-to-r from-[#f6e3bd] via-[#ffcf56] to-[#bbb6a5] text-transparent bg-clip-text text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        About Softnetel
                    </h1>
                    <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                        Softnetel provides innovative IT solutions, specializing in custom software development, system and network services, and cloud automation. We help businesses streamline operations, enhance security, and drive digital transformation with smart, scalable strategies tailored to their needs.
                    </p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Request an estimate
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>

                    <button onClick="window.open('https://www.linkedin.com/in/mostafaguellil/', '_blank')" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to an expert
                    </button>
                </div>

                <div class="mt-8 lg:mt-0 lg:col-span-5 flex justify-center">
                    <motion.div style={{ x, y, rotateX, rotateY, z: 100 }} drag dragElastic={0.17} dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                        <img src={AI} alt="mockup" className="rounded-full cursor-grab relative max-w-xs md:max-w-md lg:max-w-full" style={{ userSelect: 'none', pointerEvents: 'none' }} />
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Hero