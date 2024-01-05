import AllTests from "@/components/common/AllTests";
import Footer from "@/components/common/Footer";
import StaffHeader from "@/components/common/StaffHeader";
import AddTest from "@/components/modules/staff/AddTest";

const page = () => {
  return (
    <>
      <StaffHeader />
      <AllTests />
      <AddTest />
      <Footer />
    </>
  );
};

export default page;
