import React from 'react'

const Cards = () => {
  return (
    <div name="pricing" className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>BASIC</h2>
                <p className='text-center text-4xl font-bold'>$200</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>5 Pages</p>
                  <p className='py-2 border-b mx-8'>Mobile Responsive</p>
                  <p className='py-2 border-b mx-8'>SEO (Google)</p>
                  <p className='py-2 border-b mx-8'>SSL (Security)</p>
                  <p className='py-2 border-b mx-8'>Email Marketing</p>
                </div>
                <button className='w-[200px] text-black bg-[#fa4f28] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
                <h2 className='text-2xl font-bold text-center py-8'>PREMIUM</h2>
                <p className='text-center text-4xl font-bold'>$260</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 - 10 Pages</p>
                  <p className='py-2 border-b mx-8'>Mobile Responsive</p>
                  <p className='py-2 border-b mx-8'>SEO (Google)</p>
                  <p className='py-2 border-b mx-8'>SSL (Security)</p>
                  <p className='py-2 border-b mx-8'>Email Marketing</p>
                  <p className='py-2 border-b mx-8'>API Integration e.g. Payment Gateways</p>
                </div>
                <button className='w-[200px] bg-black text-[#fa4f28] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>ULTRA</h2>
                <p className='text-center text-4xl font-bold'>$300</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Unlimited Pages</p>
                  <p className='py-2 border-b mx-8'>Mobile Responsive</p>
                  <p className='py-2 border-b mx-8'>SEO (Google)</p>
                  <p className='py-2 border-b mx-8'>SSL (Security)</p>
                  <p className='py-2 border-b mx-8'>Email Marketing</p>
                  <p className='py-2 border-b mx-8'>API Integration e.g. Payment Gateways</p>
                  <p className='py-2 border-b mx-8'>Free Graphic Designs</p>
                </div>
                <button className='w-[200px] text-black bg-[#fa4f28] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Cards