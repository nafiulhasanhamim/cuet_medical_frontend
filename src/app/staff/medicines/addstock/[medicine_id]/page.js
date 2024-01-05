import Footer from "@/components/common/Footer";
import StaffHeader from "@/components/common/StaffHeader";
import AddStock from "@/components/modules/staff/AddStock";

const page = ({params}) => {
  return (
    <>
      <StaffHeader />
      <AddStock medicine_id={params.medicine_id}/>
      <Footer />
    </>
  );
}

export default page