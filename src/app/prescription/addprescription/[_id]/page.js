import BreadCrum from "@/components/common/BreadCrum";
import DoctorHeader from "@/components/common/DoctorHeader";
import Footer from "@/components/common/Footer";
import Addprescription from "@/components/modules/prescription/Addprescription";

const page = ({params}) => {
  return (
    <>
      <DoctorHeader />
      <BreadCrum title="Doctor Panel" />
      <Addprescription _id={params._id}/>
      <Footer />
    </>
  );
};

export default page;
