import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-slate-900 h-[70vh] flex">
      <div className="w-2/6 h-full flex flex-col items-start content-start text-white">
        <Image src="/assets/logo.svg" height={100} width={100} alt="logo" />
        <ul className="p-3">
          <li>About Us</li>
          <li>FAQ</li>
          <li>Legal Information</li>
        </ul>
      </div>
      <div className="w-2/6 h-full"></div>
      <div className="w-2/6 h-full"></div>
    </div>
  );
}
