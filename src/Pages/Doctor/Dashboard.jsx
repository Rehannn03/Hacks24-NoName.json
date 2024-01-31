import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Overview from './Overview/Overview'

function Dashboard() {
  return (
    <div>
        <Sidebar/>
        <Outlet/>   
    </div>
  )
}

export default Dashboard