import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-7xl capitalize font-semibold">
            Building People
            
          </p>
          <p className="text-lg text-gray-600">
            Provides you with the latest online learning system and material{" "}
            <br />
            that help your knowledge growing.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-[#8D161A] border-none capitalize btn-ms mr-1 w-40">
              Read more
            </button>
            <button className="btn bg-purple-100 text-cstempred-500  border-none capitalize ms ">
              Contact Us
            </button>
          </div>
          <div className="flex gap-6 items-center pt-6">
            <div className="flex gap-2 items-center">
                <img src="/assets/public.svg" alt="" />
                <p>C-STEMP Edutech</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/career.svg" alt="" />
                <p>CAA</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/think.svg" alt="" />
                <p>Siteworx</p>
            </div>
          </div>
        </div>

        <img src="/assets/hero.png" alt="" />
      </div>
      <img src="/assets/company.svg" alt="" />
    </div>
  );
};

export default Hero;
