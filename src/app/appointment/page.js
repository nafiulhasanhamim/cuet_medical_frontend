import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/MainHeader";
import PageTitle from "@/components/common/PageTitle";
import Team from "@/components/common/Team";
import TopHeader from "@/components/common/TopHeader";
import UpperHeader from "@/components/common/UpperHeader";
import Appointment from "@/components/modules/appointment/Appointment";
import React from "react";

const page = () => {
  return (
    <>
      <div className="page-wrapper">
        <TopHeader />
        <UpperHeader />
        <MainHeader />
        <PageTitle />
        <Appointment />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default page;
