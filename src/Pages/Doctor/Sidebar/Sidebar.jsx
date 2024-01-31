import React from 'react'
import Imagedisplay from './Imagedisplay'
import SidebarNavItems from './SideBarNavItem'
function Sidebar() {
  return (
    <div className='sticky top-0 h-screen lg:w-56 w-40 bg-gray-800'>
        <Imagedisplay/>
        <SidebarNavItems/>
    </div>
  )
}

export default Sidebar