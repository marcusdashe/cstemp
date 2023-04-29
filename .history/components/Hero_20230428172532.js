import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="lg:h-[100vh] px-3 py-3 lg:px-0 lg:py-0 md:px-0 md:py-0 md:h-[100vh] h-[100vh] w-auto lg:w-full md:w-full flex flex-col lg:flex-row md:flex-row justify-between items-center content-center">
        {/* right side */}
        <div className="w-full lg:w-3/6 md:w-3/6 h-full flex flex-col items-center content-center justify-center">
          <div className="w-5/6 flex flex-col items-center content-center justify-center lg:items-start md:items-start lg:content-start md:content-start">
            <h1 className="capitalize text-3xl lg:text-7xl md:text-7xl font-bold">
              Building People
            </h1>
            <p className="font-5xl mt-3 font-medium text-center lg:text-start md:text-start">
              We believe in people, invest in people, and build people. <br />
              Our goal is to train, empower and support people, especially the
              youth. Interfacing them with developers and industry leaders to
              create a synergy between labor demand and labor supply.
            </p>
          </div>
          {/* sponsors */}
          <div className="w-full lg:w-5/6 md:w-5/6 mt-10 flex items-center content-center justify-center lg:items-center lg:content-center lg:justify-start md:items-center md:content-center md:justify-start">
            <Link
              href="https://www.siteworx.ng"
              className="text-gray-400 mt-2"
              target="_blank"
            >
              <Image
                src="/assets/siteworx.png"
                alt=""
                height={80}
                width={80}
                className="mr-3"
              />
            </Link>

            <Link
              href="https://www.cstempedutech.com"
              className="text-gray-400 mt-2"
              target="_blank"
            >
              <Image
                src="/assets/edutech.png"
                alt=""
                height={100}
                width={100}
                className="ml-3 mr-3"
              />
            </Link>

            <Link
              href="https://caa.cstemp.org"
              className="text-gray-400 mt-2"
              target="_blank"
            >
              <Image
                src="/assets/caa.png"
                alt=""
                height={100}
                width={100}
                className="ml-3 mr-3"
              />
            </Link>
            <Link
              href="https://www.e-limi.africa"
              className="text-gray-400 mt-2"
              target="_blank"
            >
              <Image
                src="/assets/elimi.png"
                alt=""
                height={100}
                width={100}
                className="ml-3 mr-3"
              />
            </Link>
          </div>
          {/* buttons */}
          <div className="w-full md:w-5/6 lg:w-5/6 flex items-center content-center justify-center lg:items-center lg:content-center lg:justify-start md:items-center md:content-center md:justify-start mt-10">
            <button className="w-[25%] mt-[30px] p-2 pl-4 pr-4 bg-red-800 text-white rouned-md font-medium text-md rounded-md hover:bg-[#D5D0ED]">
              <Link href="/about" className="mt-2">
                Learn More
              </Link>
            </button>
            {/* <button className="p-2 pl-4 pr-4 bg-red-800 ml-3 text-white rouned-md font-medium text-md rounded-md hover:bg-[#D5D0ED]">
              Get Started
            </button> */}
          </div>
        </div>
        {/* left side */}
        <div className="w-3/6 h-full p-3 lg:p-0 md:p-0 flex flex-col lg:flex-row md:flex-row items-center content-center justify-center">
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            className="bg-gradient-to-br from-red-800 border-gray-200 border-opacity-[0.2] to-red-600 w-96 h-96 shadow-lg lg:h-[30rem] lg:w-[30rem] md:h-[30rem] md:w-[30rem] rounded-full overflow-hidden absolute z-0 flex items-center content-center justify-center"
          >
            <Image
              src="/artisanal/9.jpg"
              draggable={false}
              alt=""
              height={700}
              width={500}
              className="object-cover rounded-full w-full h-full"
            />
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            className="bg-transparent backdrop-blur-3xl border-gray-200 border-opacity-[0.2] border-1 shadow-lg h-60 w-60 flex flex-col items-center content-center justify-center rounded-full overflow-hidden absolute z-10 left-[50%] top-[73%] lg:left-[55%] lg:top-[20%] md:top-[20%] md:left-[50%]"
          >
            <Image
              src="/artisanal/17.jpg"
              draggable={false}
              alt=""
              height={500}
              width={500}
              className="object-fill rounded-full"
            />
          </motion.div>
        </div>
      </div>
      {/* IDFK=>something about what we do sha */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="hidden lg:flex md:flex w-5/6 m-auto mt-14 mb-10 font-medium justify-around bg-zinc-100 p-8 rounded-md"
      >
        {/* <span className="text-align flex flex-col items-center content-center justify-center text-slate-900"> */}
        <span class="text-align flex flex-col items-center content-center justify-center text-slate-900 border border-[#8D161A] rounded-lg p-4">
          <Image
            src="/assets/talent.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down"
          />
          Training Talent
        </span>
        <span class="text-align flex flex-col items-center content-center justify-center text-slate-900 border border-[#8D161A] rounded-lg p-4">
          <Image
            src="/assets/dskills.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Outsourcing Skills
        </span>
        <span class="text-align flex flex-col items-center content-center justify-center text-slate-900 border border-[#8D161A] rounded-lg p-4">
          <Image
            src="/assets/empowerment.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Empowerment
        </span>
        <span class="text-align flex flex-col items-center content-center justify-center text-slate-900 border border-[#8D161A] rounded-lg p-4">
          <Image
            src="/assets/award.png]"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Awarding Artisans
        </span>
      </motion.div>
    </>
  );
}
