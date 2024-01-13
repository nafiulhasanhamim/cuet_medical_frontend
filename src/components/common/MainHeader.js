"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MainHeader = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session?.data?.user)
    if (session?.data?.user?.role === "staff") {
      router.push("/staff");
    } else if (session?.data?.user?.role === "doctor") {
      router.push("/doctor");
      // errorToast("Login Failed.Try Again!!!")
    } else if (session?.data?.user?.role === "admin") {
      router.push("/admin");
    } 
    // else if (session?.data?.user?.role === "patient") {
    //   router.push("/profile");
    // }
  }, [session]);
  return (
    <>
      {/* <!--Main Header--> */}
      <nav className="navbar navbar-default">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                {/* <a href="index.html">Home</a> */}
                <Link href="/">Home</Link>
              </li>
              {/* <li>
                <a href="about.html">About</a>
              </li> */}
              <li>
                {/* <a href="service.html">Service</a> */}
                {/* <Link href="/services">Services</Link> */}
                <Link href="/">Home</Link>
              </li>
              {/* <li>
                <a href="gallery.html">Gallery</a>
              </li> */}
              <li>
                {/* <a href="team.html">Team</a> */}
                <Link href="/team">Team</Link>
              </li>
              <li>
                {/* <a href="appointment.html">Appointment</a> */}
                <Link href="/appointment">Appointment</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                {/* <a href="contact.html">Contact</a> */}
                {session?.data?.user ? (
                  <Link href="" onClick={() => signOut()}>
                    Logout
                  </Link>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
      {/* <!--End Main Header --> */}
    </>
  );
};

export default MainHeader;
