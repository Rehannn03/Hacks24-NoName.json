import React from 'react'
import { Line } from 'react-chartjs-2'

const graph2 = () => {
    
  return (
    <div classname="mr-[-400px] ml-[70px] mt-[-350px] bg-white rounded-2xl h-[400px] w-[300px] flex justify-center items-center">
        <Line
            data={{labels: ["A", "B", "C"],
            datasets: [
                {
                    label: "Overview",
                    data: [30, 12, 14]
                }
            ]}}
        />
    </div>
  )
}

export default graph2