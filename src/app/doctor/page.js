import BreadCrum from "@/components/common/BreadCrum";
import DoctorHeader from "@/components/common/DoctorHeader";
import Footer from "@/components/common/Footer";
import PendingAppointments from "@/components/modules/doctor/PendingAppointments";

const page = () => {
  return (
    <>
      {/* <AdminHeader /> */}
      <DoctorHeader />
      <BreadCrum title="Doctor Panel" />
      <PendingAppointments />
      <Footer />
    </>
  );
};

export default page;
