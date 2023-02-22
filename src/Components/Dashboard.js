import React from "react";
import User from "./Images/user.jpg";
const Dashboard = () => {
  return (
    <div>
      <div className="w-64 h-64 flex flex-col items-center justify-center bg-neutral-200 rounded-2xl ">
        <div>
          <img className="rounded-full w-[88px] h-[88px]" src={User}></img>
        </div>
        <strong className="pt-14">Adminstrator</strong>
        <p className="pt-5">ID:1232455</p>
      </div>
    </div>
  );
};

export default Dashboard;
