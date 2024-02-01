import React from 'react'
import SidebarNavItems from './Sidebar/SideBarNavItem'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function PatientDashboard() {
  return (
    <div>
        <Sidebar/>
        <Outlet />
    </div>
  )
}

export default PatientDashboard