import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Pie, PieChart } from 'recharts';


const Statistics = () => {
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
    return (
        <div>
            <Navbar></Navbar>
            <div className=' container mx-auto'>
            <PieChart width={1130} height={1150} className='mx-auto'>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={10} outerRadius={100} fill="#82ca9d" label />
            </PieChart>
            </div>
        </div>
    );
};

export default Statistics;