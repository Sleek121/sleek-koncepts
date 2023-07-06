import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-2xl sm:text-xl text-lg font-bold py-2'>Want to get more updates on our services?</h1>
            <p>Subscribe to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black focus:outline-none' type="email" placeholder='Enter Email' />
            <button className='w-[200px] text-black bg-[#fa4f28] rounded-md font-medium text-lg my-6 ml-4 px-6  py-3'>Subscribe</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Subscribe