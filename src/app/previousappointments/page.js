import BreadCrum from "@/components/common/BreadCrum";
import Footer from "@/components/common/Footer";
import UserHeader from "@/components/common/UserHeader";
import PreviousAppointments from "@/components/modules/user/PreviousAppointments";

const page = ({ params }) => {
  return (
    <>
      <UserHeader />
      <BreadCrum title="User Panel" />
      <PreviousAppointments />
      <Footer />
    </>
  );
};

export default page;
