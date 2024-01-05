import Footer from "@/components/common/Footer";
import StaffHeader from "@/components/common/StaffHeader";
import ParticularMedicineStockDetails from "@/components/modules/staff/ParticularMedicineStockDetails";

const page = ({ params }) => {
  return (
    <>
      <StaffHeader />
      <ParticularMedicineStockDetails _id={params._id}/>
      <Footer />
    </>
  );
};

export default page;
