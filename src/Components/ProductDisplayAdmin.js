import React from "react";
import ProductImage from "./Images/product.png";
const ProductDisplayAdmin = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1];
  const details = [
    {
      content1: "ProductName",
      Details1: "ABCD",
      content2: "Quantity",
      Details2: "000",
      content3: "Price",
      Details3: "$00",
      content4: "Catogory",
      Details4: "XYZ",
    },
  ];
  return (
    <div className=" flex flex-wrap">
      {
        <div className="flex flex-wrap">
          {arr.map((obj) => (
            <div className=" mt-7 ml-14  flex flex-wrap items-center w-[500px] bg-neutral-100 h-[172px]">
              <div>
                <img className="w-32 ml-4 h-32" src={ProductImage}></img>
              </div>
              {
                <div>
                  {
                    <div>
                      {details.map((obj) => (
                        <div className="ml-5">
                          <p className="mt-2">
                            {obj.content1}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{obj.Details1}
                          </p>
                          <p className="mt-2">
                            {obj.content2}   :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{obj.Details2}
                          </p>
                          <p className="mt-2">
                            {obj.content3}    :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{obj.Details3}
                          </p>
                          <p className="mt-2">
                            {obj.content4}   :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{obj.Details4}
                          </p>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default ProductDisplayAdmin;
