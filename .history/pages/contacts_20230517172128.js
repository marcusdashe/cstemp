import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Map from "@/components/Map";

import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-5 lg:mt-5"
      >
        <ContactForm />
        <ContactDetails />
        <Map />
      </motion.div>
    </Layout>
  );
};

export default Contact;
