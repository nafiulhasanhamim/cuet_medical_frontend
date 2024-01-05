import AllMedicines from "@/components/common/AllMedicines";
import BreadCrum from "@/components/common/BreadCrum";
import Footer from "@/components/common/Footer";
import StaffHeader from "@/components/common/StaffHeader"
import AddMedicine from "@/components/modules/staff/AddMedicine";

const page = () => {
  return (
    <>
      <StaffHeader />
      <BreadCrum title="Staff Panel" />
      <AllMedicines />
      <AddMedicine />
      <Footer />
    </>
  );
}

export default page