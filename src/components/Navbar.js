import React, {useState} from 'react'; 
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
      <div className='flex h-24 justify-between items-center px-4 max-w-[1240px] mx-auto bg-[#000300]'>
        <img className='w-[120px] h-[120px] mt-8 cursor-pointer'  src={ Logo } alt="" />
        <ul className='md:flex hidden text-white'>
          <li className='p-4 text-lg cursor-pointer text-[#ff5733] hover:scale-105 duration-300'>Home</li>
          <li className='p-4 text-lg cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Services</li>
          <li className='p-4 text-lg cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>About</li>
          <li className='p-4 text-lg cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>Contact</li>
          <li className='p-4 text-lg cursor-pointer hover:text-[#fa4f28] hover:scale-105 duration-300'>
          <Link to='pricing' smooth={true} duration={500}>
            Pricing
          </Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden text-white'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      
        </div>
        <div className={nav ? 'fixed top-0 left-0 w-[60%] border-r bg-[#000300] border-gray-900 h-full ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-2xl font-bold text-[#ff5733] m-4 mt-5'>SLEEK KONCEPTS.</h1>
          <ul className='uppercase text-white'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Services</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>
          <Link onClick={handleNav}  to='pricing' smooth={true} duration={500}>
            Pricing
          </Link>
          </li>
          <li className='p-4'>Contact</li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar