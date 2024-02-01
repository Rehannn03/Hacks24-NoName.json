import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Dashboard from './Pages/Doctor/Dashboard.jsx'
import Overview from './Pages/Doctor/Overview/Overview.jsx'
import PatientList from './Pages/Doctor/Patient List/PatientList.jsx'
import PatientDashboard from './Pages/Patient/Dashboard.jsx'
import Report from './Pages/Patient/Report/Report.jsx'
import Profile from './Pages/Patient/Profile/Profile.jsx'
import Time from './Pages/Doctor/Calender/Calender.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} >
      <Route path='' element={<Hero />} />
      <Route path='about' element={<About />} />
    </Route>
    <Route path="/dashboard" element={<Dashboard />} >
      <Route path='overview' element={<Overview />} />
      <Route path='patientlist' element={<PatientList />} />
      <Route path='calender' element={<Time />} />
    </Route>
    <Route path="/patient" element={<PatientDashboard />} >
      <Route path='report' element={<Report />} />
      <Route path='profile' element={<Profile />} />
        
    </Route>
    </>
    
  )
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
