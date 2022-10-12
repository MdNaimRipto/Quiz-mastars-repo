import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-8xl font-bold mb-5 mt-48'>4<span className='text-sky-500'>0</span>4</h1>
            </div>
            <div>
                <h3 className=' font-semibold mb-5 text-[#404040]'>THE PAGE YOU REQUESTED NOT FOUND</h3>
                <Link to="/home">
                    <button className='py-2 md:py-3 px-5 md:px-6 bg-sky-500 rounded text-sm md:text-base text-white font-semibold'>Return To Home Page</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;