"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const StaffHeader = () => {
  const session = useSession()
  const router = useRouter();
  useEffect(()=> {
    if(!session?.data?.user) {
      router.push("/login")
    }
  },[session])
  return (
    <>
      <div className="header">
        <div className="name">Staff Panel</div>
        <div className="right">
          <Link href="/staff">
            <button className="admin_btnAll">Medicines</button>
          </Link>

          <Link href="/staff/tests">
            <button className="admin_btnAll">Tests</button>
          </Link>

          <Link href="/staff/appointment">
            <button className="admin_btnAll">Appointment</button>
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

export default StaffHeader;
