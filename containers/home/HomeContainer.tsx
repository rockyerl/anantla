import Layout from "@/components/_shared/core/layout";
import HomeComponent from "@/components/home/HomeComponent";
import { forwardRef } from "react";

const HomeContainer = () => {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
};

export default forwardRef(HomeContainer);
