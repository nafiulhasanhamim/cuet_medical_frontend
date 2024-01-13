import BreadCrum from '@/components/common/BreadCrum';
import DoctorHeader from '@/components/common/DoctorHeader';
import Footer from '@/components/common/Footer';
import ActiveStatus from '@/components/modules/doctor/ActiveStatus';
import React from 'react'

const page = () => {
  return (
    <>
      <DoctorHeader />
      <BreadCrum title="Doctor Panel" />
      <ActiveStatus />
      <Footer />
    </>
  );
}

export default page