import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';

const Statistics = () => {
    const info = useLoaderData()
    const allData = info;
    console.log(allData)
    return (
        <div>
            <h2 className='text-3xl my-6'>All Quiz Information's are Showed by This Chart</h2>
            <Data allData={allData}></Data>
        </div>
    );
};

export default Statistics;