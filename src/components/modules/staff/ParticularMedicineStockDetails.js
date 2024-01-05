import BreadCrum from "@/components/common/BreadCrum";
import { PARTICULAR_MEDICINE_FULL_STOCK_DETAILS } from "@/utils/apis/endpoint";
const findMonth = (month) => {
  const getMonth = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  }
  return getMonth[month]
}
const fullDetails = async (_id) => {
  let stockInfo = await fetch(
    `${PARTICULAR_MEDICINE_FULL_STOCK_DETAILS}/${_id}`,
    {
      method: 'GET',
      // credentials: "include",
    }
  );
  stockInfo = await stockInfo.json();
  return stockInfo?.medicineDetails[0];
  console.log(stockInfo)
};
const ParticularMedicineStockDetails = async ({ _id }) => {
  const stockDetails = await fullDetails(_id);
  return (
    <>
      <div className="admin-wrapper home-wrapper-2">
        <div className="order_product">
          <div className="top">
            <div className="add_text">Stock Details:</div>

            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Medicine name</th>

                  {/* <th>Available Stock</th> */}

                  <th style={{ textAlign: "center" }}>Medicine mg</th>

                  <th style={{ textAlign: "center" }}>Price/piece</th>

                  <th style={{ textAlign: "center" }}>Total Piece</th>
                  <th style={{ textAlign: "center" }}>Total Price</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                </tr>
              </thead>

              <tbody>
                {stockDetails?.stockList?.map((stock) => {
                  const {
                    medicine_name,
                    medicine_id,
                    availableStock,
                    medicine_image,
                    medicine_mg,
                  } = stockDetails;
                  const { price, piece, createdAt } = stock;
                  const dateObj = new Date(createdAt);
                  const year = dateObj.getFullYear();
                  const month = dateObj.getMonth() + 1; // Months are 0-indexed
                  const day = dateObj.getDate();
                  return (
                    <>
                      <tr>
                        <td data-label="Medicine name">{medicine_name}</td>
                        {/* <td data-label="available stock">{availableStock}</td> */}
                        <td data-label="Medicine mg">{medicine_mg}</td>
                        <td data-label="Price/piece">{price} tk</td>
                        <td data-label="Piece">{piece}</td>
                        <td data-label="Total Price">{`${
                          price * piece
                        } tk`}</td>
                        <td data-label="Date">{`${findMonth(
                          month
                        )} ${day}, ${year}`}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticularMedicineStockDetails;
