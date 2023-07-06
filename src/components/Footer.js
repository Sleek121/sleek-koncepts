import React from 'react'
import {FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-2xl font-bold text-[#ff5733]  mt-5'>SLEEK KONCEPTS.</h1>
        <p className='py-4'>Sleek Koncepts is a full-service digital agency based in the Nigerian city of Lagos. We are a team of skilled designers, developers, marketers, and IT specialists who work together to produce remarkable designs and strategies that are suited to the demands and objectives of your organization.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} className='cursor-pointer hover:text-[#fa4f28] hover:scale-110 duration-300'/>
            <FaInstagram size={30}  className='cursor-pointer hover:text-[#fa4f28] hover:scale-110 duration-300'/>
            <FaTwitterSquare size={30}  className='cursor-pointer hover:text-[#fa4f28] hover:scale-110 duration-300'/>
            <FaGithubSquare size={30}  className='cursor-pointer hover:text-[#fa4f28] hover:scale-110 duration-300'/> 
        </div>
        </div>
        <div className='flex justify-between mx-24 mt-6'>
        <div className=''>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Home</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Services</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>About</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Contact</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Pricing</li>
          </ul>
        </div>

        <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Claim</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Policy</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Terms</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer