import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const HEROES = [
  {
    img: "/staff/tony.png",
    title: "Mr. Anthony Okwa",
    sub: "Director General",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/staff/seth.png",
    title: "Mr. Seth Ogungbemi",
    sub: "Chief Operating Officer",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/staff/eneokwa.png",
    title: "Mr. Smauel Okwa",
    sub: "Siteworx Project Coordinator",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/staff/lawrence.png",
    title: "Mr. Lawrence Gabriel",
    sub: "Team Lead, Training and Assessment",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/staff/tope.png",
    title: "Mr. Temitope Akinkunmi",
    sub: "Co-ordinator Special Projects",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
];

export default function Heros() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 px-10 py-10 mb-20"
      >
        <p className="text-lg text-red-800 text-center font-medium">The Team</p>
        <p className="text-3xl font-semibold text-center py-3">
          Get to know the faces behind the success of our company
        </p>
        <p className="text-gray-500 text-base py-3 text-center w-full lg:w-[450px] md:w-[450px] mx-auto">
          At C-STEMP we pride ourselves in our wealth of knowledge and
          leadership, putting us at the forefront of innovation in Africa&apos;s
          Technical and Vocational Education Space
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap w-full items-center content-center justify-center lg:items-center lg:content-center lg:justify-center md:items-center md:content-center md:justify-center">
          {HEROES.map((ser, i) => {
            return (
              <div
                className="px-6 py-4 w-80 lg:w-96 md:w-96 lg:ml-3 md:ml-3 lg:mr-3 md:mr-3 mt-10 mb-10 flex justify-center items-center flex-col rounded-xl bg-gray-50 shadow-lg border border-gray-200"
                key={i}
              >
                <div className="h-20 w-20 rounded-full ">
                  <Image
                    className="object-cover aspect-square h-full w-full rounded-full"
                    height={50}
                    width={50}
                    src={ser.img}
                    alt="services"
                  />
                </div>
                <p className="text-xl font-semibold line-clamp-1">
                  {ser.title}
                </p>
                <p className="text-sm text-center text-red-800 capitalize">
                  {ser.sub}
                </p>
                <div className="flex gap-5 items-center py-3">
                  <a href={ser.fb}>
                    <BsFacebook className="text-base hover:text-red-800" />
                  </a>

                  <a href={ser.twitter}>
                    <AiFillLinkedin className="text-base hover:text-red-800" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
