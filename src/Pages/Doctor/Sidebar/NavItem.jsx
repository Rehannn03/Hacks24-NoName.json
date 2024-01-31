import React, { useState, useEffect } from "react";

function NavItem({ icon, title, idx}) {
  
  
  return (
    <div
      className='h-12 flex justify-start items-center pl-4 text-base font-semibold gap-4 text-white hover:bg-[#58E186] hover:text-black cursor-pointer' 
      
    >
      {icon}
      {title}
    </div>
  );
}

export default NavItem;