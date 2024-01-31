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
function SidebarNavItems() {
  return (
    <div className="SidebarNavItems flex-7 px-5 py-3">
      <NavItem
        icon={<InfoCircle className="text-light font-light" />}
        title="Overview"
        idx={1}
        
      />
      <NavItem
        icon={<CalendarEvent />}
        title="Calendar"
        idx="2"
        
      />
      <NavItem
        icon={<Person />}
        title="Patient List"
        idx="3"
        
      />
      <NavItem
        icon={<Chat />}
        title="Messages"
        idx="4"
        
      />
      <NavItem
        icon={<Sliders2 />}
        title="Setting"
        idx="6"
        
      />
    </div>
  );
}

export default SidebarNavItems;
