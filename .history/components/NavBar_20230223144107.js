import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsArrowDownShort} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div className='mx-auto mt-8'>
        <div className="container flex flex-col lg:flex-row py-2 justify-between items-center">
            <img src="/assets/logo.png" alt="logo" className="object-scale-down h-50 w-20" />
            {/* <div className="flex gap-2 items-center border border-[#d0d5dd] px-0.5 pl-2 py-0.5 rounded-md" >
                <CiSearch className='text-[#c3c5c9]'/>
                <input className='focus:outline-none' type="text" placeholder='Want to learn?'/>
                <button className='flex items-center px-3 py-1 font-medium text-purple-600 capitalize rounded-md bg-purple-50 hover:bg-purple-200'>Explore
                    <BsArrowDownShort/>
                </button>
            </div> */}
            <div className="flex items-center gap-8 ">
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>Home</p>
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>About</p>
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>Services</p>
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>Contact</p>
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>Project</p>
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>Useful Links</p>
                <p className='text-base font-medium cursor-pointer hover:text-[#8D161A]'>Gallery</p>
            {/* </div>
            <div className="flex items-center gap-6">
                <p className='text-base font-medium cursor-pointer'>Sign In</p>
                <p className='text-base font-medium capitalize bg-purple-500 border border-none cursor-pointer btn btn-sm'>Create Free Account</p>
             */}
            </div> 
        </div>
    </div>
  )
}

export default NavBar