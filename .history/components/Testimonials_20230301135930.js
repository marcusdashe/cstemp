import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PARTNERS = [
  {
    img: "/partners/niob.png",
    title: "Nigeria Institute of Building",
   
  },
  {
    img: "/partners/itf.png",
    title: "Industrial Training Fund",
  },
  {
    img: "/partners/fmhdm.png",
    title: "FMHDM",
  },
  {
    img: "/partners/copen.png",
    title: "Coren",
  },
  {
    img: "/partners/redan.png",
    title: "Clyde and Oak Capitals",
  }

]

export default function Testimonials() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center bg-gray-50 py-10 mb-20 rounded-md">
      {/* <Image
        className=""
        src="/assets/logo.svg"
        height={100}
        width={100}
        alt=""
      /> */} 
      <p>Our Partners</p>
      <p className="text-3xl font-semibold mb-3 mt-10 text-center lg:text-start md:text-start">
      Meet Our Trusted Partners: Together We're Building a Better Future <br />
      </p>
      <div className="flex flex-row">
        {PARTNERS.map((item, idx) => {
            return (
              <div className="flex flex-col items-center content-center justify-between mx-[20px] my-4 " key={idx}>
              <Image src={item.img} height={150} width={150} alt="" />
              <span className="text-center">
                {/* <p className="text-base text-gray-400 font-medium ">{item.title}</p> */}
              </span>
            </div>
            )
        })}
      </div>
    </div>
  );
}