import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom"

const Quiz = (props) => {
    const { logo, name, id, total } = props.topic;
    return (
        <div className=' border-2 rounded mb-12'>
            <img className=' bg-gray-300' src={logo} alt="" />
            <div className='flex items-center justify-between my-5 mx-3'>
                <h4 className='text-xl font-semibold'>{name}</h4>
                <h4 className=' text-lg font-semibold'>Total Quiz: {total}</h4>
            </div>
            <Link to={`/quiz/${id}`}>
                <button className=' py-2 md:py-3 w-full md:px-6 bg-sky-200 rounded text-sm md:text-base text-dark font-semibold'>
                    Start Practice
                    <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </Link>
        </div>
    );
};

export default Quiz;