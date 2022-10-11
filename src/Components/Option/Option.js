import React from 'react';


const Option = ({ option, handleAnswer, handleClick }) => {

    return (
        <div className='border-2 shadow shadow-black rounded p-5'>
            <div>
                <button>
                    <p onClick={(e) => { handleAnswer(e) }}>{option}</p>
                </button>
            </div>
        </div >
    );
};

export default Option;