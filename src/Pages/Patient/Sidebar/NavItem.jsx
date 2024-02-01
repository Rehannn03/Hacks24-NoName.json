import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function NavItem({ icon, title, idx,to}) {
  
  
  return (
    <div
      className='h-12 flex justify-start items-center pl-4 text-base font-semibold gap-4 text-white hover:bg-[#58E186] hover:text-black cursor-pointer' 
      
    >
      <Link
      to={to}
      className="h-12 flex justify-start items-center pl-4 text-base font-semibold gap-4">
      {icon}
      {title}
      </Link>
      
    </div>
  );
}

export default NavItem;