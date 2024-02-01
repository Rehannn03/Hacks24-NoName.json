import React, { useState } from "react";
import NavItem from "./NavItem";
import {
  CalendarEvent,
  Chat,
  Wallet,
  InfoCircle,
  Person,
  Sliders2,
} from "react-bootstrap-icons";
import Report from "../Report/Report";
function SidebarNavItems() {
  return (
    <div className="SidebarNavItems flex-7 px-5 py-3">
      <NavItem
        icon={<InfoCircle className="text-light font-light" />}
        title="Reports"
        to={"/patient/report"}
        
      />
      <NavItem
        icon={<CalendarEvent />}
        title="Profile"
        to={"/patient/profile"}
        
      />
      {/* <NavItem
        icon={<Person />}
        title="Future List"
        idx="3"
        
      /> */}
      
    </div>
  );
}

export default SidebarNavItems;
