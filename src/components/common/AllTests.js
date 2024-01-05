import { GET_ALL_TEST_INFO } from "@/utils/apis/endpoint";
import Link from "next/link";

const testList = async () => {
  let testInfo = await fetch(GET_ALL_TEST_INFO);
  testInfo = await testInfo.json();
  return testInfo.testInfo;
};
const AllTests = async () => {
  const testInfo = await testList();
  return (
    <>
      <section className="team-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>
              Test
              <span>List</span>
            </h3>
          </div>
          <div className="row">
            {testInfo?.map((test, index) => {
              const {
                test_id,
                test_name,
                test_description,
                test_price,
                available_status,
              } = test;
              return (
                <>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="team-member">
                      <img
                        src="images/team/doctor-2.jpg"
                        alt="doctor"
                        className="img-responsive"
                      />
                      <div className="contents text-center">
                        <h4>{test_name}</h4>
                        <p>{test_description}</p>
                        <p>Test Price: {test_price}</p>
                        <p>Status: {available_status}</p>
                        <button
                          style={{
                            backgroundColor: "rgb(110, 149, 199)",
                            padding: "0.7rem",
                          }}
                        >
                          <Link href={`/staff/tests/edit/${test_id}`} style={{color:'white', textDecoration:'none'}}>Edit Test</Link>
                        </button>
                        {/* <Link href={"/edit"}>Edit Test</Link> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTests;
