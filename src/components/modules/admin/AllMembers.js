import { GET_ALL_DOCTORS, GET_ALL_STAFFS } from "@/utils/apis/endpoint";


const allDoctors = async () => {
  let doctors = await fetch(
    `${GET_ALL_DOCTORS}`
  );
  doctors = await doctors.json();
  return doctors.doctors;
};


const allStaffs = async () => {
  let staffs = await fetch(`${GET_ALL_STAFFS}`);
  staffs = await staffs.json();
  return staffs.staffs;
};
const AllMembers = async () => {
const doctors = await allDoctors();
const staffs = await allStaffs();
  return (
    <>
      <div className="admin-wrapper home-wrapper-2">
        <div className="order_product">
          <div className="top">
            <div className="add_text">All Doctors:</div>

            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Name</th>

                  {/* <th>Available Stock</th> */}

                  <th style={{ textAlign: "center" }}>Email</th>

                  <th style={{ textAlign: "center" }}>Phone No.</th>

                  <th style={{ textAlign: "center" }}>Specialization</th>
                  <th style={{ textAlign: "center" }}>Experience</th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doctor) => {
                  const {
                    name,
                    email,
                    phone_number,
                    specialization,
                    experience,
                    user_image,
                  } = doctor;

                  return (
                    <>
                      <tr>
                        <td data-label="Name">{name}</td>
                        <td data-label="Email">{email}</td>
                        <td data-label="Phone No.">{phone_number}</td>
                        <td data-label="Specialization">{specialization}</td>
                        <td data-label="Experience">{experience}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="order_product">
        <div className="top">
          <div className="add_text">All Staffs:</div>

          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Name</th>

                <th style={{ textAlign: "center" }}>Email</th>

                <th style={{ textAlign: "center" }}>Phone No.</th>
              </tr>
            </thead>

            <tbody>
              {staffs.map((staff) => {
                const {
                  name,
                  email,
                  phone_number,
                  user_image,
                } = staff;

                return (
                  <>
                    <tr>
                      <td data-label="Name">{name}</td>
                      <td data-label="Email">{email}</td>
                      <td data-label="Phone No.">{phone_number}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllMembers;
