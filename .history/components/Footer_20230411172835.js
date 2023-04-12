import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-900 h-[130vh] lg:h-[50vh] md:h-[100vh] flex flex-col lg:flex-row md:flex-row">
      <div className="w-full h-3/6 lg:w-3/6 md:w-3/6 lg:h-full md:h-full flex flex-col lg:flex-col md:flex-col justify-between">
        <div className="px-10 py-10">
          <Image src="/assets/logo1.png" height={70} width={100} alt="logo" />
        </div>
        <div className="w-full px-10 py-10 h-[5vh] px-5 py-5 flex flex-row lg:flex-row md:flex-row items-center content-center justify-start">
          <p className="text-xs lg:text-xs md:text-xs text-gray-400">
            &copy; Copyright CSTEMP LTD/Gtee 2023
          </p>
        </div>
      </div>
      <div className="w-full h-3/6 lg:w-3/6 md:w-3/6 lg:h-full md:h-full text-white">
        <div className="px-10 py-10 flex flex-col lg:flex-col md:flex-col">
          <h1>Our Products</h1>
          <hr className="opacity-[0.2] mt-3 mb-3"></hr>
          <Link
            href="https://e-limi.africa"
            className="text-gray-400 mt-2"
            target="_blank"
          >
            E-Limi LMS
          </Link>
          <Link
            href="https://nsq.e-limi.africa"
            className="text-gray-400 mt-2"
            target="_blank"
          >
            NSQ Assessment Portal
          </Link>
          <Link
            href="https://siteworx.ng/"
            className="text-gray-400 mt-2"
            target="_blank"
          >
            Siteworx
          </Link>
        </div>
      </div>
      <div className="w-full h-3/6 lg:w-3/6 md:w-3/6 lg:h-full md:full flex flex-row lg:flex-col md:flex-col text-white">
        <div className="px-10 py-10">
          <h1>Locate Us</h1>
          <hr className="mt-3 mb-3 opacity-[0.2]"></hr>
          <p className="text-gray-300 text-xs lg:text-base md:text-base">
            Elijah House, 3 Abbey Street, after NYSC Bus Stop, Along Kubwa
            Express Way. Bwari District, Abuja, Nigeria.
          </p>
        </div>
        <div className="px-10 py-10">
          <h1>Contact Us</h1>
          <hr className="mt-3 mb-3 opacity-[0.2]"></hr>
          <p className="text-gray-300">
            <small className="font-medium text-md">+234 909 2664 712</small>
            <br />
            <small className="font-medium text-md">+234 915 5992 718</small>
          </p>
          <div className="flex flex-col mt-3 lg:flex-row md:flex-row justify-between">
            <p className="font-medium text-md text-gray-300">
              enquiries@cstemp.org
            </p>
            <p className="font-medium text-md text-gray-300">
              admin@cstemp.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
