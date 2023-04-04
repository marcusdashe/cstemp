import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

const contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Contact Us</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container mx-auto py-12">
          <div className=" w-[80%] mx-auto bg-white rounded-lg overflow-hidden ">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-[#8D161A] text-white py-4 px-4 md:py-12 md:px-12">
                <h2 className="text-2xl font-semibold">Get in touch</h2>
                <p className="mt-2 text-md">We would love to hear from you</p>
              </div>
              <div className="p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        size={50}
                        className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm border-gray-300 rounded-md h-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        size={50}
                        className="shadow-sm h-10 focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="shadow-sm focus:ring-gray-700 focus:border-gray-700 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8D161A] hover:bg-[#270d0e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div className="text-center mt-8">
                  <Link href="/">
                    <p p className="text-[#8D161A] focus:border-gray-700">
                      Back to Home
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
