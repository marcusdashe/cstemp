import React from "react";
import Link from "next/link";

const ItfNecaReg = () => {
  return (
    <section className="bg-[#8d161a] py-8 flex flex-col justify-center">
      <h2 className="text-2xl text-white w-[80%] text-center mb-8">
        Please click the button provided below to proceed with the registration
        for the ITF-NECA Technical Skills Development Project.
      </h2>

      <a
        target={"_blank"}
        href="/registration"
        className=" text-white font-bold py-2 px-4 rounded"
      >
        Register
      </a>
    </section>
  );
};

export default ItfNecaReg;
