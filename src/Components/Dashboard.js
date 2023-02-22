import React from "react";
import User from "./Images/user.jpg";
const Dashboard = () => {
  const Dashboardmenu = [
    "Products",
    "Addproduct",
    "UpdateProduct",
    "Deleteproduct",
  ];
  return (
    <div className=" mt-7 ml-14 ">
      <div className="w-64 h-64 flex flex-col items-center justify-center bg-neutral-200 rounded-2xl ">
        <div>
          <img className="rounded-full w-[88px] h-[88px]" src={User}></img>
        </div>
        <strong className="pt-14">Adminstrator</strong>
        <p className="pt-5">ID:1232455</p>
      </div>
      <div className=" flex flex-col items-center  w-64 rounded-2xl mt-10 h-[600px] bg-neutral-200">
        <strong className="h-10 flex justify-center items-center mt-7 w-60  bg-white rounded-2xl">
          Dashbord
        </strong>
        {
          <div className="  mt-10 flex flex-col gap-y-10">
            {Dashboardmenu.length > 0 &&
              Dashboardmenu.map((obj) => (
                <div className="flex flex-col w-60   ">
                  <strong className="h-10 flex justify-center items-center rounded-2xl bg-white">
                    {obj}
                  </strong>
                </div>
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Dashboard;
