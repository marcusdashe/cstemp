import React from "react";
import NavBar from "@/components/NavBar";

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
    </div>
  );
};

export default Layout;
