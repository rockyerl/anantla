import React, { forwardRef } from "react";
import Head from "next/head";
import Header from "@/components/_shared/core/header";
import Footer from "@/components/_shared/core/footer";
import useStoreSelf from "@/stores";
import Alert from "../../common/Alert";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { code, message } = useStoreSelf((state) => state.response);
  return (
    <div className="contain-layout">
      <Head>
        <title>Anantla Tech Ventures</title>
        <meta
          name="description"
          content="At Anantla Tech Ventures, we empower you with IT training, tailored software solutions, and consulting to unlock your full potential."
        />
        <meta
          name="keywords"
          content="IT training, software solutions, consulting, Anantla Tech Ventures, technology empowerment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Anantla Tech Ventures - Empowering Your Tech Journey"
        />
        <meta
          property="og:description"
          content="Unlock your full potential with our IT training, tailored software solutions, and expert consulting services."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anantla.com/" />
      </Head>
      <Header />
      <main className="main-content bg-base-100 -mt-[100px]">
        <div>
          {children}
          {[200, 201].includes(code ?? 0) && (
            <Alert type={"success"} message={message} />
          )}
          {![201, 200, null].includes(code) && (
            <Alert type={"error"} message={message} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default forwardRef(Layout);
