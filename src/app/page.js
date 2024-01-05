import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/MainHeader";
import TopHeader from "@/components/common/TopHeader";
import UpperHeader from "@/components/common/UpperHeader";
import About from "@/components/modules/home/About";
import Contact from "@/components/modules/home/Contact";
import Information from "@/components/modules/home/Information";
import PageSlider from "@/components/modules/home/PageSlider";
import Services from "@/components/modules/home/Services";
import Team from "@/components/common/Team";
import Testimonial from "@/components/modules/home/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* <!-- Preloader --> */}
        {/* <div class="preloader"></div>  */}
        {/* <!-- Preloader --> */}
        <TopHeader />
        <UpperHeader />
        <MainHeader />
        <PageSlider />
        <Information />
        <About />
        <Services />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
