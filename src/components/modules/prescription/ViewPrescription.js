"use client"
import { PRESCRIBED_MEDICINE_DETAILS } from '@/utils/apis/endpoint';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ViewPrescription = ({_id}) => {
// const medicineData = await appointmentMedicineList(_id) 
 const [loader, setLoader] = useState(false);
 const [prescriptionData, setPrescriptionData] = useState([]);
 useEffect(()=> {
    const res = axios.get(`${PRESCRIBED_MEDICINE_DETAILS}/${_id}`)
    .then((res)=> {
        setPrescriptionData(res.data.prescriptionData[0])
    })
 },[])

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="receipt-box">
          {/* actual receipt */}
          <div className="actual-receipt">
            {/* organization logo */}
            <div className="receipt-organization-logo">
              <img alt="logo" src="/images/logo.png" />
            </div>

            {/* organization name */}
            <h5>CUET Medical</h5>

            {/* street address and unit number */}
            <h6>Pahartoli, Raozan</h6>

            {/* city province postal code */}
            <h6>Chittagong, Bangladesh</h6>

            {/* email-phone-and-website */}
            <div className="phone-and-website">
              <p>
                <a href={`mailto:medical.cuet.ac.bd`}>medical.cuet.ac.bd</a>
              </p>
              <p>01944700614</p>

              {/* <p>
                <a href="https://www.youtube.com/@jsSolutions" target="blank">
                  https://www.youtube.com/@jsSolutions
                </a>
              </p> */}
            </div>

            <div className="colored-row first">
              <span>Doctor Name</span>
              <span>Phone Number</span>
            </div>

            <div className="data-row">
              <span className="font-weight">
                {prescriptionData?.doctor?.name}
              </span>
              <span>{prescriptionData?.doctor?.phone_number}</span>
            </div>

            <div className="colored-row">
              <span>Patient Name</span>
              <span>Phone Number</span>
            </div>

            <div className="data-row">
              <span className="font-weight">
                {prescriptionData?.patient?.name}
              </span>
              <span>{prescriptionData?.patient?.phone_number}</span>
            </div>

            <div className="colored-row">
              <span>Medicine Details</span>
              <span />
            </div>
            {
                prescriptionData?.prescription?.map((medicine)=> {
                    const {note} = medicine;
                    const {medicine_name} = medicine.medicineDetails;
                    return (
                      <>
                        <div className="data-row border-bottom">
                          <span>
                            <span className="font-weight">Medicine Name :</span> {medicine_name}
                          </span>
                          <span>
                            <span className="font-weight">Note :</span>
                            {note}
                          </span>
                        </div>
                      </>
                    );
                })
            }
            {/* <div className="colored-row">
              <span>Thank You For Your Generous Donation</span>
              <span />
            </div> */}
          </div>
          {/* end of actual receipt */}

          {/* receipt action */}
          <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader === false)}
              >
                {loader ? <span>Downloading</span> : <span>Download Prescription</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPrescription