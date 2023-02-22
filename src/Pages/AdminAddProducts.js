import React from "react";

const AdminAddProducts = () => {
  const ProductInfo = [
    ["Name", "Eg:Unibic", "Text"],
    ["catogory", "Eg:Biscuts", "Text"],
    ["Price", "₹*", "Number"],
    ["Quantity", "QTY*", "Number"],
    ["MFD", "dd/mm/yyyy", "Date"],
    ["EPD", "dd/mm/yyyy", "Date"],
  ];
  console.log(ProductInfo);
  return (
    <div>
      {
        <div>
          {ProductInfo.map((obj) => (
            <div>
              <label> {obj[0]}</label>
              <input placeholder={obj[1]} type={obj[2]} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default AdminAddProducts;
