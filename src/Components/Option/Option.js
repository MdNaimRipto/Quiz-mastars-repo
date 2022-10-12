import React from 'react';


const Option = ({ option, handleAnswer }) => {

    return (
        <button onClick={(e) => { handleAnswer(e) }} className="p-5 w-full shadow shadow-black rounded">
            {option}
        </button>
    );
};

export default Option;