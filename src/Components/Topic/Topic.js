import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom"

const Quiz = (props) => {
    const { logo, name, id } = props.topic;
    return (
        <div className=' border-2 rounded'>
            <img className=' bg-yellow-200' src={logo} alt="" />
            <div className='flex items-center justify-between my-5 mx-3'>
                <h4 className='text-xl'>{name}</h4>
                <Link to={`/quiz/${id}`}>
                    <button className=' py-2 md:py-3 px-5 md:px-6 bg-yellow-200 rounded text-sm md:text-base text-dark font-semibold'>
                        Start Practice
                        <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;