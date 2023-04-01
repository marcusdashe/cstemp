import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Anthophilia</title>
        <meta
          name="description"
          content="Construction Skills Training Empowerment Partnership"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex-grow mt-[100px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
