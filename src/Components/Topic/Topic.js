import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom"

const Quiz = (props) => {
    const { logo, name, id } = props.topic;
    return (
        <div className=' border-2 rounded'>
            <img className=' bg-yellow-200' src={logo} alt="" />
            <div>
                <h4>{name}</h4>
                <Link to={`/quiz/${id}`}>
                    <button>
                        Start Practice
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;