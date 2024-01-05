import Footer from "@/components/common/Footer";
import StaffHeader from "@/components/common/StaffHeader";
import AllAppointments from "@/components/modules/staff/AllAppointments";

const page = () => {
  return (
    <>
      <StaffHeader />
      <AllAppointments />
      <Footer />
    </>
  );
};

export default page;
