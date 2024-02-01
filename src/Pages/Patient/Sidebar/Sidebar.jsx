import { useState } from 'react';
import Imagedisplay from './Imagedisplay'
import SidebarNavItems from './SideBarNavItem'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { slideIn } from '../../../utils/motion';
import { motion } from 'framer-motion';

function Sidebar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`h-screen top-0 sticky shadow-2xl w-48 bg-[#7B8DEA] sm; ${toggle ? ('lg:h-10 w-[40px]'):('visible')}`}>
      <div onClick={() => setToggle(!toggle)}>
        {!toggle ? (<GiHamburgerMenu size={40} className=' ml-[140px]'/>): (<IoMdClose size={40} className=' ml-[1px]'/>)}
      </div>
      {!toggle ? (<Imagedisplay/>): (<></>)}
      {!toggle ? (<SidebarNavItems/>): (<></>)}  
        
      
        
    </div>
  )
}

export default Sidebar