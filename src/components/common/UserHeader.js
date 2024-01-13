"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserHeader = () => {
  const session = useSession();
  const router = useRouter();
//   const [userId, setUserId] = useState("")
  useEffect(() => {
    if (!session?.data?.user) {
      router.push("/login");
    } 
    // else {
    //     setUserId(session?.data?.user?.user_id)
    // }

  }, [session]);
  return (
    <>
      <div className="header">
        <div className="name">User Panel</div>
        <div className="right">
          <Link href="/">
            <button className="admin_btnAll">Home</button>
          </Link>

          {/* <Link href="/admin/adddoctor">
            <button className="admin_btnAll">Pending Appoint.</button>
          </Link> */}

          <Link href={`/previousappointments`}>
            <button className="admin_btnAll">Previous Appoint.</button>
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

export default UserHeader;
