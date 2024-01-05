import React from "react";

const AddTest = () => {
  return (
    <>
      <div className="add_new" style={{ marginBottom: "5rem" }}>
        <div className="add_product">
          <div className="top">
            <div className="add_text">Add new Test:</div>

            <div className="products">
              <div className="p_name">Medicine name:</div>
              <input
                className="name_text"
                type="text"
                name="product_name"
                //   value={product_name}
                //   onChange={handleChange}
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Product Details:</div>
              <input
                className="name_text"
                type="text"
                name="product_description"
                //   value={product_description}
                //   onChange={handleChange}
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Product Price:</div>
              <input
                className="name_text"
                type="number"
                name="product_price"
                //   value={product_price}
                //   onChange={handleChange}
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Select Shop :</div>

              <select
                name="shop_id"
                //   value={shop_id}
                //   onChange={handleChange}
                required
                className="shop_type"
              >
                {/* {allShops?.map((shop) => {
                    const { shop_id, shop_name } = shop;
                    return (
                      <>
                        <option value={shop_id}>{shop_name}</option>
                      </>
                    );
                  })} */}

                {/* <option value="Medicine">Medicine</option>
                              <option value="Food">Food</option> */}
              </select>
            </div>
            <div className="products">
              <div className="p_name">Product Image:</div>
              <input
                className="name_text"
                //   onChange={handleProductImage}
                type="file"
                placeholder=""
              />
            </div>

            <button className="btn">Add Product</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTest;
