import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/MainHeader";
import PageTitle from "@/components/common/PageTitle";
import TopHeader from "@/components/common/TopHeader";
import UpperHeader from "@/components/common/UpperHeader";
import Registration from "@/components/registration/Registration";
import React from "react";

const page = () => {
  return (
    <>
      <div className="page-wrapper">
        <TopHeader />
        <UpperHeader />
        <MainHeader />
        <PageTitle />
        <Registration />
        <Footer />
      </div>
    </>
  );
};

export default page;
