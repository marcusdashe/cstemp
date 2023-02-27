import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";

const HEROES = [
  {
    img: "/assets/h1.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    promo:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/assets/h2.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    promo:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/assets/h3.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    promo:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/assets/h3.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    promo:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
];

export default function Heros() {
  return (
    <>
      <div className="mt-20 px-20 py-10 mb-20">
        <p className="text-lg text-red-800 text-center font-medium">Tutors</p>
        <p className="text-3xl font-semibold text-center py-3">
          Meet the Heroes
        </p>
        <p className="text-gray-500 text-base py-3 text-center w-full lg:w-[450px] md:w-[450px] mx-auto">
          On Ed-Circle, instructors from all over the world instruct millions of
          students. We offer the knowledge and abilities.
        </p>
        <div className="flex flex-col lg:flex-row md:flex-row w-full items-center content-center justify-center lg:items-center lg:content-center lg:justify-start md:items-center md:content-center md:justify-start">
          {HEROES.map((ser, i) => {
            return (
              <div
                className="px-6 py-4 w-80 lg:w-96 md:w-96 lg:ml-3 md:ml-3 lg:mr-3 md:mr-3 mt-10 mb-10 flex justify-center items-center flex-col rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-red-800 group "
                key={i}
              >
                <Image
                  className="w-full h-20"
                  height={50}
                  width={50}
                  src={ser.img}
                  alt="services"
                />
                <p className="text-xl group-hover:text-white font-semibold line-clamp-1">
                  {ser.title}
                </p>
                <p className="text-sm text-center text-red-800 group-hover:text-white capitalize py-2">
                  {ser.sub}
                </p>

                <p className="text-base text-center group-hover:text-white  py-2">
                  {ser.promo}
                </p>
                <div className="flex gap-5 items-center">
                  <a href={ser.fb}>
                    <BsFacebook className="text-red-700 hover:text-white" />
                  </a>

                  <a href={ser.twitter}>
                    <AiFillLinkedin className="text-red-700 hover:text-white" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
