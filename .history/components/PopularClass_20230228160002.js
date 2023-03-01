import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion, useScroll } from "framer-motion";

const POPULAR_CLASESS = [
  {
    img: "/assets/figma.svg",
    title: "Training",
    sub: "Providing training for skilled labor to construction companies, organizations and developers on a temporary or permanent basis. Providing training to up-skill builders, developers and supervisors. Providing social empowerment opportunities for trained artisans (Small scale building materials production workshop).",
    promo: "design",
    rating: "4.5",
  },
  {
    img: "/assets/learn.svg",
    title: "Web  Development",
    sub: "Lessons on design that cover then most recent developments.",
    promo: "design",
    rating: "4.5",
  },
  {
    img: "/assets/code.svg",
    title: "Marketing",
    sub: "Lessons on design that cover then most recent developments.",
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
                className={`px-6 py-4 w-96 md:w-96 lg:w-96 mt-10 mb-10 lg:mr-5 md:mr-5 m-auto cursor-pointer rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-red-800 group hover:scale-105`}
                key={index}
              >
                <Image
                  className="w-full mb-3"
                  src={ser.img}
                  width={100}
                  height={100}
                  alt="services"
                />
                {/* <p className="text-lg text-red-800 group-hover:text-white capitalize py-2">
                  {ser.promo}
                </p> */}
                <div className="flex justify-between items-center">
                  <p className="text-2xl group-hover:text-white font-semibold line-clamp-1">
                    {ser.title}
                  </p>
                  <HiOutlineArrowUpRight className="group-hover:text-white text-lg font-semibold" />
                </div>

                <p className="text-base group-hover:text-white pr-6 py-2">
                  {ser.sub}
                </p>
                <div className="flex items-center gap-2 group-hover:text-white">
                  <p>{ser.rating}</p>
                  <Image
                    src="/assets/star.svg"
                    height={100}
                    width={100}
                    alt="star"
                  />
                  <p>123</p>
                </div>
                <div className="flex justify-between py-2">
                  <div className="flex gap-3">
                    <Image
                      src="/assets/person.svg"
                      height={100}
                      width={100}
                      alt="person"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm group-hover:text-white">Jimmy</p>
                      <p className="text-xs text-gray-500 group-hover:text-white">
                        200 Enrolled
                      </p>
                    </div>
                  </div>
                  <p className="text-xl text-purple-600 group-hover:text-white font-semibold">
                    $13.45
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
