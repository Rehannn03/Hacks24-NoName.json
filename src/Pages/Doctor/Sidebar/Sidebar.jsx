import React from 'react'
import Imagedisplay from './Imagedisplay'
import SidebarNavItems from './SideBarNavItem'
function Sidebar() {
  return (
    <div className='h-screen w-48 bg-gray-800'>
        <Imagedisplay/>
        <SidebarNavItems/>
    </div>
  )
}

export default Sidebar