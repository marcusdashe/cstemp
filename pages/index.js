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
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>C-STEMP - Construction Skill Empowerment Partnerships</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Services />
      <PopularClass />
      <Heros />
      
      <Testimonials />
      <Footer />
    </>
  );
}
