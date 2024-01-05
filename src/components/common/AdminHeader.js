"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AdminHeader = () => {
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
        <div className="name">Admin Panel</div>
        <div className="right">
          <Link href="/admin">
            <button className="admin_btnAll">Add new Staff</button>
          </Link>

          <Link href="/admin/adddoctor">
            <button className="admin_btnAll">Add new Doctor</button>
          </Link>

          <Link href="/admin/allmembers">
            <button className="admin_btnAll">All Members</button>
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
}

export default AdminHeader