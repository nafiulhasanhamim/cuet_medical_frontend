import BreadCrum from "@/components/common/BreadCrum";
import Footer from "@/components/common/Footer";
import UserHeader from "@/components/common/UserHeader";

const page = () => {
  return (
    <>
      <UserHeader />
      <BreadCrum title="User Panel" />
      <Footer />
    </>
  );
};

export default page;
