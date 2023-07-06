import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px], w-full h-screen mx-auto text-center flex flex-col justify-center bg-[#000300]'>
        <motion.p className='font-bold text-[#fa4f28] p-2'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:0.5, duration: 1}}
        >YOUR TRUSTED DIGITAL AGENCY</motion.p>
        <motion.h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:0.7, duration: 1.5}}
        >Scale up your business.</motion.h1>
        <div className='flex justify-center items-center'>
          <motion.p className='md:text-4xl sm:3xl text-xl font-bold py-4'
          initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:0.9, duration: 2}}
          >We</motion.p>
          <Typed className='md:text-4xl sm:3xl text-xl font-bold md:pl-3 pl-1.5 text-gray-500' strings={['DEVELOP', 'DESIGN', 'ADVERTISE']} typeSpeed={120}
          backSpeed={140}
          loop />
        </div>
        <motion.p className='font-bold md:text-xl text-lg text-gray-500'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:1.1, duration: 2.2}}
        >A TRIAL WILL CONVINCE YOU.</motion.p>
        <motion.button className='w-[200px] border-2 border-[#fa4f28] text-white hover:bg-[#fa4f28] hover:text-black duration-300 rounded-md font-medium text-lg my-6 mx-auto py-3'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:2, duration: 3}}
        >
          <Link to='pricing' smooth={true} duration={500}>
            GET STARTED
          </Link>
        </motion.button>
      </div>
    </div>
  )
}

export default Hero