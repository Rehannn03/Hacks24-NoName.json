import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import data from "./Data/data.json";
import { useEffect,useState } from "react";
function PatienDiagonozied() {
  const [dt,setDt]=useState([])
  useEffect( ()=>{
    fetch('http://localhost:3000/data.json')
    .then(res=>res.json())
    .then(dummy=>{
      console.log(dummy)
      setData(dummy)})
  },[])
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
  <div className="bg-white-300 border-4 border-slate-600 border-solid p-4">
    <Bar
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Patient Diagnosed",
            data: data[0].data,
            backgroundColor: data.map((item) => item.backgroundColor),
          },
        ],
      }}
    />
  </div>
  <div className="bg-white-300  p-4">
    <Line
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Patient Diagnosed",
            data: data[0].data,
            backgroundColor: data.map((item) => item.backgroundColor),
          },
          {
            label: "Patient UnDiagnosed",
            data: data[1].data,
            backgroundColor: data.map((item) => item.backgroundColor),
          },
        ],
      }}
    />
  </div>
</div>
  );
}

export default PatienDiagonozied;
