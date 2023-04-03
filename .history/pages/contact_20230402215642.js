import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

const contact = () => {
  // const { register, handleSubmit, errors } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Contact Us</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  );
};

export default contact;
