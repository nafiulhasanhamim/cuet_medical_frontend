import BreadCrum from "@/components/common/BreadCrum";
import DoctorHeader from "@/components/common/DoctorHeader";
import Footer from "@/components/common/Footer";
import Addprescription from "@/components/modules/prescription/Addprescription";
import ViewPrescription from "@/components/modules/prescription/ViewPrescription";

const page = ({ params }) => {
  return (
    <>
      <DoctorHeader />
      <BreadCrum title="Prescription" />
      <ViewPrescription _id={params._id}/>
      <Footer />
    </>
  );
};

export default page;
