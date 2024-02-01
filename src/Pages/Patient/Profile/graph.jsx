import React from 'react'
import { Chart as ChartJs } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const graph = () => {

  return (
    <div className=' mr-[-400px] ml-[70px] mt-[-350px] bg-white rounded-2xl h-[400px] w-[300px] flex justify-center items-center'>
        <Doughnut
            data ={{
                labels: ["A", "B", "C"],
                datasets: [
                    {
                        label: "Overview",
                        data: [30, 12, 14]
                    }
                ]
            }}
         />
    </div>
  )
}

export default graph