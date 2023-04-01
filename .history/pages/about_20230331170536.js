import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Coming Soon!</h1>

        <p className="mt-3 text-2xl">This page will be implemented soon.</p>
      </main>
    </div>
  );
};

export default about;
