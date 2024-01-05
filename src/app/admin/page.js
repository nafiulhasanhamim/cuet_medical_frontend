import AdminHeader from '@/components/common/AdminHeader';
import BreadCrum from '@/components/common/BreadCrum';
import Footer from '@/components/common/Footer';
import AddNewStaff from '@/components/modules/admin/AddStaff';
// import Meta from '@/components/common/Meta';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
         <AdminHeader />
        {/* <Meta title={"Admin Panel"} /> */}
        <BreadCrum title="Admin Panel" />
        <AddNewStaff />
        <Footer />
    </>
  );
}

export default page