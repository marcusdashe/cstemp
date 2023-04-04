import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Yutube from "@/components/Yutube";

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

        <div className="bg-[#8D161A] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-lg">
              We are a team of passionate individuals dedicated to making a
              difference in the world.
            </p>
          </div>
        </div>
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sed lacinia orci, id ultrices nisl. Fusce congue, augue non
                faucibus aliquam, purus lorem lacinia enim, eget tincidunt odio
                sapien ut nunc.
              </p>
              <p className="text-lg">
                In auctor erat eget felis feugiat, quis sodales elit feugiat.
                Etiam vel nisi in lectus elementum luctus.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-10">Our Vision</h2>

              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sed lacinia orci, id ultrices nisl. Fusce congue, augue non
                faucibus aliquam, purus lorem lacinia enim, eget tincidunt odio
                sapien ut nunc.
              </p>
              <p className="text-lg">
                In auctor erat eget felis feugiat, quis sodales elit feugiat.
                Etiam vel nisi in lectus elementum luctus.
              </p>
            </div>

            <div>
              <Image
                src="/about/about.jpg"
                alt="About Us Image"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <Yutube />
      </div>
    </Layout>
  );
};

export default about;
