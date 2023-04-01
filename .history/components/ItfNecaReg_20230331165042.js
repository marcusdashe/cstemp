import React from "react";
import Link from "next/link";

const ItfNecaReg = () => {
  return (
    <section className="bg-[#8d161a] py-8 flex flex-col justify-center">
      <h2 className="text-2xl text-white w-[80%] text-center mb-8">
        Please click the button provided below to proceed with the registration
        for the ITF-NECA Technical Skills Development Project.
      </h2>

      <Link
        href="/registration"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </Link>
    </section>
  );
};

export default ItfNecaReg;
