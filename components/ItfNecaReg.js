import React from "react";
import Link from "next/link";

const ItfNecaReg = () => {
  return (
    <section className="bg-[#8d161a] py-14 flex flex-col items-center justify-center">
      <h2 className="text-2xl text-white w-[80%] text-center mb-8">
        Please click the button below to register for the ITF-NECA Technical
        Skills Development Programme
      </h2>
      <a
        target={"_blank"}
        href="https://forms.gle/4LuB5bWfM5rY5e4V6"
        rel="noreferrer"
        className="text-[#8d161a] bg-white border-2 border-white font-bold py-2 px-4 rounded-lg hover:scale-125 duration-500"
      >
        Register
      </a>
    </section>
  );
};

export default ItfNecaReg;
