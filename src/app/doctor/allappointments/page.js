import BreadCrum from "@/components/common/BreadCrum";
import DoctorHeader from "@/components/common/DoctorHeader";
import Footer from "@/components/common/Footer";
import AllAppointments from "@/components/modules/doctor/AllApointments";

const page = () => {
  return (
    <>
      <DoctorHeader />
      <BreadCrum title="Doctor Panel" />
      <AllAppointments />
      <Footer />
    </>
  );
};

export default page;
