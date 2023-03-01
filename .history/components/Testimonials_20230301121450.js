import React from "react";
import Image from "next/image";

const HEROES = [
  {
    img: "/assets/h1.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/assets/h2.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/assets/h2.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },
  {
    img: "/assets/h2.svg",
    title: "Theresa Webb",
    sub: "Application Support Analyst Lead",
    fb: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
  },

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
      /> */} <p>Our Partners</p>
      <p className="text-3xl font-semibold mb-3 mt-10 text-center lg:text-start md:text-start">
      Meet Our Trusted Partners: Together We're Building a Better Future <br />
      </p>
      <div className="flex flex-row">
      <div className="flex flex-col items-center content-center justify-between mx-[20px] my-4">
        <Image src="/assets/person.svg" height={100} width={100} alt="" />
        <span className="text-center">
          <p className="text-lg font-medium">Jane Doe</p>
          <p className="text-base text-gray-400 font-medium ">ITF-NECA</p>
        </span>
      </div>

      <div className="flex flex-col items-center content-center justify-between mx-[20px] my-4">
        <Image src="/assets/person.svg" height={100} width={100} alt="" />
        <span className="text-center">
          <p className="text-lg font-medium">Jane Doe</p>
          <p className="text-base text-gray-400 font-medium ">ITF-NECA</p>
        </span>
      </div>
      </div>
      
    </div>
  );
}
