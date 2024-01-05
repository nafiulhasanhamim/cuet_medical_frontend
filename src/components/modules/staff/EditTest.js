"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import { EDIT_TEST_INFO, PARTICULAR_TEST_INFO } from "@/utils/apis/endpoint";
import axios from "axios";
import { useEffect, useState } from "react";

const EditTest = ({ test_id }) => {

  const [testData, setTestData] = useState({
    test_name: "",
    test_price: 0,
    test_description: "",
    available_status: "",
    test_image: "",
  });
  const {
    test_name,
    test_price,
    test_image,
    test_description,
    available_status,
  } = testData;

  useEffect(() => {
    const result = axios.get(`${PARTICULAR_TEST_INFO}/${test_id}`)
    .then((res) => {
      setTestData(res.data.testDetails[0]);
    });
  }, []);

  const handleChange = (e) => {
    setTestData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTestImage = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append("image", file);
    await axios
      .post(
        "https://api.imgbb.com/1/upload?key=2c48f4bcce671e360e4753aaec302c77",
        formData
      )
      .then((res) => {
        console.log(res.data.data);
        setTestData((prev) => ({
          ...prev,
          test_image: res.data.data.url,
        }));
      });
  };

  const handleSubmit = async () => {
    console.log(testData)
     const res = await axios
       .put(
         `${EDIT_TEST_INFO}/${test_id}`,
         testData,
       )
       .then((res) => {
         console.log(res.data);
         if (res.data.message === "Test is edited successfully") {
           successToast(res.data.message);
           setTestData([]);
           //  setFlag(!flag);
         } else {
           errorToast(res.data.message);
         }
       });
  }
  return (
    <>
      <div className="add_new" style={{ marginBottom: "5rem" }}>
        <div className="add_product">
          <div className="top">
            <div className="add_text">Edit Test:</div>

            <div className="products">
              <div className="p_name">Test name:</div>
              <input
                className="name_text"
                type="text"
                name="test_name"
                value={test_name}
                onChange={handleChange}
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Test Description:</div>
              <input
                className="name_text"
                type="text"
                name="test_description"
                value={test_description}
                onChange={handleChange}
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Test Price:</div>
              <input
                className="name_text"
                type="number"
                name="test_price"
                value={test_price}
                onChange={handleChange}
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Available Status :</div>

              <select
                name="available_status"
                value={available_status}
                onChange={handleChange}
                required
                className="shop_type"
              >
                <option value="available">Available</option>
                <option value="notavailable">Not Available</option>
              </select>
            </div>
            <div className="products">
              <div className="p_name">Test Image:</div>
              <input
                className="name_text"
                onChange={handleTestImage}
                type="file"
                placeholder=""
              />
            </div>

            <button onClick={handleSubmit} className="btn">
              Edit Test
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTest;
