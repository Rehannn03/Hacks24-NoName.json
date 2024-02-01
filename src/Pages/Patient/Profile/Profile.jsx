import React from 'react'
import Card from './Card.jsx'
import Graph from './graph.jsx'
import Graph2 from './graph2.jsx'

const Profile = () => {
  return (
    <div className=' h-500px w-screen flex justify-center items-center mt-[-700px] '>
      <div className=' bg-slate-200 rounded-2xl shadow-2xl h-[900px] w-[900px] flex justify-center items-center place-it mt-[100px] ml-[150px]'>
        <Card />
        <Graph />
        <div className=' ml-[-270px] mt-[300px]'>
        <Graph2 />
        </div>
        
      </div>

    </div>
  )
}

export default Profile