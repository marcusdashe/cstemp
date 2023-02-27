import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsArrowDownShort } from "react-icons/bs";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-5 py-3 w-full justify-between items-center  md:fixed bg-transparent backdrop-blur-lg lg:fixed z-50">
        <Image
          height={100}
          width={100}
          src="/assets/logo.png"
          alt="logo"
          className="object-scale-down h-50 w-20"
        />
        <div className="hidden md:flex lg:flex items-center gap-8">
          <p className="text-base font-medium cursor-pointer hover:text-[#8D161A]">
            Home
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-[#8D161A]">
            About
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-[#8D161A]">
            Services
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-[#8D161A]">
            Contact Us
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-[#8D161A]">
            Projects
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-[#8D161A]">
            Gallery
          </p>
          {/* </div>
            <div className="flex items-center gap-6">
                <p className='text-base font-medium cursor-pointer'>Sign In</p>
                <p className='text-base font-medium capitalize bg-purple-500 border border-none cursor-pointer btn btn-sm'>Create Free Account</p>
             */}
        </div>
      </div>
    </>
  );
}
