import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div
            className='home mx-auto container mt-4 flex flex-col justify-center items-center md:items-start pl-0 md:pl-8'>
            <h2 className=' text-2xl md:text-5xl text-white font-semibold mt-2 md:mt-8'>
                Develop your Skills with <span className='text-sky-400 underline'>Quiz Masters...</span>
            </h2>
            <p className=' my-2 md:my-5 text-sm md:text-xl text-slate-50'>
                Answer Different types of quiz in our website and grow Your knowledge. Prove Everyone Who Really you are.
            </p>
            <p className='mb-2 md:mb-5 text-xs md:text-base text-slate-50'>
                Click the Below Button for More
            </p>
            <Link to="/topics">
                <button className=' py-2 md:py-3 px-5 md:px-6 bg-sky-500 rounded text-sm md:text-base text-white font-semibold hover-effect'>
                    Quiz & Topics
                </button>
            </Link>
        </div>
    );
};

export default Home;