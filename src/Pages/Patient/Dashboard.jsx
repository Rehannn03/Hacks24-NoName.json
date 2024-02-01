import React from 'react'
import SidebarNavItems from './Sidebar/SideBarNavItem'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Sidebar/>
        <Outlet />
    </div>
  )
}

export default Dashboard