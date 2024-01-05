import AdminHeader from "@/components/common/AdminHeader";
import BreadCrum from "@/components/common/BreadCrum";
import Footer from "@/components/common/Footer";
import AllMembers from "@/components/modules/admin/AllMembers";

const page = () => {
  return (
    <>
      <AdminHeader />
      <BreadCrum title="Admin Panel" />
      <AllMembers />
      <Footer />
    </>
  );
};

export default page;
