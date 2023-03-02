import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const SERVICES = [
  {
    img: "/assets/ux.svg",
    title: "Training Artisans",
    sub: "Providing training for skilled labor to construction companies, organizations and developers on a temporary or permanent basis. Providing training to up-skill builders, developers and supervisors.",
  },
  {
    img: "/assets/web.svg",
    title: "Labor Outsourcing",
    sub: "In line with our core objectives, we have a pool of trained and competent artisans in the major construction trades (Masonry, Carpentry, Plumbing, Electrical, Tiling, Painting and Steel Fabrication) to be supplied to construction companies and other estate developers who would require their services.",
  },
  {
    img: "/assets/market.svg",
    title: "Educational Technology",
    sub: "Using learning resources for Technical & Vocational Education & Training Institutions (TVET), we have produced quality recyclable educational content e.g; tutorial videos, modules, etc. Educational Technology is our way forward.",
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      className="container mx-auto items-center py-10 h-[100vh]"
    >
      <p className="text-lg text-[#8D161A] text-center font-medium">
        Our services
      </p>
      <p className="text-xl md:text-3xl lg:text-3xl font-semibold text-center py-3">
        We provide assessment and certification
        <br /> services to experienced artisans, job placements, <br />
        labor outsourcing and artisans awards programs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 pt-10">
        {SERVICES.map((ser, i) => {
          return (
            <div
              className="px-6 py-8 rounded-xl cursor-pointer transition-opacity duration-75 bg-gray-50 border border-gray-300 border-opacity-[0.3] flex flex-col items-start content-start justify-between"
              key={i}
            >
              <div className="flex flex-col gap-3 items-start content-start">
                {/* <img src={ser.img} alt="services" /> */}
                <p className="text-2xl font-semibold ">{ser.title}</p>
                <p className="text-base pr-6 py-2">{ser.sub}</p>
              </div>
              <button className="flex gap-2 items-center text-red-800 font-medium">
                Learn More <IoIosArrowForward />{" "}
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
