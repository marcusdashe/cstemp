import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PopularClass from "../components/PopularClass";
import Heros from "../components/Heros";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useState } from "react";
import ItfNecaReg from "../components/ItfNecaReg";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <PopularClass />
        <Heros />
        <ItfNecaReg />
        <Testimonials />
      </Layout>
    </>
  );
}
