import React from 'react';
import {
    XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid
} from "recharts";
const Data = (props) => {
    const { data } = props.allData;
    return (
        <div className='container mt-12'>
            <ResponsiveContainer width="95%" height={300} className="md:mx-auto mx-0">
                <LineChart

                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <Line dataKey="total" fill="#8884d8" background={{ fill: "#eee" }} />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Data;