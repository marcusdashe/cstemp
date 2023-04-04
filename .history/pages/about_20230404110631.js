import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

const about = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-1">
        <Head>
          <title>About Us</title>
          <meta
            name="description"
            content="Learn more about our company and mission."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="bg-primary-500 text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              We are a team of passionate individuals dedicated to making a
              difference in the world.
            </p>
          </div>
        </div>

        <main className="flex flex-col items-center justify-center flex-1 px-10 text-center">
          <h1 className="text-6xl font-bold">Coming Soon!</h1>

          <p className="mt-3 text-2xl">This page will be implemented soon.</p>
        </main>
      </div>
    </Layout>
  );
};

export default about;
