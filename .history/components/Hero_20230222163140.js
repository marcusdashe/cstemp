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
            <button className="btn bg-[#8d161a] text-cstempred-500  border-none capitalize ms ">
              Contact Us
            </button>
          </div>
          <div className="flex gap-20 items-center pt-10 mt-30">
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
      <p className="flex w-90 font-medium justify-around bg-zinc-100 p-8">
          <span className=""><img src="/assets/talent.png" alt="" className="object-scale-down h-20 w-20"/>Training Talent</span> 
          <span><img src="/assets/dskills.png" alt="" className="object-scale-down h-20 w-20"/>Outsourcing Skills</span> 
          <span><img src="/assets/empowerment.png" alt="" className="object-scale-down h-20 w-20"/>Empowerment</span> 
          <span><img src="/assets/award.png" alt="" className="object-scale-down h-20 w-20"/>Awarding Artisan</span></p>
    
    </div>
  );
};

export default Hero;