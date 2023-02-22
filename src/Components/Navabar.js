import React from "react";
import User from "./Images/user.jpg";
const Navabar = () => {
  return (
    <div className="flex justify-between items-center rounded-b-2xl bg-neutral-200">
      <p className="text-xl font-bold pl-11">Smartbilling</p>
      <img
        className="w-11 h-11 mr-11 rounded-[50%]"
        alt="userprofile  relative top-0"
        src={User}
      ></img>
    </div>
  );
};
export default Navabar;
