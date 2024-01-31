import React, { useState } from "react";
import NavItem from "./NavItem";
import {
  CalendarEvent,
  Chat,
  InfoCircle,
  Person,
  Sliders2,
} from "react-bootstrap-icons";
function SidebarNavItems() {
  return (
    <div className="SidebarNavItems flex-7 px-5 py-3">
      <NavItem
        icon={<InfoCircle className="text-light font-light" />}
        title="Overview"
        to='overview'
        
      />
      <NavItem
        icon={<CalendarEvent />}
        title="Calendar"
        to='/dashboard/calendar'
        
      />
      <NavItem
        icon={<Person />}
        title="Patient List"
        to='patientlist'
        
      />
      <NavItem
        icon={<Chat />}
        title="Messages"
        to={'/dashboard/messages'}
        
      />
      <NavItem
        icon={<Sliders2 />}
        title="Setting"
        to={'/dashboard/setting'}
        
      />
    </div>
  );
}

export default SidebarNavItems;
