import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="lg:h-[100vh] px-3 py-3 lg:px-0 lg:py-0 md:px-0 md:py-0 md:h-[100vh] h-[130vh] w-auto lg:w-full md:w-full flex flex-col lg:flex-row md:flex-row justify-between items-center content-center">
        {/* right side */}
        <div className="w-full lg:w-3/6 md:w-3/6 h-full flex flex-col items-center content-center justify-center">
          <div className="w-5/6 flex flex-col items-center content-center justify-center lg:items-start md:items-start lg:content-start md:content-start">
            <h1 className="capitalize text-3xl lg:text-7xl md:text-7xl font-bold">
              Building People
            </h1>
            <p className="font-5xl mt-2 font-bold text-center lg:text-start md:text-start">
              We believe in people, invest in people, and build people. <br />
              Our goal is to traing, empower and support people, especially the
              youth.
            </p>
          </div>
          {/* sponsors */}
          <div className="w-full lg:w-5/6 md:w-5/6 mt-10 flex items-center content-center justify-center lg:items-center lg:content-center lg:justify-start md:items-center md:content-center md:justify-start">
            <Image
              src="/assets/siteworx.png"
              alt=""
              height={60}
              width={60}
              className="mr-3"
            />
            <Image
              src="/assets/edutech.png"
              alt=""
              height={60}
              width={60}
              className="ml-3 mr-3"
            />
            <Image
              src="/assets/caa.png"
              alt=""
              height={60}
              width={60}
              className="ml-3 mr-3"
            />
          </div>
          {/* buttons */}
          <div className="w-full md:w-5/6 lg:w-5/6 flex items-center content-center justify-center lg:items-center lg:content-center lg:justify-start md:items-center md:content-center md:justify-start mt-10">
            <button className="p-2 pl-4 pr-4 bg-red-800 text-white rouned-md font-medium text-md rounded-md">
              Learn More
            </button>
            <button className="p-2 pl-4 pr-4 bg-red-800 ml-3 text-white rouned-md font-medium text-md rounded-md">
              Get Started
            </button>
          </div>
        </div>
        {/* left side */}
        <div className="w-3/6 h-full p-3 lg:p-0 md:p-0 flex flex-col lg:flex-row md:flex-row items-center content-center justify-center">
          <div className="bg-gradient-to-br from-red-500 to-red-800 shadow-lg h-96 w-96 p-10 rounded-full overflow-hidden absolute z-0">
            <Image
              src="/assets/hero2.png"
              alt=""
              height={400}
              width={400}
              className="object-contain mr-3 h-300 w-200"
            />
          </div>
          <div className="bg-gradient-to-br from-slate-300 to-white shadow-lg h-48 w-48 flex flex-col items-center content-center p-10 rounded-full overflow-hidden absolute z-10 left-[50%] top-[73%] lg:left-[50%] lg:top-[20%] md:top-[20%] md:left-[50%]">
            <Image
              src="/assets/hero.png"
              alt=""
              height={100}
              width={100}
              className="object-contain mr-3 h-300 w-200 self-center"
            />
          </div>
        </div>
      </div>
      {/* IDFK=>something about what we do sha */}
      <div className="hidden lg:flex md:flex w-5/6 m-auto mt-14 mb-10 font-medium justify-around bg-zinc-100 p-8 rounded-md">
        <span className="text-align flex flex-col items-center content-center justify-center">
          <Image
            src="/assets/talent.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Training Talent
        </span>
        <span className="text-align flex flex-col items-center content-center justify-center">
          <Image
            src="/assets/dskills.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Outsourcing Skills
        </span>
        <span className="text-align flex flex-col items-center content-center justify-center">
          <Image
            src="/assets/empowerment.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Empowerment
        </span>
        <span className="text-align flex flex-col items-center content-center justify-center">
          <Image
            src="/assets/award.png"
            alt=""
            height={100}
            width={100}
            className="object-scale-down h-20 w-20"
          />
          Awarding Artisans
        </span>
      </div>
    </>
  );
}
