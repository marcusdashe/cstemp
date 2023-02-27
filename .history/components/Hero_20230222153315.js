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
              Learn more
            </button>
            <button className="btn bg-purple-100 text-cstempred-500  border-none capitalize ms ">
              Contact Us
            </button>
          </div>
          <div className="flex gap-20 items-center pt-10">
          <div className="flex gap-2 items-center">
                <img src="/assets/siteworx.png" alt="" className="object-scale-down h-50 w-20"/>
                
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/edutech.png" alt="" className="object-scale-down h-50 w-20"/>
                
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/caa.png" alt="" className="object-scale-down h-50 w-20"/>
                
            </div>
            
          </div>
        </div>

        <img src="/assets/hero.png" alt="" />
      </div>
      <p className="flex w-90 justify-around"><span className="border">Training Talent</span> {"  "} <span>Outsourcing Skills</span> <span>Empowerment</span> <span>Awarding Artisan</span></p>
      {/* <img src="/assets/company.svg" alt="" /> */}
    </div>
  );
};

export default Hero;
