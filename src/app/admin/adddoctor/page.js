import AdminHeader from '@/components/common/AdminHeader';
import BreadCrum from '@/components/common/BreadCrum';
import AddNewDoctor from '@/components/modules/admin/AddDoctor';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
        <AdminHeader />
        {/* <Meta title={"Admin Panel"} /> */}
        <BreadCrum title="Admin Panel" />
        <AddNewDoctor />

    </>
  );
}

export default page