import React, { forwardRef } from "react";
import Header from "@/components/_shared/core/header";
import Footer from "@/components/_shared/core/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="contain-layout">
      <Header />
      <main className="main-content bg-base-100 -mt-[100px]">{children}</main>
      <Footer />
    </div>
  );
};

export default forwardRef(Layout);
