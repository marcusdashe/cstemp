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
    img: "/partners/redan.png",
    title: "Clyde and Oak Capitals",
  },
  {
    img: "/partners/copen.png",
    title: "Coren",
  },
];

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
        Meet Our Trusted Partners: Together We're Building a Better Future{" "}
        <br />
      </p>
      <div className="flex flex-row items-center content-center justify-center">
        {PARTNERS.map((item, idx) => {
          return (
            <div
              className="flex flex-col items-center content-center justify-between mx-[20px] my-4 py-3 "
              key={idx}
            >
              <Image
                src={item.img}
                height={150}
                width={150}
                alt={`${item.title}`}
              />
              <span className="text-center text-slate-400 font-medium mt-2">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
