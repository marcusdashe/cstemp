import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion, useScroll } from "framer-motion";

const POPULAR_CLASESS = [
  {
    img: "/artisanal/16.jpg",
    title: "Training",
    sub: "Providing training for skilled labor to construction companies, organizations and developers on a temporary or permanent basis. Providing training to up-skill builders, developers and supervisors. Providing social empowerment opportunities for trained artisans (Small scale building materials production workshop).",
    promo: "design",
    rating: "4.5",
  },
  {
    img: "/artisanal/17.jpg",
    title: "Content Development",
    sub: "Using learning resources for Technical & Vocational Education & Training Institutions (TVET), we have produced quality recyclable educational content e.g; tutorial videos, modules, etc. Educational Technology is our way forward.",
    promo: "design",
    rating: "4.5",
  },
  {
    img: "/artisanal/10.jpg",
    title: "Artisans Awards",
    sub: "At C-STEMP, we understand that great artisans are not born, they are trained. And we ensure that they are trained exceptionally. This is why we only consider it fair to celebrate excellent craftsmanship.We expose commercially invaluable skills that drive development. We celebrate hard work and talents. Encouraging and empowering the community.",
    promo: "design",
    rating: "4.5",
  },
];

export default function PopularClass() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="lg:px-20 md:px-20 lg:py-10 md:py-20">
        <p className="text-lg text-[#8D161A] text-center lg:text-start md:text-start font-medium">
          Our Proposition
        </p>
        <p className="text-3xl font-semibold text-center lg:text-start md:text-start py-3">
          The solutions we provide
        </p>
        <p className="text-gray-500 text-base text-center lg:text-start md:text-start py-3">
            C-STEMP is poised to satisfy the need for skilled manpower, <br />
            by establishing a wide area network of technology enabled vocational <br />
            training centers that offer training on a good number of soft and hard skills.
        </p>
        <div className="flex flex-col h-fit lg:h-fit md:h-fit w-full md:flex-row lg:flex-row items-center content-center justify-center lg:items-center lg:content-center lg:justify-start md:items-center md:content-center md:justify-start">
          {POPULAR_CLASESS.map((ser, index) => {
            return (
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                className={`px-6 py-4 w-96 md:w-96 lg:w-96 mt-10 mb-10 lg:mr-5 md:mr-5 m-auto cursor-pointer rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-red-800 group duration-500 hover:scale-105 duration-500`}
                key={index}
              >
                <Image
                  className="w-full mb-3"
                  src={ser.img}
                  width={300}
                  height={100}
                  alt="services"
                />
               
                <div className="flex justify-between items-center">
                  <p className="text-2xl group-hover:text-white font-semibold line-clamp-1">
                    {ser.title}
                  </p>
                  <HiOutlineArrowUpRight className="group-hover:text-white text-lg font-semibold" />
                </div>

                <p className="text-base group-hover:text-white pr-6 py-2">
                  {ser.sub}
                </p>
            
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
