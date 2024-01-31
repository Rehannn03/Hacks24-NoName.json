import React from "react";
import PatienDiagonozied from "./PatienDiagonozied";
import UpcomingAppointment from "./UpcomingAppointment";

function Overview() {
  return (
    <div className=" grid grid-cols-2 mt-[-700px] h-[100000px]">
      <div className=" flex justify-center items-center h-screen w-screen mt-[-150px]">
        <PatienDiagonozied />
      </div>
      <div className=" mt-[400px]">
      <UpcomingAppointment />
      </div>
    </div>
  );
}

export default Overview;
