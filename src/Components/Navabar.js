import React from "react";
import User from "./Images/logo.webp";
const Navabar = () => {
  return (
    <div className="flex justify-between items-center h-12 rounded-b-2xl bg-neutral-200">
      <p className="text-xl font-bold pl-11">Smartbilling</p>
      <img
        className="w-10 h-10 mr-11 rounded-[50%]"
        alt="userprofile  relative top-0"
        src={User}
      ></img>
    </div>
  );
};
export default Navabar;
