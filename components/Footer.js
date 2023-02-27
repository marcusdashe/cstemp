import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-slate-900 h-[70vh] flex flex-col lg:flex-row md:flex-row">
      <div className="w-full h-3/6 lg:w-3/6 md:w-3/6 lg:h-full md:h-full bg-red-800"></div>
      <div className="w-full h-3/6 lg:w-3/6 md:w-3/6 lg:h-full md:h-full bg-red-700"></div>
      <div className="w-full h-3/6 lg:w-3/6 md:w-3/6 lg:h-full md:full bg-red-600"></div>
    </div>
  );
}
