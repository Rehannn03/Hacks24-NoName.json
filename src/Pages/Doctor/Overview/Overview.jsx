import React from "react";
import PatienDiagonozied from "./PatienDiagonozied";
import UpcomingAppointment from "./UpcomingAppointment";

function Overview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <div>
        this is div 1
      </div>
      {/* <div className="bg-white-300 border-4 border-slate-600 border-solid p-4">
        <PatienDiagonozied />
      </div>
      <div className="bg-white-300 border-4 border-slate-600 border-solid p-4">
        <UpcomingAppointment />
      </div> */}
  </div>
  );
}

export default Overview;
