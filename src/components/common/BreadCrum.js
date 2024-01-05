import Link from "next/link";
import React from "react";


const BreadCrum = (props) => {
  const { title } = props;
  return (
    <div className="breadcrum mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="mb-0 text-center mt-5">
              <Link href="/" className="text-dark">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrum;
