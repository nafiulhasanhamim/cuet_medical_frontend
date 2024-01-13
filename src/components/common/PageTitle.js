"use client"
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const PageTitle = () => {
 const [pageTitle, setPageTitle] = useState("");
 const pathName = usePathname();
 console.log(pathName)
 useEffect(() => {
   if (pathName === "/appointment") {
     setPageTitle("Appointment");
   } else if (pathName === "/team") {
     setPageTitle("Team");
   } else if (pathName === "/services") {
     setPageTitle("services");
   } else if (pathName === "/login") {
     setPageTitle("login");
   } else if (pathName === "/registration") {
     setPageTitle("registration");
   } else if(pathName === "/profile") {
    setPageTitle("user profile")
   }
 }, []);
  return (
    <>
      {/* <!--Page Title--> */}
      <section
        className="page-title text-center"
        style={{backgroundImage:`url(images/background/3.jpg)`}}
      >
        <div className="container">
          <div className="title-text">
            <h1>{pageTitle}</h1>
            <ul className="title-menu clearfix">
              <li>
                <a href="index.html">home &nbsp;/</a>
              </li>
              <li>{pageTitle}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--End Page Title--> */}
    </>
  );
};

export default PageTitle;
