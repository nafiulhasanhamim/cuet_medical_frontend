"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DoctorHeader = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.data?.user) {
      router.push("/login");
    }
  }, [session]);
  return (
    <>
      <div className="header">
        <div className="name">Doctor Panel</div>
        <div className="right">
          <Link href="/doctor">
            <button className="admin_btnAll">Pending Appoint.</button>
          </Link>

          {/* <Link href="/admin/adddoctor">
            <button className="admin_btnAll">Pending Appoint.</button>
          </Link> */}

          <Link href="/doctor/allappointments">
            <button className="admin_btnAll">All Appoint.</button>
          </Link>

          <Link href="/">
            <button
              onClick={() => {
                signOut();
                // router.push("/login")
              }}
              className="admin_btnAll"
            >
              Signout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorHeader;
