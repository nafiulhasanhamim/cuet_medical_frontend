import Footer from "@/components/common/Footer";
import StaffHeader from "@/components/common/StaffHeader";
import EditTest from "@/components/modules/staff/EditTest";

const page = ({ params }) => {
  // console.log(params.test_id);
  return (
    <>
      <StaffHeader />
      <EditTest test_id={params.test_id}/>
      <Footer />
    </>
  );
};

export default page;
