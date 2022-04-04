import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div className='rechart'>
            <div>
            <LineChart width={500} height={350} data={data}>
                <Line dataKey={'investment'} stroke='green'></Line>
                <Line dataKey={'revenue'} stroke='red'></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>

            <h2>Investment vs Revenue</h2>

            </div>

           <div>
               
           <BarChart width={500} height={350} data= {data}>
                <Bar dataKey={'investment'} fill='green'></Bar>
                <Bar dataKey={'revenue'} fill='red'></Bar>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

            <h2>Investment vs Revenue</h2>
           </div>
        </div>
    );
};

export default Dashboard;