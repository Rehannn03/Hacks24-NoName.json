import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Dashboard from './Pages/Doctor/Dashboard.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} >
      <Route path='' element={<Hero />} />
      <Route path='about' element={<About />} />
    </Route>
    <Route path="/dashboard" element={<Dashboard />} /> 
    </>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
