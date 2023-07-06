import React from 'react'
import Laptop from '../assets/laptop.png';

const About = () => {
  return (
    <div className='w-full bg-white px-4 py-16'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <div>
    <img className='mx-auto my-4' src={ Laptop } alt="" />
  </div>
  <div className='flex flex-col justify-center'>
        <p className='text-[#fa4f28] font-bold'>
          WHO WE ARE
        </p>
        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>
          Why Choose Sleek Koncepts?
        </h1>
        <p>Sleek Koncepts is a full-service digital agency based in the Nigerian city of Lagos. We are a team of skilled designers, developers, marketers, and IT specialists who work together to produce remarkable designs and strategies that are suited to the demands and objectives of your organization.</p>
        <button className='w-[200px] bg-black text-[#fa4f28] rounded-md font-medium text-lg my-6 mx-auto md:mx-0 py-3'
        >Get Started</button>
    </div>
    </div>
    </div>
  )
}

export default About